import { login } from '../../api/user'

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