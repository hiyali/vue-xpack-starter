import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  // getters, // 可以用getters来取state的稍加处理的结果
  // modules, // 可以用modules来分割state,以免在全局状态中出现混淆
})

export default store
