import request from '../utils/request'

// 登录
function login(params) {
  let url = 'auth/login'
  return request.post(url, params)
}

// 获取验证码
function getCaptcha(email) {
  let url ='auth/captcha/' + email
  return request.get(url, { responseType: 'blob' })
}

// 退出登录
function logout() {
  let url = 'auth/logout'
  return request.post(url)
}


export { login, getCaptcha, logout }