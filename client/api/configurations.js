import Vue from 'vue'

Vue.http.options.root = '/api'
Vue.http.options.timeout = 10 * 1000 // ten seconds
Vue.http.headers.common['version'] = 'v1'

Vue.http.interceptors.push((request, next) => {
  // Indicator.open()
  next((response) => {
    console.log(`request done, ${response.status}`)
    // Indicator.close()

    if(response.ok){
      console.log(`success handler`)
    }else{
      console.warn(`error handler`)
    }

    return response // to success callback or error callback
  });
});

