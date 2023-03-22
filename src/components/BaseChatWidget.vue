<template>
  <div class="flex-col flex-nowrap">
    <BaseTranslationBar />
    <div id="chat-body" ref="chatBody" class="overflow-y-auto p-2 mt-4">
      <ul id="chatBox">
        <BaseChatMessage
          v-for="(chatMessage, index) in chatSession.events"
          :chatMessage="chatMessage"
          :key="index"
          :chatSession="chatSession"
          :class="{ 'mt-0': index === 0, 'mt-4': index > 0 }"
        />
      </ul>
    </div>
    <form @submit.prevent="sendMessage" class="chat-form relative mt-6">
      <textarea
        class="chat-textarea h-[160px] py-4 resize-none"
        placeholder="Add your message here..."
        type="text"
        v-model="message"
        @keydown.enter.prevent="detectEnter"
      />
      <div
        class="chat-input-buttons flex justify-end absolute bottom-0 right-0 pb-4"
      >
        <button
          class="flex flex-col justify-center focus:outline-none focus:ring"
        >
          <i class="chat-input-button fa-paperclip fas text-blue-500"></i>
        </button>
        <button
          type="submit"
          value="Send"
          class="flex flex-col justify-center focus:outline-none focus:ring"
        >
          <i class="chat-input-button fa-paper-plane fas text-blue-500"></i>
        </button>
      </div>
    </form>
    <BasePythiaBar class="mt-4" />
    <BaseChatButtonRow :chatId="chatSession.id" class="mt-4" />
  </div>
</template>

<script>
import { inject, ref, onMounted, onUpdated, computed, watch } from "vue";
import { useActions } from "vuex-composition-helpers";
import ChatService from "@/services/ChatService.js";
import BaseChatMessage from "@/components/BaseChatMessage.vue";
import BaseTranslationBar from "@/components/BaseTranslationBar.vue";
import BasePythiaBar from "@/components/BasePythiaBar.vue";
import BaseChatButtonRow from "@/components/BaseChatButtonRow.vue";
export default {
  emits: ["emittingChatSessionId"],
  components: {
    BaseChatMessage,
    BaseChatButtonRow,
    BasePythiaBar,
    BaseTranslationBar,
  },
  props: {
    chatSession: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const message = ref("");
    const chatBody = ref(null);
    const selectedTitle = inject("selectedTitle");
    onMounted(() => {
      scrollChatBodyToEnd();
    });
    onUpdated(() => {
      scrollChatBodyToEnd();
    });
    const chatSessionEventsLength = computed(
      () => props.chatSession.events.length
    );
    watch(chatSessionEventsLength, (currentValue, oldValue) => {
      if (currentValue > oldValue) {
        submitChatSessionId(props.chatSession.id);
      }
    });
    const { removeUpdatedChatSession } = useActions({
      removeUpdatedChatSession: "chatSession/removeUpdatedChatSession",
    });
    const scrollChatBodyToEnd = () => {
      if (chatBody.value) {
        chatBody.value.scrollTop = chatBody.value.scrollHeight;
      }
    };
    const submitChatSessionId = (chatSessionId) => {
      if (selectedTitle.value === props.chatSession.endUser.name) {
        removeUpdatedChatSession(chatSessionId);
        console.log(
          "%c You're in the selected tab hence I don't need to notify you when a new message arrived",
          "background: red; color: #fff"
        );
      } else {
        console.log("I'm notifying a new message in the not selected tab");
        emit("emittingChatSessionId", chatSessionId);
      }
    };
    const detectEnter = (e) => {
      let code = e.keyCode ? e.keyCode : e.which;
      if (code === 13) {
        sendMessage();
      }
    };
    const sendMessage = () => {
      const messageObject = {
        aggregateId: props.chatSession.id,
        message: message.value,
        agentId: props.chatSession.agentId,
        validationErrorsToSkip: ["UnsupportedLanguage"],
      };
      ChatService.sendChatMessage(messageObject);
      message.value = "";
    };
    return {
      chatSessionEventsLength,
      detectEnter,
      message,
      selectedTitle,
      sendMessage,
      chatBody,
      scrollChatBodyToEnd,
      submitChatSessionId,
    };
  },
};
</script>

<style lang="postcss" scoped>
#chat-body {
  background-size: 100%;
  height: 300px;
  scroll-behavior: smooth;
}
.chat-empty {
  height: 385px;
}
textarea {
  @apply block bg-clip-padding w-full px-4 py-4 resize-none bg-blue-50 border-0 focus:outline-0 placeholder-gray-600;
}
textarea:disabled,
textarea:disabled + .chat-input-buttons {
  @apply opacity-50;
}
.chat-input-buttons {
  right: 15px;
  width: 100px;
}
.chat-input-button {
  height: 18px;
  margin-left: 2px;
  margin-right: 2px;
  width: 1.25rem;
}
</style>
