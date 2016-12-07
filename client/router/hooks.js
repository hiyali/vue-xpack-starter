let hooks = (router) =>{

  let checkUserLoggedIn = () => {
    return false;
  }

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
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

}

export default hooks
