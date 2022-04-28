# Loading Amination

Sometimes it's useful to display a loading animation while waiting for images to load. This can be achieved by rendering the image src as background image and making use of the `default` slot.

The below example uses Vuetify's `v-overlay` to get the same effect available with `v-img`. You can also use in conjunction with `lazy-src` for a more advanced feel.

```html
<v-imager tag="div" height="200" width="200" :src="src">
  <template #default="{ loading }">
    <v-overlay absolute :value="loading">
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey lighten-5" />
      </v-row>
    </v-overlay>
  </template>
</v-imager>
```

## Examples

<demo-code class="mt-4" name="examples-loading-animation">
<<< @/docs/.vuepress/components/examples/loading-animation.vue
</demo-code>
