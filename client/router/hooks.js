
/*
 * 针对某一个组件或者路由的钩子，
 * 可以参见：http://router.vuejs.org/zh-cn/advanced/navigation-guards.html
 */
let hooks = (router) =>{

  let checkUserLoggedIn = () => {
    return false;
  }

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.role)) {
      if (!checkUserLoggedIn()) {
        alert('please login first')
        next({
          path: '/index',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  })

  // router.afterEach

}

export default hooks
