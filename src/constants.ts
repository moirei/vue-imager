import { Breakpoints } from "types/imager";

export const Sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export const Aliases = {
  width: "w",
  height: "h",
  func: "f",
  bg: "bg_colour",
  background: "bg_colour",
  brightness: "bright",
  pixellate: "pixelate",
  quality: "q",
  convert: "force_format",
  sharpen: "sharp",
  gray: "grey",
  greyscale: "grey"
} as const;

export const ImageFuncs = ["fit", "crop", "invert", "trim", "grey"] as const;

export const defaultBreakpoints: Breakpoints = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
