// axios encapsulation
import axios from 'axios'
import store from '../store/index'

axios.defaults.baseURL = ''
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=utf-8'
}

// request interceptors
axios.interceptors.request.use(config => {
  // 每个请求都带上token
  if(store.state.login.token) {
    config.headers['Authorization'] = store.state.login.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response interceptors
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})


export default axios