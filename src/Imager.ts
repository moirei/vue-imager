import get from "lodash.get";
import omit from "lodash.omit";
import {
  ImagerOptions,
  Urls,
  Interpreter,
  ImageSize,
  ImagerOption
} from "types/imager";
import { Sizes } from "./constants";
import { getUrl, normaliseImagerParams, mergeDeep } from "./utils";

export class Imager {
  constructor(
    protected baseUrl: string,
    protected options: ImagerOptions = {},
    protected interpreter: Interpreter = getUrl
  ) {
    //
  }

  /**
   * Get urls.
   *
   * @param {string} src The image src
   * @param {ImagerOptions} options
   * @returns {string}
   */
  public urls(src: string, options?: ImagerOptions): Urls {
    const urls: Urls = {} as Urls;

    Sizes.forEach((size) => {
      urls[size] = this.interpreter(
        `${this.baseUrl}/${src}`,
        this.getOption(size, options)
      );
    });

    return urls;
  }

  /**
   * Get url with options.
   *
   * @param {string} src The image src
   * @param {ImagerOption} option
   * @returns {string}
   */
  public url(src: string, option: ImagerOption): string {
    return this.interpreter(
      `${this.baseUrl}/${src}`,
      normaliseImagerParams(option)
    );
  }

  /**
   * Get url for size.
   *
   * @param {string} src The image src
   * @param {ImageSize} size
   * @param {ImagerOptions} options
   * @returns {string}
   */
  public sizeUrl(
    src: string,
    size: ImageSize,
    options?: ImagerOptions
  ): string {
    return this.interpreter(
      `${this.baseUrl}/${src}`,
      this.getOption(size, options)
    );
  }

  /**
   * Get the option for size.
   *
   * @param {ImageSize} name
   * @param {ImagerOptions} options
   * @returns {ImagerOption}
   */
  public getOption(name: ImageSize, options?: ImagerOptions): ImagerOption {
    const onlySize = (o?: ImagerOptions) => {
      const opts = omit(o || {}, Sizes);
      return mergeDeep(opts, get(o, name, {}));
    };

    const merged = mergeDeep(onlySize(this.options), onlySize(options));

    return normaliseImagerParams(merged);
  }
}
