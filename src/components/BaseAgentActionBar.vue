<template>
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex items-center basis-1/4">
      <n-button type="tertiary">Public Reply</n-button>
      <n-button type="primary" class="ml-2">Add Internal Note</n-button>
    </div>
    <div class="flex items-center basis-[415px] justify-between">
      <div class="inline-flex items-center">
        <span class="block mr-4">Assignee</span>
        <n-select
          v-model:value="value"
          :options="agents"
          placeholder="Select An Agent"
          class="flex-grow-0 basis-52 shrink-0"
        />
      </div>
      <n-button type="primary">Take Ticket</n-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(null);
    const agents = ref([
      {
        label: "Jonah Ellinger",
        value: "Jonah Ellinger",
      },
      {
        label: "Harpo Lilja",
        value: "Harpo Lilja",
      },
      {
        label: "Paulina Coronado",
        value: "Paulina Coronado",
      },
      {
        label: "Maria Macher",
        value: "Maria Macher",
      },
    ]);
    return {
      agents,
      value,
    };
  },
};
</script>

<style lang="scss" scoped></style>
