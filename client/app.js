import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import { Root } from './pages'
import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Root
})

export {app, router, store}
