<template>
  <div
    class="w-full px-4 py-2 text-base flex justify-between"
    :class="notificationTypeClass"
  >
    <p class="focus:outline-none text-sm leading-none text-red-700">
      {{ notification.message }}
    </p>
    <button @click="this.remove(this.notification)">
      <i
        class="fas fa-times block ml-2 cursor-pointer text-sm text-red-700"
      ></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 50000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  methods: mapActions("notification", ["remove"]),
};
</script>

<style lang="postcss" scoped>
.-text-error {
  @apply bg-red-100;
}
</style>
