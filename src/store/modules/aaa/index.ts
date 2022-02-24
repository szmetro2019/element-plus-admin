import {defineStore} from 'pinia'
import Cookies from 'js-cookie'
import {userRouter} from '~/assets/user.js'
import {dynamicRouter} from '~/router/index'
import {setToken,removeToken} from '~/utils/auth.ts'
// 递归路由,获取完整的路由对象
export function generateAsyncRouter(routerMap, serverRouterMap) {
  serverRouterMap.forEach(function (item) {
    item.component = routerMap[item.component]
    if (item.children && item.children.length > 0) {
      generateAsyncRouter(routerMap, item.children)
    }
  })
  return serverRouterMap
}
const useMainStore = defineStore('aaa', {
  state: () => {
    return {
      // 登录
      login: '',
      // 登出
      logout: '',
      // 侧边栏控制
      sideCollapse: false,
      // 页面级别loading控制
      loading: false,
      // 左侧菜单栏动态控制
      routes: [],
      locales: Cookies.get('locales') || 'zhCn',
      cachedViews: []
    }
  },
  actions: {
    setLogin(login: any) {
      return new Promise((resolve, reject) => {
        if (login) {
          setToken(login)
          this.login = login
          resolve(login)
        } else {
          reject('error')
        }
      })
    },
    setLogout(logout: any) {
      removeToken()
      this.logout = logout
      setTimeout(() => {
        location.reload();
      }, 50);
    },
    setLocales(locale: any) {
      this.locales = locale
      Cookies.set('locales', locale)
    },
    setSideCollapse(status: any) {
      this.sideCollapse = status
    },
    setLoading(status: any) {
      this.loading = status
    },
    addRouter(status: any) {
      return new Promise(resolve => {
        setTimeout(() => {
          const accessedRoutes = generateAsyncRouter(dynamicRouter, userRouter)
          this.routes = accessedRoutes
          resolve(accessedRoutes)
        }, 50)
      })
    },
    addCachedView(views: any) {
      if (this.cachedViews.includes(views.name)) {
        return false
      }
      if (!views.meta.noCache) {
        this.cachedViews.push(views.name)
      }
    },
  },

})

export default useMainStore;