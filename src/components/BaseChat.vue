<template>
  <li class="max-w-md p-3 bg-gray-100 border border-gray-500 cursor-pointer">
    <div class="flex items-start">
      <img class="casino-logo" :src="getCasinoLogoPath" alt="Casino Logo" />
      <div class="ml-2">
        <div class="flex items-center">
          <span class="ml-1 font-bold text-gray-700"
            >{{ secondsToHours }} in queue</span
          >
        </div>
        <span class="mt-2 text-gray-700">{{ chat.name }}</span>
      </div>
    </div>
    <div class="flex items-start mt-2 space-x-1">
      <BaseTag tagType="tagVip" v-if="chat.isVip === true">VIP</BaseTag>
      <BaseTag
        tagType="tagAlert"
        v-if="chat.isResponsibleGaming === true"
        class=""
        >Account Closure</BaseTag
      >
      <BaseTag tagType="tagRegular">{{ getLanguage }}</BaseTag>
    </div>
    <div class="mt-2">
      <p class="truncate">{{ chat.subject }}</p>
    </div>
  </li>
</template>

<script>
import BaseTag from "@/components/BaseTag.vue";
import { useGetters } from "vuex-composition-helpers";
import { ref, computed, watch } from "vue";
export default {
  props: ["chat"],
  components: {
    BaseTag,
  },
  setup(props) {
    let date = new Date(props.chat.createdOn);
    const secondsCount = ref(date.getSeconds());
    const secondsToHours = computed(() => {
      let hrs = ~~(secondsCount.value / 3600);
      let mins = ~~((secondsCount.value % 3600) / 60);
      let secs = ~~secondsCount.value % 60;
      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
      if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    });
    const { languages } = useGetters({
      languages: "languages/getLanguages",
    });
    const findLanguage = computed(() =>
      languages.value.find(
        (language) => language.code === props.chat.languageCode
      )
    );
    const getLanguage = computed(() => {
      return findLanguage.value.name;
    });
    const getCasinoLogoPath = computed(() => {
      if (props.chat.brandName !== "") {
        return new URL(
          `../assets/images/casinos/${props.chat.brandName.toLowerCase()}.png`,
          import.meta.url
        ).href;
      } else {
        return null;
      }
    });
    watch(
      secondsCount,
      (currentValue) => {
        if (currentValue > 0) {
          setTimeout(() => {
            secondsCount.value++;
          }, 1000);
        }
      },
      {
        immediate: true,
      }
    );
    return {
      secondsCount,
      secondsToHours,
      getCasinoLogoPath,
      getLanguage,
      findLanguage,
      languages,
    };
  },
};
</script>
<style lang="scss" scoped>
.dark li {
  background-color: rgb(24, 24, 28);
}
.dark li a,
.dark li span {
  color: rgba(255, 255, 255, 0.82);
}
</style>
