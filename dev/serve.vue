<template>
  <div id="app">
    <div style="display: flex">
      <div>
        <h2>Image</h2>
        <v-imager
          src="c3d54b5c-94a4-44e4-b447-b13b1548f449"
          base-url="https://graph.orie.internal/media/img"
          max-height="200"
          height="200"
          blur-lg="30"
          lazy
          lazy-src="https://picsum.photos/id/11/10/6"
        />
      </div>
      <div style="margin-left: 20px">
        <h2>Picture</h2>
        <v-imager
          src="c3d54b5c-94a4-44e4-b447-b13b1548f449"
          base-url="https://graph.orie.internal/media/img"
          max-height="200"
          height="200"
          tag="picture"
          lazy
          lazy-src="https://picsum.photos/id/11/10/6"
        />
      </div>
    </div>
    <div>
      <h2>Background</h2>
      <v-imager
        src="c3d54b5c-94a4-44e4-b447-b13b1548f449"
        base-url="https://graph.orie.internal/media/img"
        max-height="200"
        height="200"
        tag="section"
        lazy
        lazy-src="https://picsum.photos/id/11/10/6"
      >
        Body text
      </v-imager>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { VImager } from "@/entry.esm";
import { VImager } from "@/components/VImager";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VImager,
  },
});
</script>
