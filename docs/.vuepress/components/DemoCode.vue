<template>
  <div class="demo-code">
    <v-tabs v-model="model" right>
      <v-tab>Demo</v-tab>
      <v-tab>Source</v-tab>
    </v-tabs>
    <div class="demo-code-content">
      <v-tabs-items v-model="model">
        <v-tab-item>
          <component :is="name" />
        </v-tab-item>
        <v-tab-item>
          <slot></slot>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
  },
  data: () => ({
    model: 0,
  }),
};
</script>

<style scoped>
.demo-code {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.demo-code-content {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
