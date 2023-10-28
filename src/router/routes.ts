import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/ExampleView.vue";
import NoAuthView from "../views/NoAuthView.vue";
import AboutView from "../views/AboutView.vue";
import UserLayout from "../layouts/UserLayout.vue";
import UserLoginView from "../views/user/UserLoginView.vue";
import UserRegisterView from "../views/user/UserRegisterView.vue";
import AddQuestionView from "../views/question/AddQuestionView.vue";
import ManageQuestionView from "../views/question/ManageQuestionView.vue";
import ACCESS_ENUM from "@/access/ACCESS_ENUM";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
    // meta: {
    //   access: ACCESS_ENUM.ADMIN,
    // },
  },
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
