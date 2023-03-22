<template>
  <li
    :class="{
      chatCreated: chatMessage.type === 'ChatCreated',
      chatAssigned: chatMessage.type === 'ChatAgentAssigned',
      agentChat: chatMessage.type === 'ChatAgentMessageAdded',
      playerChat: chatMessage.type === 'ChatEndUserMessageAdded',
    }"
  >
    <div class="messsage__content">
      <div
        class="flex justify-between"
        v-if="
          chatMessage.type === 'ChatEndUserMessageAdded' ||
          chatMessage.type === 'ChatCreated' ||
          chatMessage.type === 'ChatAgentMessageAdded'
        "
      >
        <span
          v-if="
            chatMessage.type === 'ChatEndUserMessageAdded' ||
            chatMessage.type === 'ChatCreated'
          "
          class="block mb-1 text-sm text-white"
          >{{ chatSession.endUser.name }}</span
        >
        <span v-else class="block mb-1 text-sm text-white">{{
          chatSession.participants[0].displayName
        }}</span>
        <span class="block text-sm text-white">{{ getChatCreationDate }}</span>
      </div>
      <p class="py-2 text-sm text-white">
        {{ chatMessage.message }}
      </p>
    </div>
  </li>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    chatMessage: {
      type: Object,
      default: () => {},
    },
    chatSession: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const getChatCreationDate = computed(() => {
      const dateCreated = props.chatMessage.createdOn;
      let date = new Date(dateCreated)
        .toISOString()
        .slice(0, 16)
        .replace("T", " ");
      return date;
    });
    return {
      getChatCreationDate,
    };
  },
};
</script>
<style scoped>
.agentChat,
.chatCreated,
.playerChat {
  @apply p-2 rounded-md space-y-6;
}
.agentChat {
  @apply bg-gray-300;
}
.agentChat span,
.agentChat p {
  @apply text-gray-700;
}
.playerChat,
.chatCreated {
  @apply bg-blue-500;
}
.chatAssigned {
  @apply text-gray-700 block font-semibold text-center;
}
.chatAssigned p {
  @apply text-gray-700;
}
.dark li.chatAssigned p {
  color: rgba(255, 255, 255, 0.82);
}
</style>
