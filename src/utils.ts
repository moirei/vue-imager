import get from "lodash.get";
import mapKeys from "lodash.mapkeys";
import { stringify, parseUrl } from "query-string";
import {
  ImagerOption,
  ImagerParams,
  Interpreter,
  ImageSize,
  ImagerOptions,
  Breakpoints
} from "types/imager";
import { PropOptions } from "vue";
import { Aliases, Sizes } from "./constants";

type ComponentProps<K extends keyof ImagerOptions = keyof ImagerOptions> = {
  [k in K]: PropOptions<ImagerOptions[k]>;
};

export const componentProps: ComponentProps = {
  background: { type: String },
  // @ts-ignore
  border: { type: Array },
  blur: { type: [Number, String] },
  brightness: { type: [Number, String] },
  // @ts-ignore
  circle: { type: Array },
  contrast: { type: [Number, String] },
  convert: { type: String },
  // @ts-ignore
  crop: { type: [Array, Boolean], default: undefined },
  // @ts-ignore
  fit: { type: [Array, Boolean], default: undefined },
  // @ts-ignore
  flip: { type: String },
  func: {
    // @ts-ignore
    type: [Array, String]
    // validator: (v: ImageFunc) => ImageFuncs.includes(v),
  },
  grey: { type: Boolean, default: undefined },
  height: { type: [Number, String] },
  pixelate: { type: [Number, String] },
  sharp: { type: [Number, String] },
  text: { type: String },
  width: { type: [Number, String] },
  quality: { type: [Number, String] }
};

export const getComponentProps = () => {
  const props: Record<string, any> = {};

  for (const prop in componentProps) {
    props[prop] = componentProps[prop as keyof ComponentProps];
  }

  Sizes.forEach((size) => {
    for (const prop in componentProps) {
      props[prop + upperFirst(size)] =
        componentProps[prop as keyof ComponentProps];
    }
  });

  return props;
};

export const parseComponentProps = (props: any): ImagerOptions => {
  const options: Record<string, any> = {};

  for (const prop in componentProps) {
    if (props[prop] !== undefined) {
      options[prop] = props[prop];
    }
  }

  if (props.w !== undefined) options.width = convertToValue(props.w);
  else if (options.width) options.width = convertToValue(options.width);

  if (props.h !== undefined) options.height = convertToValue(props.h);
  else if (options.height) options.height = convertToValue(options.height);

  Sizes.forEach((size) => {
    const opts: Record<string, any> = {};
    let empty = true;
    for (const prop in componentProps) {
      const value = props[prop + upperFirst(size)];
      if (value !== undefined) {
        empty = false;
        opts[prop] = value;
      }
    }

    if (!empty) {
      options[size] = opts;
    }
  });

  return options as ImagerOptions;
};

export const normaliseImagerParams = (options?: ImagerOption): ImagerParams => {
  if (!options) {
    return {};
  }
  return mapKeys(options, (_value, key) => {
    if (key in Aliases) {
      // @ts-ignore
      return Aliases[key];
    }
    return key;
  });
};

export const getBreakpoint = (
  size: number,
  breakpoints: Breakpoints
): ImageSize => {
  const sizes = [...Sizes];
  let s: ImageSize = sizes.pop() as ImageSize;

  for (const x of sizes) {
    if (size < get(breakpoints, x)) {
      s = x as ImageSize;
      break;
    }
  }
  return s;
};

export const getUrl: Interpreter = (url, options) => {
  if (options) {
    for (const key of Object.keys(options) as (keyof ImagerParams)[]) {
      if (options[key] === true) {
        options[key] = 1 as any;
      } else if (options[key] === false) {
        delete options[key];
      }
    }

    // considers existing params
    const parsedUrl = parseUrl(url);
    const params = stringify(Object.assign(parsedUrl.query, options), {
      arrayFormat: "index",
      skipNull: true
    });

    if (params) {
      return parsedUrl.url + "?" + params;
    }
  }
  return url;
};

/**
 * Makes the first character of a string uppercase
 */
export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const isServer = () => typeof window === "undefined";

export function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === "object";
}

export function convertToValue(
  str: string | number | null | undefined
): number | undefined {
  if (!str) return undefined;
  str = String(str);
  if (str.includes("%")) {
    return undefined;
  } else if (str.includes("vh")) {
    return !isServer() ? (window.innerHeight * parseInt(str)) / 100 : undefined;
  } else if (str.includes("vw")) {
    return !isServer() ? (window.innerWidth * parseInt(str)) / 100 : undefined;
  } else {
    return parseInt(str);
  }
}

export function convertToUnit(
  str: string | number | null | undefined,
  unit = "px"
): string | undefined {
  if (str == null || str === "") {
    return undefined;
  } else if (isNaN(+str!)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}

export function mergeDeep<T, S>(source: S, target: T): S & T {
  for (const key in target) {
    // @ts-ignore
    const sourceProperty = source[key];
    const targetProperty = target[key];

    // Only continue deep merging if
    // both properties are objects
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      // @ts-ignore
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }

    // @ts-ignore
    source[key] = targetProperty;
  }

  // @ts-ignore
  return source;
}

export const logger = {
  log(...msgs: any[]) {
    console.log("[vue-imager]", ...msgs);
  },
  warn(...msgs: any[]) {
    console.warn("[vue-imager]", ...msgs);
  },
  info(...msgs: any[]) {
    console.info("[vue-imager]", ...msgs);
  },
  error(...msgs: any[]) {
    console.error("[vue-imager]", ...msgs);
  }
};

export const isBool = <T, V = T extends boolean ? true : false>(v: T): V =>
  (typeof v === "boolean") as any;

export function getSlot(
  vm: Vue,
  name = "default",
  data?: object | (() => object),
  optional = false
) {
  if (vm.$scopedSlots.hasOwnProperty(name)) {
    return vm.$scopedSlots[name]!(data instanceof Function ? data() : data);
  } else if (vm.$slots.hasOwnProperty(name) && (!data || optional)) {
    return vm.$slots[name];
  }
  return undefined;
}
