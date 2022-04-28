import { Aliases, ImageFuncs, Sizes } from "@/constants";
import { Imager } from "@/Imager";

export type ImageSize = typeof Sizes[number];

type TBreakpoints<K extends ImageSize = ImageSize> = {
  [k in K]: number;
};
export type Breakpoints = Omit<TBreakpoints, "xl">;

export type Urls<K extends ImageSize = ImageSize> = {
  [k in K]: string;
};

export type Pixel = number | string;

export type ImageFunc = typeof ImageFuncs[number];

type Optional<T> = T | undefined;

export type Interpreter = (baseUrl: string, options?: ImagerParams) => string;

export type Position =
  | "top-left"
  | "top"
  | "top-right"
  | "left"
  | "center"
  | "right"
  | "bottom-left"
  | "bottom"
  | "bottom-right";

export type FlipDirection = "v" | "h";

export type ImagerParams = Partial<{
  w: Pixel;
  h?: Pixel;
  bg_colour?: string;
  bright?: Pixel;
  pixelate?: Pixel;
  contrast?: Pixel;
  blur?: Pixel;
  sharp?: Pixel;
  q?: number | string;
  force_format?: string;
  grey?: boolean;
  flip?: FlipDirection;
  text?: string;
  border?: [Pixel] | [Pixel, Optional<Pixel>];
  circle?: [Pixel] | [Pixel, Optional<Pixel>, Optional<Pixel>];
  crop?: [Pixel, Optional<Pixel>, Optional<Pixel>, Optional<Pixel>];
  fit?: [Pixel, Optional<Pixel>, Optional<Position>];
  f?: ImageFunc | ImageFunc[];
}>;

type TAliases = typeof Aliases;
type KAliases = keyof TAliases;

type AliasOptions<K extends KAliases = KAliases> = Partial<{
  [k in K]: ImagerParams[TAliases[k]];
}>;

export type ImagerOption = ImagerParams & AliasOptions;

export interface ImagerOptions extends ImagerOption {
  xs?: ImagerOption;
  sm?: ImagerOption;
  md?: ImagerOption;
  lg?: ImagerOption;
}

export type ImagerConfig = {
  baseUrl: string;
  responsive: ImagerOptions;
  as: string;
  breakpoints: Breakpoints;
  interpreter: Interpreter;
};

declare module "vue/types/vue" {
  interface Vue {
    $imager: Imager;
    $imagerConfig: ImagerConfig;
  }
}

declare module "@nuxt/types" {
  // access from asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $imager: Imager;
    $imagerConfig: ImagerConfig;
  }

  // access from context
  interface Context {
    $imager: Imager;
    $imagerConfig: ImagerConfig;
  }
}

declare module "vuex/types/index" {
  // access via this.$game inside Vuex stores
  interface Store<S> {
    $imager: Imager;
  }
}
