<template>
  <div class="flex justify-between items-center">
    <div class="inline-flex items-center flex-grow-0 basis-3/4 shrink-0">
      <span class="block mr-4">Detected Language</span>
      <n-select
        v-model:value="value"
        :options="languages"
        class="flex-grow-0 basis-52 shrink-0"
      />
    </div>
    <n-checkbox v-model:checked="checkBoxvalue"> Translate </n-checkbox>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const translationOn = ref(false);
    const value = ref(null);
    const checkBoxvalue = ref(null);
    const languages = ref([
      {
        label: "English",
        value: "Language01",
        disabled: true,
      },
      {
        label: "Portuguesse",
        value: "Language02",
      },
      {
        label: "Finish",
        value: "Language03",
      },
      {
        label: "German",
        value: "Language04",
        disabled: true,
      },
    ]);
    return {
      translationOn,
      languages,
      value,
      checkBoxvalue,
    };
  },
};
</script>

<style lang="scss" scoped></style>
