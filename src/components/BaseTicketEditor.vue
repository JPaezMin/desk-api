<template>
  <div>
    <BaseAgentActionBar />
    <form @submit.prevent="" class="relative mt-4">
      <textarea
        class="block w-full p-4 resize-none bg-gray-100 focus:outline-0 h-[246px] placeholder-gray-600"
        placeholder="Add your ticket comments here..."
        type="text"
      />
      <div
        class="chat-input-buttons flex justify-end absolute bottom-0 right-4 pb-4 space-x-2"
      >
        <button
          class="flex flex-col justify-center focus:outline-none focus:ring"
        >
          <i class="chat-input-button fa-paperclip fas text-blue-500"></i>
        </button>
        <button
          class="flex flex-col justify-center focus:outline-none focus:ring"
        >
          <i class="chat-input-button fa-paper-plane fas text-blue-500"></i>
        </button>
      </div>
    </form>
    <BasePythiaBar class="mt-4" />
    <BaseChatEditorButtonRow class="mt-4" />
  </div>
</template>

<script>
import BaseAgentActionBar from "./BaseAgentActionBar.vue";
import BaseChatEditorButtonRow from "./BaseChatEditorButtonRow.vue";
import BasePythiaBar from "./BasePythiaBar.vue";
export default {
  components: { BaseAgentActionBar, BaseChatEditorButtonRow, BasePythiaBar },
};
</script>

<style lang="scss" scoped></style>
