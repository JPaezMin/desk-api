<template>
  <span :class="['badge', badgeType]"><slot></slot></span>
</template>

<script>
export default {
  props: {
    badgeType: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped></style>
