<template>
  <v-app>
    <page v-bind="$props">
      <template #top>
        <slot name="top" />
      </template>
    </page>
  </v-app>
</template>

<script>
import Page from "@parent-theme/components/Page.vue";

export default {
  components: { Page },
  props: ["sidebarItems"],
};
</script>

<style lang="scss">
.theme-default-content:not(.custom) {
  max-width: 1000px !important;
}
</style>
