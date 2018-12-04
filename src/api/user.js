import request from '../utils/request'

// 登录
function login(params) {
  let url = 'auth/login'
  return request.post(url, params)
}

// 获取验证码
function getCaptcha(params) {
  let url ='auth/captcha/' + params
  return request.get(url, { responseType: 'blob' })
}

export { login, getCaptcha }