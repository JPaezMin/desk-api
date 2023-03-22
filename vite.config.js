import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginHtmlEnv from "vite-plugin-html-env";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginHtmlEnv(),
    VitePluginHtmlEnv({
      compiler: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // map '@' to './src'
    },
  },
  server: {
    fs: {
      strict: false,
    },
    watch: {
      usePolling: true,
    },
  },
  envPrefix: "RUBIKO_",
});
