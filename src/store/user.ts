import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/ACCESS_ENUM";

export default {
  namespaced: true,
  state: () => ({
    namespaced: true,
    loginUser: {
      userName: "未登录",
      userRole: ACCESS_ENUM.NOT_LOGIN,
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      //改为从远程获取
      commit("updateUser", { userName: "雍亲王" });
    },
  },
  mutations: {
    increment(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
