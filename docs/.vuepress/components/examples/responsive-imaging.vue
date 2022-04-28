<template>
  <div class="pa-1">
    <v-row>
      <v-col
        v-for="(option, n) in options"
        :key="n"
        class="d-flex child-flex"
        cols="6"
        md="4"
      >
        <v-card height="200" width="200">
          <v-imager tag="div" width="100%" height="100%" v-bind="option" lazy>
            <template #default="{ loading }">
              <v-overlay absolute :value="loading">
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </v-overlay>
            </template>
          </v-imager>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    options: [
      {
        src: "https://cloudimage.public.airstore.io/demo/alain.jpg",
        greyMd: true,
        contrastMd: 10,
        contrastLg: 20,
      },
      {
        src: "https://cloudimage.public.airstore.io/demo/tim-patch.jpg",
        greyLg: true,
        // sharp: 10,
        // sharpMd: 0,
        pixelateMd: 10,
        pixelateXl: 20,
      },
      {
        src: "https://cloudimage.public.airstore.io/demo/ameen-fahmy.jpg",
        blurSm: 20,
        greyMd: true,
        pixelateMd: 10,
        // sharpMd: 10,
        // sharpLg: 20,
      },
      {
        src: "https://cloudimage.public.airstore.io/demo/inma-lesielle.jpg",
        pixelateMd: 20,
        blurMd: 20,
        contrastMd: 10,
        // sharpMd: 20,
      },
    ],
  }),
});
</script>
