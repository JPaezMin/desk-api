<template>
  <div>
    <n-button
      type="primary"
      @click="assigningChatToAgent(firstChatInQueue.id)"
      class="w-full mb-4"
      v-if="incomingChats.length != 0"
      >Serve Request</n-button
    >
    <n-button :disabled="true" type="primary" class="w-full mb-4" v-else
      >Serve Request</n-button
    >
    <TransitionGroup
      name="list"
      tag="ul"
      class="max-h-[780px] pr-2 h-[760px] overflow-y-scroll"
      v-if="incomingChats && incomingChats.length"
    >
      <BaseChat
        v-for="(chat, index) in incomingChats"
        :key="index"
        :chat="chat"
        :class="{ 'mt-0': index === 0, 'mt-4': index > 0 }"
        @click="assigningChatToAgent(chat.id)"
      />
    </TransitionGroup>
    <TransitionGroup
      name="list"
      tag="ul"
      v-else
      class="max-h-[780px] pr-2 h-[760px] overflow-y-visible"
    >
      <BaseChatSkeleton
        v-for="(item, index) in dummyItems"
        :key="index"
        :item="item"
        :class="{ 'mt-0': index === 0, 'mt-4': index > 0 }"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import { useGetters, useActions } from "vuex-composition-helpers";
import { ref } from "vue";
import BaseChat from "@/components/BaseChat.vue";
import BaseChatSkeleton from "@/components/BaseChatSkeleton.vue";
import ChatService from "@/services/ChatService.js";
export default {
  components: {
    BaseChat,
    BaseChatSkeleton,
  },
  props: {
    dataReady: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { incomingChats, agentId, firstChatInQueue } = useGetters({
      firstChatInQueue: "websocket/getFirstChatInQueue",
      incomingChats: "websocket/getIncomingChats",
      agentId: "token/getAgentId",
    });
    const { addChatSession } = useActions({
      addChatSession: "chatSession/addChatSession",
    });
    const dummyItems = ref("[0,1,2,3,4,5,6,7,8,9,10]");
    function assigningChatToAgent(chatId) {
      const agentIdValue = JSON.parse(JSON.stringify(agentId.value));
      const assignChatObject = {
        aggregateId: chatId,
        agentId: agentIdValue.agentId,
      };
      ChatService.assignChatToAgent(assignChatObject);
    }
    return {
      incomingChats,
      agentId,
      dummyItems,
      addChatSession,
      assigningChatToAgent,
      firstChatInQueue,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
