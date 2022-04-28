<template>
  <demo-table>
    <div class="mt-10">
      <v-imager
        tag="v-card"
        :src="src"
        :base-url="baseUrl"
        v-bind="options"
        lazy-src="https://picsum.photos/id/11/10/6"
        @loadstart="loading = true"
        @load="loading = false"
        :width="width"
        :height="height"
        :contain="contain"
        lazy
      >
        <div>This is the element content</div>
      </v-imager>
    </div>
    <template #top>
      <v-progress-linear v-if="loading" height="2" indeterminate />
    </template>
    <template #heading>
      {{ url }}
    </template>
    <template #code>
      <slot></slot>
    </template>
    <template #options-top>
      <v-card-actions class="ma-0 pa-0">
        <span>Options</span>
        <v-spacer />
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn small icon v-bind="attrs" v-on="on">
              <v-icon>settings</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="py-2 pr-2">
              <h4>Settings</h4>
              <v-spacer />
              <v-btn @click="dialog = false" icon fab>
                <v-icon>close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider />
            <div class="pa-4">
              <v-text-field v-model="baseUrl" label="baseUrl" filled dense />
              <v-text-field v-model="src" label="src" filled dense />
            </div>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </template>
    <template #options>
      <v-card-actions>
        <div class="caption mr-2">width (element)</div>
        <v-slider v-model="width" min="50" max="400" hide-details thumb-label />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">height (element)</div>
        <v-slider
          v-model="height"
          min="50"
          max="400"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">width (image)</div>
        <v-slider
          v-model="options.w"
          min="50"
          max="400"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">height (image)</div>
        <v-slider
          v-model="options.h"
          min="50"
          max="400"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">pixelate</div>
        <v-slider
          v-model="options.pixelate"
          min="0"
          max="50"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">blur</div>
        <v-slider
          v-model="options.blur"
          min="0"
          max="50"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">sharpen</div>
        <v-slider
          v-model="options.sharp"
          min="0"
          max="50"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">contrast</div>
        <v-slider
          v-model="options.contrast"
          min="0"
          max="50"
          hide-details
          thumb-label
        />
      </v-card-actions>
      <v-card-actions>
        <div class="caption mr-2">flip</div>
        <v-select
          v-model="options.flip"
          :items="['v', 'h']"
          clear-icon="close"
          filled
          dense
          hide-details
          clearable
        />
      </v-card-actions>
      <v-card-actions class="py-0 mt-2">
        <div class="caption mr-2">greyscale</div>
        <v-switch class="my-0" v-model="options.grey" hide-details />
      </v-card-actions>
      <v-card-actions class="py-0 mt-2">
        <div class="caption mr-2">contain</div>
        <v-switch class="my-0" v-model="contain" hide-details />
      </v-card-actions>
      <v-card-actions class="py-0 mt-2">
        <div class="caption mr-2">cover</div>
        <v-switch class="my-0" v-model="cover" hide-details />
      </v-card-actions>
    </template>
  </demo-table>
</template>

<script lang="ts">
import Vue from "vue";
import { VImager, UrlImage } from "@moirei/vue-imager";
import DemoTable from "./DemoTable.vue";

export default Vue.extend({
  components: {
    DemoTable,
    VImager,
  },
  data: () => ({
    baseUrl: "https://demo.cloudimg.io/v7",
    src: "https://cloudimage.public.airstore.io/demo/tim-patch.jpg",
    url: null as UrlImage | null,
    width: 600,
    height: 400,
    options: {
      w: 100,
      h: 100,
      grey: false,
      blur: 0,
      pixelate: 0,
      contrast: 0,
      sharp: 0,
    },
    loading: true,
    dialog: false,
    contain: false,
    cover: false,
  }),
  mounted() {
    this.getUrl();
  },
  methods: {
    getUrl() {
      if (!this.src) return;
      const paths = this.src.split("/");
      this.url = new UrlImage("", this.options).append(paths.pop());
    },
  },
  watch: {
    options: {
      deep: true,
      handler: "getUrl",
    },
    baseUrl: "getUrl",
    src: "getUrl",
  },
});
</script>
