<template>
  <div>
    <div class="container p-6 mx-auto">
      <header class="header">
        <div class="header__wrapper wrapper">
          <TheLogo />
          <h1>CRM Component Patterns</h1>
        </div>
      </header>
      <main class="mt-24">
        <section id="Header">
          <h2>The Header</h2>
          <TheHeader class="mt-6" />
        </section>
        <!-- <section id="Login" class="mt-6">
          <h2>The Login</h2>
          <TheLogin class="mt-6" />
        </section> -->
        <section id="MainNavigation" class="mt-6">
          <h2>The Navigation Bar</h2>
          <TheNavBar class="mt-6" />
        </section>
        <!-- <section id="ChatQueue" class="mt-6">
          <h2>The Chat Queue</h2>
          <div class="flex space-x-2">
            <TheChatQueue v-if="dataReady" :dataReady="dataReady" />
          </div>
        </section> -->
        <section id="Buttons" class="mt-6">
          <h2>Base Buttons</h2>
          <div class="flex space-x-2 mt-6">
            <BaseButton buttonType="btnPrimary">Primary Button</BaseButton>
            <BaseButton buttonType="btnSecondary">Secondary Button</BaseButton>
          </div>
        </section>
        <section id="SearchBar" class="mt-6">
          <h2>Base Search Bar</h2>
          <BaseSearchBar class="mt-6" />
        </section>
        <section id="TranslationBar" class="mt-6">
          <h2>Base Translation Bar</h2>
          <BaseTranslationBar class="max-w-screen-lg mt-6" />
        </section>
        <section id="AgentActionBar" class="mt-6">
          <h2>Base Agent Action Bar</h2>
          <BaseAgentActionBar class="max-w-screen-lg mt-6" />
        </section>
        <section id="PythiaBar" class="mt-6">
          <h2>Base Pythia Bar</h2>
          <BasePythiaBar class="max-w-screen-lg mt-6" />
        </section>
        <section id="Grid" class="mt-6">
          <h2>Base Grid</h2>
          <BaseGrid class="mt-6" />
        </section>
        <!-- <section id="ChatWidget" class="mt-6 w-2/5">
          <h2>Base Chat Widget</h2>
          <BaseChatWidget class="mt-6" />
        </section> -->
        <section id="Tag" class="mt-6">
          <h2>Base Tags</h2>
          <div class="flex space-x-2 mt-6">
            <BaseTag tagType="tagVip">VIP</BaseTag>
            <BaseTag tagType="tagAlert">ACCOUNT CLOSURE</BaseTag>
            <BaseTag tagType="tagRegular">GERMAN</BaseTag>
          </div>
        </section>
        <section id="Ticket ID" class="mt-6">
          <h2>Base Ticket ID Tag</h2>
          <BaseTickedID class="mt-6">#2030838</BaseTickedID>
        </section>
        <section id="Scalation ID" class="mt-6">
          <h2>Base Scalation ID Tag</h2>
          <BaseScalationdID class="mt-6">PAY-8474</BaseScalationdID>
        </section>
        <section id="ClientHeader" class="mt-6">
          <h2>Base Client Header</h2>
          <!-- <BaseClientHeader class="mt-6 w-[1480px]"></BaseClientHeader> -->
        </section>
        <section id="PythiaPills" class="mt-6">
          <h2>Base Pythia Carousel</h2>
          <BasePythiaCarousel class="mt-6" />
        </section>
        <section id="Form" class="mt-6">
          <h2>Base Form</h2>
          <BaseForm class="mt-6" />
        </section>
      </main>
      <BaseBackToTop />
    </div>
  </div>
</template>

<script>
// import settings from "@/services/SettingsService";
import BaseBackToTop from "@/components/BaseBackToTop.vue";
import BaseButton from "@/components/BaseButton.vue";
import BasePythiaCarousel from "@/components/BasePythiaCarousel.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseGrid from "@/components/BaseGrid.vue";
import BaseScalationdID from "@/components/BaseScalationID.vue";
import BaseSearchBar from "@/components/BaseSearchBar.vue";
// import BaseTabsWrapper from "@/components/BaseTabsWrapper.vue";
// import BaseTab from "@/components/BaseTab.vue";
import BaseTag from "@/components/BaseTag.vue";
import BaseTickedID from "@/components/BaseTicketID.vue";
import BaseAgentActionBar from "@/components/BaseAgentActionBar.vue";
// import BaseClientHeader from "@/components/BaseClientHeader.vue";
// import TheChatQueue from "@/components/TheChatQueue.vue";
// import BaseChatWidget from "@/components/BaseChatWidget.vue";
import TheHeader from "@/components/TheHeader.vue";
// import TheLogin from "@/components/TheLogin.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import BasePythiaBar from "@/components/BasePythiaBar.vue";
import BaseTranslationBar from "@/components/BaseTranslationBar.vue";
import TheLogo from "../components/TheLogo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseBackToTop,
    BaseButton,
    BasePythiaCarousel,
    BaseForm,
    BaseGrid,
    BaseScalationdID,
    BaseSearchBar,
    // BaseTabsWrapper,
    // BaseTab,
    BaseTag,
    BaseTickedID,
    BaseAgentActionBar,
    // BaseClientHeader,
    // TheChatQueue,
    // BaseChatWidget,
    TheHeader,
    // TheLogin,
    TheNavBar,
    BasePythiaBar,
    BaseTranslationBar,
    TheLogo,
  },
  data() {
    return {
      dataReady: false,
      chatSessionId: "",
      historic: [
        {
          id: 1,
          first_name: "Clare",
          last_name: "Bowden",
          email: "cbowden0@webmd.com",
          phone: "547-358-4045",
          notes:
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          time: "12/28/2021",
        },
        {
          id: 2,
          first_name: "Mari",
          last_name: "Petigrew",
          email: "mpetigrew1@webs.com",
          phone: "876-699-9816",
          notes:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          time: "12/22/2021",
        },
        {
          id: 3,
          first_name: "Isabelita",
          last_name: "Huntingdon",
          email: "ihuntingdon2@nymag.com",
          phone: "385-870-9355",
          notes:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          time: "4/4/2021",
        },
        {
          id: 4,
          first_name: "Iain",
          last_name: "Feehery",
          email: "ifeehery3@yelp.com",
          phone: "691-360-3430",
          notes:
            "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          time: "9/10/2021",
        },
        {
          id: 5,
          first_name: "Roosevelt",
          last_name: "Milham",
          email: "rmilham4@woothemes.com",
          phone: "716-257-4071",
          notes:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          time: "6/20/2021",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      incomingChatSessions: "chatSession/getIncomingChatSessions",
    }),
  },
  methods: {
    ...mapActions({
      callWebsocket: "websocket/processWebsocket",
    }),
    sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #f7f7f8;
  box-shadow: 0 2px 7px rgb(34 43 52 / 10%), 0 1px 0 rgb(227 230 233 / 50%);
  height: 70px;
  left: 0;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  &__wrapper {
    align-items: center;
    background: #f7f7f8;
    display: flex;
    height: 70px;
    justify-content: space-between;
    z-index: 999;
    padding: 0 2rem;
  }
}
</style>
