import Vue from 'vue'
import Router from 'vue-router'

import { Home, User } from '../pages'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', redirect: 'index' },
    { path: '/index', component: Home },
    { path: '/user', component: User },
  ]
})
