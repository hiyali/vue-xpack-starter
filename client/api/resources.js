/*
 * 更多内容请参见：https://github.com/pagekit/vue-resource
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const resources = {
  indexPage: Vue.resource('someitem{/id}'),
}

export default resources
