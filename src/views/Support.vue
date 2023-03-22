<template>
  <div class="max-h-[920px] min-w-[800px] w-full overflow-hidden">
    <TheHeader />
    <div class="h-full flex mt-6 w-full">
      <section id="Chat Queue" class="w-[344px] px-2 h-full shrink-0">
        <TheChatQueue v-if="dataReady" :dataReady="dataReady" />
        <div v-else class="min-w-[344px]">
          <p>Cargando Chats</p>
        </div>
      </section>
      <section
        id="content"
        class="mx-2 pr-2 flex-1"
        v-if="incomingChatSessions && incomingChatSessions.length"
      >
        <BaseTabsWrapper :updatedChatSessionsIds="this.updatedChatSessionIds">
          <BaseTab
            v-for="chatSession in incomingChatSessions"
            :key="chatSession.id"
            :title="chatSession.endUser.name"
          >
            <section class="header">
              <BaseClientHeader :chatSession="chatSession" />
            </section>
            <section class="content">
              <div class="flex mt-4">
                <section class="chat-area w-5/12 overflow-hidden">
                  <BaseChatWidget
                    :chatSession="chatSession"
                    class="mt-4"
                    @emittingChatSessionId="updatedChatSessionIdsArray"
                  />
                </section>
                <section class="ticket-area w-7/12 ml-6">
                  <BaseTabsWrapper>
                    <BaseTab
                      v-for="tabTitle in tabMenu"
                      :key="tabTitle"
                      :title="tabTitle"
                    >
                      <BaseTicketEditor />
                      <BaseTicketHistorical />
                    </BaseTab>
                  </BaseTabsWrapper>
                </section>
              </div>
            </section>
          </BaseTab>
        </BaseTabsWrapper>
      </section>
      <section
        v-else
        id="loading content"
        class="max-h-screen flex justify-center items-center w-full"
      >
        <p class="font-bold text-lg">Please take a chat</p>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseChatWidget from "@/components/BaseChatWidget.vue";
import BaseClientHeader from "../components/BaseClientHeader.vue";
import BaseTabsWrapper from "@/components/BaseTabsWrapper.vue";
import BaseTab from "@/components/BaseTab.vue";
import BaseTicketEditor from "@/components/BaseTicketEditor.vue";
import BaseTicketHistorical from "@/components/BaseTicketHistorical.vue";
import TheChatQueue from "@/components/TheChatQueue.vue";
import TheHeader from "@/components/TheHeader.vue";
// import TheChatArea from '@/components/TheChatArea.vue'
export default {
  props: ["label"],
  components: {
    BaseChatWidget,
    BaseClientHeader,
    BaseTabsWrapper,
    BaseTab,
    BaseTicketEditor,
    BaseTicketHistorical,
    // TheChatArea,
    TheChatQueue,
    TheHeader,
  },
  async mounted() {
    await this.callWebsocket();
    this.dataReady = true;
  },
  data() {
    return {
      dataReady: false,
      tabMenu: ["Chat Ticket", "History", "Documentation", "Bonuses"],
    };
  },
  computed: {
    ...mapGetters({
      incomingChatSessions: "chatSession/getIncomingChatSessions",
      updatedChatSessionIds: "chatSession/getUpdatedChatSessionIds",
    }),
  },
  methods: {
    ...mapActions({
      callWebsocket: "websocket/processWebsocket",
      addUpdatedChatSessionId: "chatSession/addUpdatedChatSession",
    }),
    updatedChatSessionIdsArray: function (chatSessionId) {
      console.log(`Updating chat class from Support.vue: ${chatSessionId}`);
      this.addUpdatedChatSessionId(chatSessionId);
    },
  },
};
</script>
