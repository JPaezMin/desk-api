<template>
  <button :class="['btn', buttonType]"><slot></slot></button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply py-1 px-2 shadow-none transition ease-in-out duration-300 leading-snug whitespace-nowrap text-base focus:outline-none focus:ring;
}
.btnDisabled {
  @apply border-2 border-solid cursor-not-allowed border-blue-300 bg-blue-300 text-white focus:outline-none focus:ring-0;
}
.btnPrimary {
  @apply border-2 border-solid border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800;
}
.btnSecondary {
  @apply bg-white border-2 border-solid border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white;
}
.btnText {
  @apply px-0 font-medium text-blue-700 hover:text-blue-900;
}
.btnFilter {
  @apply p-2 cursor-pointer active:bg-blue-700 focus:text-white focus:bg-blue-700 focus:outline-none focus:ring;
}
</style>
