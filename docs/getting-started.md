# Getting Started

<code-group>
<code-block title="YARN" active>
```bash
yarn add @moirei/vue-imager
```
</code-block>

<code-block title="NPM">
```bash
npm install @moirei/vue-imager
```
</code-block>
</code-group>

## Quick Start

The quickest way to get started is to install the plugin with all components.

```typescript
import Vue from "vue";
import VueImager from "@moirei/vue-imager";

Vue.use(VueImager, {
  baseUrl: "https://demo.cloudimg.io/v7",
});
```

After this, you can start displaying awesome dynamic images.

```html
<v-imager
  src="https://cloudimage.public.airstore.io/demo/tim-patch.jpg"
  height="400"
  width-xm="500"
/>
```

An imager instance can be accessed in any component.

```typescript
export default Vue.extend({
  mounted() {
    const urls = this.$imager.urls(
      "https://cloudimage.public.airstore.io/demo/tim-patch.jpg"
    );
  },
});
```
