import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/ACCESS_ENUM";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  //先获取一个登录信息看一下
  console.log("登录用户信息", store.state.user.loginUser);
  let loginUser = store.state.user.loginUser;
  //如果之前没登陆过(role为空代表也是第一次登录) 自动登录
  if (!loginUser || !loginUser.userRole) {
    //await 同步 只有登录了才能执行后面的代码
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  //检测目标界面的允许状态 从路由里找
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //遇到 需要登录的界面
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //未登录就跳转到登录界面
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESS_ENUM.NOT_LOGIN
    ) {
      //这里要加一个当前要跳转界面的完整路由
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果已经登录 就检查权限 权限不足就跳转到无权限
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
