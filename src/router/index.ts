import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{
  path: '/login',
  component: () => import('~/views/login/index.vue'),
  name: 'Login',
  hidden: true,
  meta: {
    title: '登录页'
  }
}]
export const dynamicRouter = {
  'layout/Layout': () => import('~/layout/index.vue'),

  'views/workbench/dashboard/index': () => import('~/views/workbench/dashboard/index.vue'),
  'views/workbench/center/index': () => import('~/views/workbench/center/index.vue'),

  // 'views/echarts/LineChart/index': () => import('~/views/echarts/LineChart/index.vue'),
  // 'views/echarts/BarChart/index': () => import('~/views/echarts/BarChart/index.vue'),
  // 'views/echarts/PieChart/index': () => import('~/views/echarts/PieChart/index.vue'),
  // 'views/table/basic/index': () => import('~/views/table/basic/index.vue'),
  // 'views/consumption/index': () => import('~/views/consumption/index.vue'),
  // 'views/consumption/form': () => import('~/views/consumption/form.vue'),
  // 'views/consumption/status': () => import('~/views/consumption/status.vue'),
  // 'views/period/index': () => import('~/views/period/index.vue'),
  // 'views/period/form': () => import('~/views/period/form.vue'),
  // 'views/setting/password/index': () => import('~/views/setting/password/index.vue'),
  'views/404/404': () => import('~/views/404/404.vue')
}

export const routesData = routes
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router