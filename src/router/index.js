import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import DesignSystem from "../views/DesignSystem.vue";
import Support from "../views/Support.vue";
import NaiveUI from "../views/NaiveUI.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/design-system",
    name: "DesignSystem",
    component: DesignSystem,
  },
  {
    path: "/support",
    name: "support",
    component: Support,
    meta: { requiresAuth: true },
  },
  {
    path: "/naive-ui",
    name: "naive",
    component: NaiveUI,
    meta: { requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
