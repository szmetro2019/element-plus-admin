import router from './router'
import { getToken } from '~/utils/auth'
const whiteList = ['/login', '/auth-redirect']
import { useMainStore } from './store'
router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const userStore = useMainStore()
      // 获取动态权限菜单
      const hasRoles = userStore.routes && userStore.routes.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const accessedRoutes = await userStore.addRouter()
          if (to.matched.length === 0) {
            accessedRoutes.forEach((element: any) => {
              router.addRoute(element)
            })
          }
          next({
            ...to,
            replace: true
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  // NProgress.done()
})
