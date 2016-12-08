import Vue from 'vue'
import { Indicator } from 'mint-ui'

Vue.http.options.root = '/api'
Vue.http.options.timeout = 10 * 1000 // ten seconds
Vue.http.headers.common['version'] = 'v1'

Vue.http.interceptors.push((request, next) => {
  Indicator.open()
  next((response) => {
    console.log(`request done, ${response.status}`)
    setTimeout(()=>{
      Indicator.close()
    }, 1000)

    if(response.ok){
      console.log(`success handler`)
    }else{
      console.warn(`error handler`)
    }

    return response // to success callback or error callback
  });
});

