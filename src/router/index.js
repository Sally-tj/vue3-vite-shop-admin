import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/pages/index.vue";
import About from "@/pages/about.vue";
import NotFound from "@/pages/404.vue";
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  //hash路由
  history: createWebHashHistory(),
  routes,
});
export default router;
