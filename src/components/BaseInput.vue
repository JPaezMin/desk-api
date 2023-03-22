<template>
  <label v-if="label" :for="uuid" class="block mt-2">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
    :class="
      error
        ? 'border-red-500 focus:border-red-500 focus:placeholder-red-500 hover:border-red-500 bg-red-100 placeholder-red-700 text-red-700'
        : 'border-gray-300 focus:border-blue-700 focus:placeholder-blue-700 hover:border-gray-500 placeholder-gray-900 text-gray-700'
    "
  />
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
    aria-live="assertive"
    class="mt-2 text-red"
  >
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from "@/features/UniqueID";
import SetupFormComponent from "@/features/SetupFormComponent";
import BaseErrorMessage from "@/components/BaseErrorMessage.vue";
export default {
  components: {
    BaseErrorMessage,
  },
  props: {
    error: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();
    return {
      updateValue,
      uuid,
    };
  },
};
</script>
<style lang="postcss" scoped>
input {
  @apply appearance-none
    block
    w-full
    border 
    rounded
    mt-1
    py-2
    px-4
    leading-tight
    focus:outline-none;
}
.text-red {
  @apply text-red-500;
}
</style>
