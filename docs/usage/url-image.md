# UrlImage

The `UrlImage` class can be directly used to generate src URLs.

Example usage in a component.

```vue
<template>
  <img :src="src" />
</template>

<script lang="ts">
import Vue from "vue";
import { UrlImage } from "@moirei/vue-imager";

export default Vue.extend({
  data: () => ({
    baseUrl: "https://demo.cloudimg.io/v7",
    src: "https://cloudimage.public.airstore.io/demo/tim-patch.jpg",
  }),
  computed: {
    url() {
      return new UrlImage(this.baseUrl, {
        height: 400,
        lg: {
          sharp: 20,
        },
      })
        .convert("png")
        .fit()
        .append(this.src);
    },
  },
});
</script>
```
