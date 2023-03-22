import { createApp } from "vue";
import naive from "naive-ui";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@/assets/styles/index.scss";

import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(naive).use(router).use(store);
app.mount("#app");
