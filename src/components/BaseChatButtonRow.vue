<template>
  <div class="flex justify-end space-x-2">
    <n-button type="tertiary"> Invite Agent </n-button>
    <n-button type="tertiary"> Transfer To Agent </n-button>
    <n-button type="primary" @click="endChat()">End Chat</n-button>
  </div>
</template>

<script>
import ChatService from "@/services/ChatService.js";
import { useActions } from "vuex-composition-helpers";
export default {
  props: {
    chatId: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { removeChatSession, removeUpdatedChatSession } = useActions({
      removeChatSession: "chatSession/removeChatSession",
      removeUpdatedChatSession: "chatSession/removeUpdatedChatSession",
    });
    function endChat() {
      removeChatSession(props.chatId);
      removeUpdatedChatSession(props.chatId);
      ChatService.endChat(props.chatId);
    }
    return {
      endChat,
    };
  },
};
</script>

<style lang="scss" scoped></style>
