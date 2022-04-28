import Vue, { VNode } from "vue";
import debounce from "lodash.debounce";
import {
  componentProps,
  convertToUnit,
  getBreakpoint,
  getSlot,
  isServer,
  logger,
  parseComponentProps,
  upperFirst
} from "@/utils";
import props from "./props";
import { ImageSize, Pixel } from "types/imager";
import measurable from "@/mixins/measurable";
import resize from "@/directives/resize";
import { Imager } from "@/Imager";
import { defaultBreakpoints, Sizes } from "@/constants";
import "./VImager.scss";

export default Vue.extend({
  name: "VImager",
  props,
  mixins: [measurable],
  directives: { resize },
  data() {
    return {
      server: isServer(),
      isLoading: true,
      images: {} as Record<ImageSize, HTMLImageElement>,
      loaded: {} as Record<ImageSize, boolean>,
      observer: null as IntersectionObserver | null,
      intersected: false,
      // currentSrc: "",
      currentSrc: {} as Record<ImageSize, string>,
      imgSrc: "",
      size: null as ImageSize | null,
      imager: null as Imager | null,
      hasError: false,
      calculatedAspectRatio: undefined as number | undefined,
      naturalSize: {} as Record<ImageSize, { width: Pixel; height: Pixel }>
    };
  },
  mounted() {
    if (!this.server) {
      this.init();
    }
  },
  methods: {
    init() {
      const config = this.$imagerConfig || this.$parent.$imagerConfig;
      if (config && !this.baseUrl) {
        const imagerName = config.as;
        // @ts-ignore
        this.imager = this[`$${imagerName}`] || this.$parent[`$${imagerName}`];
      } else {
        this.imager = new Imager(this.baseUrl || "");
      }

      this.determineSize();

      if (this.lazy) {
        if ("IntersectionObserver" in window) {
          this.observer = new IntersectionObserver((entries) => {
            const image = entries[0];
            if (image.isIntersecting) {
              this.intersected = true;
              this.observer?.disconnect();
              this.$emit("intersect");
              this.loadImage();
            }
          }, this.options);
          this.observer.observe(this.$el);
        } else {
          // load image anyway
          this.loadImage();
        }
      } else {
        this.loadImage();
      }

      if (!this.noWatch) {
        this.registerPropWatchers();
      }
    },
    loadImage() {
      const size = this.size;
      if (!this.imager || !size) return;

      const src = this.detached
        ? this.src
        : this.imager.sizeUrl(this.src, size, parseComponentProps(this));

      const image = new Image();
      this.images[size] = image;

      this.isLoading = true;
      this.$emit("loadstart", { src, size });

      image.onload = () => {
        this.loaded[size] = true;
        if (image.decode) {
          image
            .decode()
            .catch((err: DOMException) => {
              logger.warn(
                `Failed to decode image, trying to render anyway\n\n` +
                  `src: ${this.src}` +
                  (err.message ? `\nOriginal error: ${err.message}` : ""),
                this
              );
            })
            .then(this.onLoad);
        } else {
          this.onLoad();
        }
      };

      image.onerror = (error) => this.onError(src, size, error);

      this.hasError = false;
      this.sizes && (image.sizes = this.sizes);
      image.src = src;

      this.pollForSize(image, size);
      this.getSrc();
    },
    registerPropWatchers() {
      const handler = debounce(() => this.loadImage(), 300);

      this.$watch("h", handler);
      this.$watch("w", handler);
      for (const prop in componentProps) {
        this.$watch(prop, handler);
      }
      Sizes.forEach((size) => {
        for (const prop in componentProps) {
          this.$watch(prop + upperFirst(size), handler);
        }
      });
    },
    currentImage(): HTMLImageElement | void | undefined {
      if (!this.size) return;
      return this.images[this.size];
    },
    onResize() {
      this.determineSize();
      if (!this.currentImage() && !(this.lazy && !this.intersected)) {
        this.isLoading = true;
        this.loadImage();
      } else {
        this.getSrc();
      }
    },
    determineSize() {
      if (!this.server) {
        this.size = getBreakpoint(window.innerWidth, this.getBreakpoints());
        this.$emit("resize", this.size);
      }
    },
    getBreakpoints() {
      if (this.breakpoints) return this.breakpoints;
      if (this.$imagerConfig) return this.$imagerConfig.breakpoints;
      return defaultBreakpoints;
    },
    getSrc() {
      const image = this.currentImage();
      if (image && this.size) {
        if (this.eager || (image.complete && image.naturalHeight !== 0)) {
          // if image is loaded
          this.currentSrc[this.size] = image.currentSrc || image.src;
        } else if (!this.currentSrc[this.size]) {
          // else set to lazy src if not previously loaded
          this.currentSrc[this.size] = this.lazySrc;
        }
      }
      if (this.size) {
        this.imgSrc = this.currentSrc[this.size];
      } else {
        this.imgSrc = this.lazySrc;
      }
    },
    onLoad() {
      this.isLoading = false;
      this.getSrc();
      this.$emit("load", this.imgSrc);

      // if (
      //   this.image &&
      //   (this.imgSrc.endsWith(".svg") ||
      //     this.imgSrc.startsWith("data:image/svg+xml"))
      // ) {
      //   if (this.image.naturalHeight && this.image.naturalWidth) {
      //     this.naturalWidth = this.image.naturalWidth;
      //     this.calculatedAspectRatio =
      //       this.image.naturalWidth / this.image.naturalHeight;
      //   } else {
      //     this.calculatedAspectRatio = 1;
      //   }
      // }
    },
    onError(src: string, size: ImageSize, error: Event | string) {
      this.hasError = true;
      this.$emit("error", { src, size, error });
    },
    pollForSize(
      img: HTMLImageElement,
      size: ImageSize,
      timeout: number | null = 100
    ) {
      const poll = () => {
        const { naturalHeight, naturalWidth } = img;

        if (naturalHeight || naturalWidth) {
          this.naturalSize[size] = {
            width: naturalWidth,
            height: naturalHeight
          };
          this.calculatedAspectRatio = naturalWidth / naturalHeight;
        } else if (
          !img.complete &&
          this.isLoading &&
          !this.hasError &&
          timeout != null
        ) {
          setTimeout(poll, timeout);
        }
      };

      poll();
    },
    getStyleWidth() {
      if (this.w) return this.w;
      if (this.width) return this.width;
      if (!this.size) return;
      return this.naturalSize[this.size]?.width;
    },
    getStyleHeight() {
      if (this.h) return this.h;
      if (this.height) return this.height;
      if (!this.size) return;
      return this.naturalSize[this.size]?.height;
    }
  },
  beforeDestroy() {
    if ("IntersectionObserver" in window && this.observer) {
      this.observer.disconnect();
    }
  },
  render(h) {
    let node: VNode;

    const imgElement = () => {
      return h("img", {
        staticClass: "v-imager-img",
        attrs: {
          alt: this.alt,
          src: this.imgSrc
        },
        class: [
          this.className,
          {
            "v-imager-image--preload": this.isLoading
          }
        ],
        style: {
          // @ts-ignore
          ...this.measurableStyles,
          width: convertToUnit(this.getStyleWidth()),
          height: convertToUnit(this.getStyleHeight())
        },
        directives: [
          {
            name: "resize",
            modifiers: { once: true },
            value: this.onResize
          }
        ]
      });
    };

    if (this.tag === "img") {
      node = imgElement();
    } else if (this.tag === "picture") {
      const img = imgElement();
      node = h(
        "picture",
        this.intersected ? [this.$slots.default, img] : [img]
      );
    } else {
      const style = {
        backgroundImage: `url("${this.imgSrc}")`,
        backgroundPosition: this.position,
        // @ts-ignore
        ...this.measurableStyles
      };
      if (this.applyNaturalSize) {
        style.width = convertToUnit(this.getStyleWidth());
        style.height = convertToUnit(this.getStyleHeight());
      }

      const defaultSlot = getSlot(this, "default", {
        loading: this.isLoading,
        intersected: this.intersected,
        size: this.size
      });

      node = h(
        this.tag,
        {
          staticClass: "v-imager-background",
          attrs: {
            "aria-label": this.alt,
            role: this.alt ? "img" : undefined
          },
          class: [
            this.className,
            {
              "v-imager-background--preload": this.isLoading,
              "v-imager-background--contain": this.contain,
              "v-imager-background--cover": !this.contain
            }
          ],
          style,
          directives: [
            {
              name: "resize",
              modifiers: { once: true },
              value: this.onResize
            }
          ]
        },
        [defaultSlot]
      );
    }

    return node;
  }
});
