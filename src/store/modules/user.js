import { login, getCaptcha, logout } from '../../api/user'

const user = {
  namespaced: false,
  state: {
    id: '',
    name: '',
    token: ''
  },
  getters: {
    id: state => state.id,
    name: state => state.name,
    token: state => state.token
  },
  mutations: {
    SET_ID(state, id) {
      state.id = id
    },
    SET_NAME(state, name) {
      state.name = name
    },
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    // 登录
    Login({commit}, params) {
      return new Promise((resolve, reject) => {
        login(params)
          .then(response => {
            commit('SET_NAME', params.email)
            commit('SET_TOKEN', response.data.token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 获取验证码
    GetCaptcha({commit}, email) {
      return new Promise((resolve, reject) => {
        getCaptcha(email)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 退出登录
    Logout({commit}) {
      return new Promise((resolve, reject) => {
        logout()
          .then(response => {
            localStorage.removeItem('vuex')
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}


export default user