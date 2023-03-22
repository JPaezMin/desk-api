<template>
  <div class="h-full dark:bg-[#101014] min-h-screen">
    <n-config-provider
      :theme-overrides="DefaultThemeOverrides"
      :theme="isDark ? darkTheme : null"
    >
      <n-message-provider>
        <div>
          <router-view />
        </div>
      </n-message-provider>
      <n-global-style />
    </n-config-provider>
  </div>
</template>
<script>
import { useTheme } from "/useTheme";
import { darkTheme } from "naive-ui";
import { provide } from "vue";
import DefaultThemeOverrides from "/naive-ui.config.js";
export default {
  setup() {
    const { isDark, toggle, themeName } = useTheme();
    provide("isDark", isDark);
    return {
      DefaultThemeOverrides,
      darkTheme,
      isDark,
      toggle,
      themeName,
    };
  },
};
</script>
<style></style>
