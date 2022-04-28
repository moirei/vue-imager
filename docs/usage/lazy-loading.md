# Lazy Loading

Lazy loading can be enabled via the `lazy` prop. An optional src can also be provided via the `lazy-src` prop for something to show while waiting for images to load.

When enabled, the component element is loaded and becomes visible when there is an intersection.

```html
<v-imager
  src="https://picsum.photos/500/300?image=15"
  lazy-src="https://picsum.photos/10/6?image=15"
  max-height="125"
  lazy
/>
```

## Examples

<demo-code class="mt-4" name="examples-lazy-loading">
<<< @/docs/.vuepress/components/examples/lazy-loading.vue
</demo-code>
