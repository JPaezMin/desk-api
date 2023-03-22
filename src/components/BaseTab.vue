<template>
  <div v-show="title === selectedTitle" class="mt-4">
    <slot />
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "Tab Title",
    },
  },
  setup() {
    const selectedTitle = inject("selectedTitle");
    return {
      selectedTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
