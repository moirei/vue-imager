# Responsive Imaging

[v-imager](/components/v-imager) is also packed with the ability to dynamically detect device sizes and apply imaging options based on configured breakpoints.
Available sizes are **xs**, **sm**, **md**, **lg** and **xl**. These can be suffixed to any of the imaging props.

```html
<v-imager :src="src" height="200" height-lg="500" blur-xs="5" grey-xs />
```

Alternatively, responsive imaging options may be configured globally via plugin options.

```typescript
import Vue from "vue";
import VueImager from "@moirei/vue-imager";

Vue.use(VueImager, {
  baseUrl: "https://demo.cloudimg.io/v7",
  responsive: {
    height: 200,
    lg: {
      height: 500,
    },
    xs: {
      blur: 5,
      grey: true,
    },
  };
});
```

## Examples

Resize your browser to see changes.

<demo-code name="examples-responsive-imaging">
<<< @/docs/.vuepress/components/examples/responsive-imaging.vue
</demo-code>
