import ACCESS_ENUM from "@/access/ACCESS_ENUM";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @param return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前用户的权限  在判断需要什么权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  //允许未登录就可以访问的话就放行
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //允许登录才可以访问的界面  检测未登录 false
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUser.userRole === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //允许管理员才可以访问的界面  检测不是管理员 false
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUser.userRole !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
