window.API_URL = 'http://admin.vue-demo.ansible'
window.ASSETS_URL = 'http://assets.vue-demo.ansible'
window.LOGIN_URL = window.API_URL + 'sessions/create'
window.SIGNUP_URL = window.API_URL + 'users/'

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueJwtAuth from 'vue-jwt-auth'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

export var router = new VueRouter({
  saveScrollPosition: true,
  transitionOnLoad: true,
  linkActiveClass: 'is-active',
  history: true
})

import NProgress from 'nprogress'

Vue.use(VueJwtAuth,
  {
    loginUrl: window.API_URL + '/sessions/create',
    fetchUrl: window.API_URL + '/api/me',
    tokenUrl: window.API_URL + '/sessions/refresh-token',
    tokenName: 'jwt-auth-token',
    tokenTimeoutOffset: 5 * 1000  // 5 minutes
  },
  router)

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)
  next((response) => {
    NProgress.done()
    return response
  })
})

router.beforeEach(({ next }) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.map({
  '/login': {
    auth: false,
    component: function (resolve) {
      require(['./components/Login.vue'], resolve)
    }
  },
  '/thisdoesntwork': {
    auth: false,
    component: function (resolve) {
      require(['./components/Help.vue'], resolve)
    }
  },
  '/thisworks': {
    auth: false,
    component: require('./components/Help2.vue')
  },
  '/dashboard': {
    name: 'Dashboard',
    auth: true,
    component: require('./components/Dashboard.vue')
  }
})

router.start(App, 'app')

