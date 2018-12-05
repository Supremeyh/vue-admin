import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('../views/login/login.vue')
const layout = () => import('../views/layout/layout.vue')
const dashboard = () => import('../views/dashboard/dashboard.vue')
const tableone = () => import('../views/table/tableone.vue')
const tabletwo = () => import('../views/table/tabletwo.vue')
const usercenter = () => import('../views/system/usercenter.vue')
const setting = () => import('../views/system/setting.vue')

const constantRouterMap = [
  { path: '/', name: 'loginRedirect', component: login, hidden: true },
  { path: '/login', name: 'login', component: login, hidden: true },
  { path: '/dashboard', name: 'dashboard', redirect: '/dashboard/index', component: layout, meta: { title: '首页', icon: 'el-icon-menu'}, hidden: false, children: 
    [
      { path: 'index', name: 'dashboardIndex', component: dashboard, meta: { title: 'dashboard', icon: 'el-icon-menu'}, hidden: false }
    ] 
  },
  { path: '/table', name: 'table', component: layout, meta: { title: '图表', icon: 'el-icon-document'}, hidden: false, children: 
    [
      { path: 'tableone', name: 'tableone', component: tableone, meta: { title: '图表一', icon: 'el-icon-document'}, hidden: false },
      { path: 'tabletwo', name: 'tabletwo', component: tabletwo, meta: { title: '图表二', icon: 'el-icon-document'}, hidden: false }
    ] 
  },
  { path: '/system', name: 'system', component: layout, meta: { title: '系统设置', icon: 'el-icon-setting'}, hidden: false, children: 
    [
      { path: 'usercenter', name: 'usercenter', component: usercenter, meta: { title: '配置中心', icon: 'el-icon-setting'}, hidden: false },
      { path: 'setting', name: 'setting', component: setting, meta: { title: '设置中心', icon: 'el-icon-setting'}, hidden: false }
    ] 
  }
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