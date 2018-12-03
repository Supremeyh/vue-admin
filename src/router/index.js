import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('../views/login/login.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'loginRedirect', component: login, hidden: true },
    { path: '/login', name: 'login', component: login, hidden: true },
  ]
})

