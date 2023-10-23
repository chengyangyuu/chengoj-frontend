import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NoAuthView from "../views/NoAuthView.vue";
import AboutView from "../views/AboutView.vue";
import ACCESS_ENUM from "@/access/ACCESS_ENUM";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "无权限 ",
    component: NoAuthView,
  },
  {
    path: "/hide",
    name: "隐藏界面",
    component: HomeView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/about",
    name: "管理员可见",
    component: AboutView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
];
