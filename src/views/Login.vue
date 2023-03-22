<template>
  <div class="flex h-screen bg-gray-50">
    <div class="m-auto">
      <TheLogin />
    </div>
  </div>
</template>

<script>
import TheLogin from "@/components/TheLogin.vue";
export default {
  components: {
    TheLogin,
  },
};
</script>
<style lang="scss" scoped></style>
