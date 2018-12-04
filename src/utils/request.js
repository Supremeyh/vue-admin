// axios encapsulation
import axios from 'axios'
import store from '../store/index'
import router from '../router/index'

import baseUrl from './handleUrl'

import { Message } from 'element-ui'

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=utf-8'
}

// request interceptors
axios.interceptors.request.use(config => {
  // 每个请求都带上token
  if(store.state.user.token) {
    config.headers['Authorization'] = store.state.user.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response interceptors
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
    case 400:
      error.message = '错误请求'
      break
    case 401:
      error.message = '未授权，请重新登录'
      store.commit('SET_TOKEN', '')
      router.replace({ path: '/login' })
      break
    case 403:
      error.message = '拒绝访问'
      break
    default:
      error.message = `连接错误${error.response.status}`
    }
    Message.error({ message: error.message, duration: 1200, center: true, showClose: true })
  }
  return Promise.reject(error)
})


export default axios