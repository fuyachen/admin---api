/**
 * 通用结构
 */

const log4js = require("./log4")

// 状态码
const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, //参数错误
  USER_ACCOUNT_ERROR: 20001, //账号或密码错误
  USER_LOGIN_ERROR: 30001, //用户未登录
  BUSSINESS_ERROR: 40001, //业务请求失败
  AUTH_ERROR: 50001, //认证失败或token过期
}

module.exports = {
  // 状态码
  CODE,
  /**分页功能
   * @param {number} pageNum
   * @param {number} pageSize
   * */
  pager({ pageNum = 1, pageSize = 10 }) {
    const skipIndex = (pageNum - 1) * pageSize
    return {
      page: { pageNum, pageSize },
      skipIndex,
    }
  },
  // 输出成功信息
  success(data = "", msg = "", code = CODE.SUCCESS) {
    log4js.info(data)
    return { code, data, msg }
  },
  // 输出错误信息
  fail(msg = "", code = CODE.BUSSINESS_ERROR, data = "") {
    log4js.error(msg)
    return { code, msg, data }
  },
}
