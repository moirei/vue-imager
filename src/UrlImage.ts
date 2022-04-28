import isNil from "lodash.isnil";
import {
  ImagerOption,
  Pixel,
  Interpreter,
  Position,
  FlipDirection,
  ImageFunc
} from "types/imager";
import { getUrl, mergeDeep, normaliseImagerParams } from "./utils";

type ParamType = string | number | Array<any> | boolean;

export class UrlImage {
  private paths: (string | number)[] = [];
  private extraParams: Record<string, ParamType | undefined> = {};

  constructor(
    protected url: string,
    protected options: ImagerOption = {},
    protected interpreter: Interpreter = getUrl
  ) {
    //
  }

  /**
   * Append new pathes to the urls.
   *
   * @param {T} paths
   * @returns {UrlImage}
   */
  public append<T extends (string | number)[]>(...paths: T) {
    this.paths = this.paths.concat(paths);
    return this;
  }

  /**
   * Add extra params to url.
   *
   * @param {T} paths
   * @returns {UrlImage}
   */
  public param(params: Record<string, ParamType>): UrlImage;
  public param(param: string, value: ParamType): UrlImage;
  public param(param: string | Record<string, ParamType>, value?: ParamType) {
    if (typeof param === "string") {
      this.extraParams[param] = value;
    } else {
      Object.assign(this.extraParams, param);
    }
    return this;
  }

  /**
   * Set image size (width and height).
   *
   * @param {Pixel} width
   * @param {Pixel} value
   * @param {ImageFunc|ImageFunc[]} func
   * @returns {UrlImage}
   */
  public size(width: Pixel, height?: Pixel, func?: ImageFunc | ImageFunc[]) {
    this.options.width = width;
    this.options.height = height;
    if (func) {
      this.options.func = func;
    }
    return this;
  }

  /**
   * Set image width.
   *
   * @param {Pixel} value
   * @returns {UrlImage}
   */
  public width(value: Pixel) {
    this.options.width = value;
    return this;
  }

  /**
   * Set image height.
   *
   * @param {Pixel} value
   * @returns {UrlImage}
   */
  public height(value: Pixel) {
    this.options.height = value;
    return this;
  }

  /**
   * Crop image.
   *
   * @param {Pixel} width
   * @param {Pixel} height
   * @param {Pixel} x
   * @param {Pixel} y
   * @returns {UrlImage}
   */
  public crop(width: Pixel, height?: Pixel, x?: Pixel, y?: Pixel) {
    this.options.crop = [width, height, x, y];
    return this;
  }

  /**
   * Flip image in either horizontal or vertical direction.
   *
   * @param {FlipDirection} direction
   * @returns {UrlImage}
   */
  public flip(direction: FlipDirection = "v") {
    this.options.flip = direction;
    return this;
  }

  /**
   * Force convert the image to a given format.
   *
   * @param {string} convert
   * @returns {UrlImage}
   */
  public convert(convert: string) {
    this.options.convert = convert;
    return this;
  }

  /**
   * Apply text over image.
   *
   * @param {string} text
   * @returns {UrlImage}
   */
  public text(text: string) {
    this.options.text = text;
    return this;
  }

  /**
   * Apply text over image.
   *
   * @param {Pixel} diameter Diameter of the circle in pixels.
   * @param {Pixel} x x-coordinate of the center.
   * @param {Pixel} y y-coordinate of the center.
   * @returns {UrlImage}
   */
  public circle(diameter: Pixel): UrlImage;
  public circle(diameter: Pixel, x: Pixel, y: Pixel): UrlImage;
  public circle(diameter: Pixel, x?: Pixel, y?: Pixel): UrlImage {
    this.options.circle = [diameter, x, y];
    return this;
  }

  /**
   * Apply a background color.
   *
   * @param {string} background
   * @returns {UrlImage}
   */
  public background(background: string) {
    this.options.background = background;
    return this;
  }

  /**
   * Fit to size.
   *
   * @param {Pixel} width
   * @param {Pixel} height
   * @param {Position} position
   * @returns {UrlImage}
   */
  public fit(width?: Pixel, height?: Pixel, position?: Position) {
    if (isNil(width)) {
      this.applyFunc("fit");
    } else {
      this.options.fit = [width, height, position];
    }
    return this;
  }

  /**
   * Set image brightness.
   *
   * @param {Pixel} brightness
   * @returns {UrlImage}
   */
  public brightness(brightness: Pixel) {
    this.options.brightness = brightness;
    return this;
  }

  /**
   * Contrast the image.
   *
   * @param {Pixel} contrast
   * @returns {UrlImage}
   */
  public contrast(contrast: Pixel) {
    this.options.contrast = contrast;
    return this;
  }

  /**
   * Blur the image.
   *
   * @param {Pixel} blur
   * @returns {UrlImage}
   */
  public blur(blur: Pixel) {
    this.options.blur = blur;
    return this;
  }

  /**
   * Sharpen the image.
   *
   * @param {Pixel} sharpeness
   * @returns {UrlImage}
   */
  public sharpen(sharpeness: Pixel) {
    this.options.sharpen = sharpeness;
    return this;
  }

  /**
   * Apply a pixelation effect to the current image with a given size of pixels.
   *
   * @param {Pixel} size
   * @returns {UrlImage}
   */
  public pixelate(size: Pixel) {
    this.options.pixelate = size;
    return this;
  }

  /**
   * Apply a pixelation effect to the current image with a given size of pixels.
   *
   * @param {Pixel} size
   * @returns {UrlImage}
   */
  public greyscale() {
    this.applyFunc("grey");

    return this;
  }

  /**
   * Get the image url.
   * @returns
   */
  public get(): string {
    return this.interpreter(
      [this.url, ...this.paths].join("/"),
      mergeDeep(normaliseImagerParams(this.options), this.extraParams)
    );
  }

  /**
   * Get the image url string.
   * @returns
   */
  public toString() {
    return this.get();
  }

  /**
   * Apply a function to options
   * @param {ImageFunc} func
   * @returns
   */
  private applyFunc(func: ImageFunc) {
    if (!this.options.func || typeof this.options.func === "string") {
      if (this.options.func) {
        this.options.func = [this.options.func, func];
      } else {
        this.options.func = func;
      }
    } else {
      this.options.func.push(func);
    }

    return this;
  }
}
