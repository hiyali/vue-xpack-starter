import Vue from 'vue'

import resources from './resources'

Vue.http.options.root = '/api';
Vue.http.headers.common['version'] = 'v1';

export default resources
