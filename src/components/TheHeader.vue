<template>
  <header class="flex items-center justify-between bg-gray-50 p-4">
    <TheLogo />
    <TheNavBar />
    <div class="flex items-center justify-between">
      <TheAgentMenu class="mr-10" />
      <TheAgentChat />
      <n-switch v-model:value="isDark" size="medium" class="ml-4">
        <template #checked-icon>
          <i class="fas fa-moon checkedIcon"></i>
        </template>
        <template #unchecked-icon>
          <i class="fas fa-sun uncheckedIcon"></i>
        </template>
      </n-switch>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import TheLogo from "@/components/TheLogo.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import TheAgentMenu from "@/components/TheAgentMenu.vue";
import TheAgentChat from "@/components/TheAgentChat.vue";
import { inject } from "vue";
export default {
  components: {
    TheLogo,
    TheNavBar,
    TheAgentMenu,
    TheAgentChat,
  },
  setup() {
    const appVersion = import.meta.env.RUBIKO_APP_VERSION;
    const isDark = inject("isDark");
    return {
      active: ref(false),
      isDark,
      appVersion,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  box-shadow: 0 2px 7px rgba(34, 43, 52, 0.1), 0 1px 0 rgba(227, 230, 233, 0.5);
}
.dark header {
  background-color: rgb(24, 24, 28);
}
</style>
