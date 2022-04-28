# vue-imager

A Vue library for displaying rich media images. Designed with [MOIREI Media Library](https://github.com/moirei/media-library) in mind but compatible [cloudimage.io](https://www.cloudimage.io/) and similar imaging servers.

Dodocumentation and demos are available at the [documentation site](https://moirei.github.io/vue-imager/).

## :green_heart: Features

- Reactive image manipulation
- Responsive
- Lazy loading
- Custom image url interpreter

## Quick start

```bash
npm i @moirei/vue-imager
```

The quickest way to get started is to install the plugin with all components.

```typescript
import Vue from "vue";
import VueImager from "@moirei/vue-imager";

Vue.use(VueImager, {
  baseUrl: "https://demo.cloudimg.io/v7",
});
```

Use v-imager component anywhere.

```html
<v-imager
  src="https://cloudimage.public.airstore.io/demo/tim-patch.jpg"
  height="400"
  width-xm="500"
  blur="20"
  pixelate-sm="5"
  sharp-md="10"
/>
```
