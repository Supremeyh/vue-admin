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
  }
}


export default user