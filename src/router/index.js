import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('../views/login/login.vue')
const dashboard = () => import('../views/dashboard/dashboard.vue')

const constantRouterMap = [
  { path: '/', name: 'loginRedirect', component: login, hidden: true },
  { path: '/login', name: 'login', component: login, hidden: true },
  { path: '/dashboard', name: 'dashboard', component: dashboard, meta: { title: 'dashboard', icon: 'el-icon-home'}, hidden: false },
]

// 不重定向白名单
const whiteList = ['/login', '/register']

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    if (to.matched.some(record => record.meta.requireAuth) && (store.state.user.token !== 'true')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
})


export default router