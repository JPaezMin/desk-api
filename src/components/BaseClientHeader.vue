<template>
  <div class="gamer-header flex justify-between items-center p-3 bg-gray-100">
    <div class="flex items-start">
      <img
        class="casino-logo mt-1"
        :src="getCasinoLogoPath"
        alt="Casino Logo"
      />
      <div class="ml-2">
        <div class="flex">
          <span class="text-2xl font-bold text-gray-700"
            >{{ chatSession.endUser["name"] }} |
            {{ chatSession.endUser["email"] }}</span
          >
        </div>
        <span>{{ chatSession.subject }}</span>
      </div>
    </div>
    <div class="flex space-x-2">
      <BaseTag tagType="tagVip" v-if="chatSession.endUser['isVip']"
        >VIP</BaseTag
      >
      <BaseTag
        tagType="tagAlert"
        v-if="chatSession.isResponsibleGaming === true"
        >Account Closure</BaseTag
      >
      <BaseTag tagType="tagRegular">{{ getLanguage }}</BaseTag>
    </div>
    <div class="flex space-x-2 items-center">
      <n-button type="primary">#2030838</n-button>
      <n-button type="tertiary">PAY-8474</n-button>
      <button class="focus:outline-none focus:ring">
        <i class="fas fa-map-pin text-2xl text-blue-700 cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script>
import { useGetters } from "vuex-composition-helpers";
import { computed } from "vue";
import BaseTag from "@/components/BaseTag.vue";
import BaseTicketID from "@/components/BaseTicketID.vue";
import BaseScalationID from "@/components/BaseScalationID.vue";
export default {
  props: {
    chatSession: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  components: {
    BaseTag,
    BaseTicketID,
    BaseScalationID,
  },
  setup(props) {
    const { languages } = useGetters({
      languages: "languages/getLanguages",
    });
    const findLanguage = computed(() =>
      languages.value.find(
        (language) => language.code === props.chatSession.languageCode
      )
    );
    const getLanguage = computed(() => {
      return findLanguage.value.name;
    });
    const getCasinoLogoPath = computed(() => {
      if (props.chatSession.brandName !== "") {
        return new URL(
          `../assets/images/casinos/${props.chatSession.brandName.toLowerCase()}.png`,
          import.meta.url
        ).href;
      } else {
        return null;
      }
    });
    return {
      getCasinoLogoPath,
      getLanguage,
      findLanguage,
      languages,
    };
  },
};
</script>

<style lang="scss" scoped>
.dark .gamer-header {
  border: 1px solid rgba(255, 255, 255, 0.09);
  background-color: rgb(24, 24, 28);
  color: rgba(255, 255, 255, 0.82);
}
.dark .gamer-header span {
  color: rgba(255, 255, 255, 0.82);
}
</style>
