# Customize

## Breakpoints

Breakpoint can be configured globally when registering the plugin.

```typescript
import Vue from "vue";
import VueImager from "@moirei/vue-imager";

...
Vue.use(VueImager, {
  ...
  breakpoints: {
    xs: 600, // < 600px
    sm: 960, // 600px > < 960px
    md: 1264, // 960px > < 1264px
    lg: 1904, // 1264px > < 1904px
  }
});
```

Therefore **lg** (4k and ultra-wide) is > 1904px.

Alternately breakpoint options can be provided to individual components.

```html
<v-imager src="myimage.png" height="400" :breakpoints="breakpoints" />
```

## Responsive Imaging

Similar to breakpoints, imaging options can be applied based on device type and breakpoints.
The below options configures all image to have height of `400`, applies fixed width and pixellation on mobile phones, but sharpen images on 4k altra-side screens.

```typescript
...
Vue.use(VueImager, {
  ...
  responsive: {
    height: 400,
    xm: {
      width: 500,
      pixelate: 5,
    },
    xl: {
      sharpen: 20,
    }
  }
});
```

Same can be done directly via the component props

```html
<v-imager
  src="myimage.png"
  height="400"
  width-xm="500"
  pixelate-xm="4"
  sharpen-xl="20"
/>
```

## Custom Interpreter

The default interpreter converts to `true` boolean values to `1` and completely omits them when `false`. In addition, array values are stringified using `index` format. You can provide an alternate interpreter for a more tailored use case.

```typescript
import { Interpreter, ImagerParams } from "@moirei/vue-imager";
import { stringify, parseUrl } from "query-string";

export const myCustomInterpreter: Interpreter = (
  url,
  options
) => {
  if (options && Object.keys(options).length) {
    for (const key of Object.keys(options) as (keyof ImagerParams)[]) {
      if (options[key] === true) {
        options[key] = 1 as any;
      } else if (options[key] === false) {
        delete options[key] = 0;
      }
    }

    // considers existing params
    const parsedUrl = parseUrl(url);
    const params = stringify(Object.assign(parsedUrl.query, options), {
      arrayFormat: "bracket",
      skipNull: true,
    });

    if (params) {
      return parsedUrl.url + "?" + params;
    }
  }
  return url;
};
```

Provide globally.

```typescript
import Vue from "vue";
import VueImager from "@moirei/vue-imager";

...
Vue.use(VueImager, {
  ...
  interpreter: myCustomInterpreter
});
```

Use with `Imager`.

```typescript
import { Imager } from "@moirei/vue-imager";

...
const imager = new Imager(baseUrl, options, myCustomInterpreter);
```

Same with `UrlImage`.
