import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Root } from './pages'
import router from './router'
import store from './store'

Vue.use(MintUI)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...Root
})

export {app, router, store}
