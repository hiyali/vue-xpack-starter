
import { Home, User } from '../pages'

let routes = [
  { path: '/index', component: Home },
  { path: '/user', component: User, meta: { role: true} },
  { path: '*', redirect: 'index' },
]

export default routes
