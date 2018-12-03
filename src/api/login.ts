import request from '../utils/request'

// 登录
function login(params) {
  let url = 'auth/login'
  return request.post(url, params)
}



export default { login }