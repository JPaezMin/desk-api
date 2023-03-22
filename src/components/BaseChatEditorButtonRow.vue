<template>
  <div class="flex justify-end space-x-2">
    <n-button type="primary">Scalate Ticket</n-button>
    <n-button type="primary">Merge into another ticket</n-button>
    <n-select
      v-model:value="valueCategories"
      :options="categories"
      placeholder="Select Category"
      class="flex-grow-0 basis-52 shrink-0"
    />
    <n-select
      v-model:value="valueTypes"
      :options="submitTypes"
      placeholder="Select Submit Type"
      class="flex-grow-0 basis-52 shrink-0"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const valueCategories = ref(null);
    const valueTypes = ref(null);
    const submitTypes = ref([
      {
        label: "Category 1",
        value: "Category 1",
      },
      {
        label: "Category 2",
        value: "Category 2",
      },
      {
        label: "Category 3",
        value: "Category 3",
      },
      {
        label: "Category 4",
        value: "Category 4",
      },
    ]);
    const categories = ref([
      {
        label: "Submit As New",
        value: "Submit As New",
      },
      {
        label: "Submit As Open",
        value: "Submit As Open",
      },
      {
        label: "Submit As Pending",
        value: "Submit As Pending",
      },
      {
        label: "Submit As On Hold",
        value: "Submit As On Hold",
      },
      {
        label: "Submit As Solved",
        value: "Submit As Solved",
      },
    ]);
    return {
      categories,
      submitTypes,
      valueCategories,
      valueTypes,
    };
  },
};
</script>

<style lang="scss" scoped></style>
