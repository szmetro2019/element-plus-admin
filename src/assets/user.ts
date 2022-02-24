export let userRouter = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: { title: 'workbench', icon: 'workbench', noCache: true },
    component: 'layout/Layout',
    name: 'Workbench',
    children: [
      {
        path: 'dashboard',
        name: 'WorkbenchDashboard',
        meta: { title: 'dashboard', icon: 'dashboard' },
        component: 'views/workbench/dashboard/index'
      },
      {
        path: 'center',
        name: 'WorkbenchCenter',
        meta: { title: 'center', icon: 'center' },
        component: 'views/workbench/center/index'
      }
    ]
  },
  // {
  //   path: '/chart',
  //   redirect: '/chart/line',
  //   meta: { title: 'chart', icon: 'chart' },
  //   component: 'layout/Layout',
  //   name: 'Chart',
  //   children: [
  //     {
  //       path: 'line',
  //       name: 'LneChart',
  //       meta: { title: 'lineChart', icon: 'lineChart' },
  //       component: 'views/echarts/LineChart/index'
  //     },
  //     {
  //       path: 'bar',
  //       name: 'BarChart',
  //       meta: { title: 'barChart', icon: 'barChart' },
  //       component: 'views/echarts/BarChart/index'
  //     },
  //     {
  //       path: 'pie',
  //       name: 'PieChart',
  //       meta: { title: 'pieChart', icon: 'pieChart' },
  //       component: 'views/echarts/PieChart/index'
  //     }
  //   ]
  // },
  // {
  //   path: '/table',
  //   redirect: '/table/basic',
  //   meta: { title: 'table', icon: 'table' },
  //   component: 'layout/Layout',
  //   name: 'Table',
  //   children: [
  //     {
  //       path: 'basic',
  //       name: 'TableBasic',
  //       meta: { title: 'tableBasic', icon: 'table' },
  //       component: 'views/table/basic/index'
  //     }
  //   ]
  // },
  // {
  //   path: '/consumption',
  //   redirect: '/consumption/index',
  //   meta: { title: 'consumption', icon: 'consumption' },
  //   component: 'layout/Layout',
  //   name: 'ConsumptionWrap',
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ConsumptionTable',
  //       meta: { title: 'consumptionOfRecords', icon: 'consumption' },
  //       component: 'views/consumption/index'
  //     },
  //     {
  //       path: 'form',
  //       hidden: true,
  //       name: 'ConsumptionForm',
  //       meta: { title: 'consumptionStatus', icon: 'consumption' },
  //       component: 'views/consumption/form'
  //     },
  //     {
  //       path: 'status',
  //       name: 'ConsumptionStatus',
  //       meta: { title: 'consumptionStatus', icon: 'consumption' },
  //       component: 'views/consumption/status'
  //     }
  //   ]
  // },
  // {
  //   path: '/period',
  //   redirect: '/period/index',
  //   meta: { title: 'period', icon: 'period' },
  //   component: 'layout/Layout',
  //   name: 'PeriodWrap',
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'PeriodIndex',
  //       meta: { title: 'periodIndex', icon: 'period' },
  //       component: 'views/period/index'
  //     },
  //     {
  //       path: 'form',
  //       hidden: true,
  //       name: 'PeriodForm',
  //       meta: { title: 'periodForm', icon: 'period' },
  //       component: 'views/period/form'
  //     }
  //   ]
  // },
  // {
  //   path: '/setting',
  //   redirect: '/setting/password',
  //   meta: { title: 'setting', icon: 'setting' },
  //   component: 'layout/Layout',
  //   name: 'Setting',
  //   children: [
  //     {
  //       path: 'password',
  //       name: 'Password',
  //       meta: { title: 'password', icon: 'password' },
  //       component: 'views/setting/password/index'
  //     }
  //   ]
  // },
  // {
  //   path: '/cattle',
  //   redirect: '/cattle/index',
  //   meta: {
  //     title: '抢购',
  //     icon: 'dashboard'
  //   },
  //   component: 'layout/Layout',
  //   name: 'Cattle',
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'CattleTable',
  //       meta: {
  //         title: '抢购'
  //       },
  //       component: 'views/cattle/table'
  //     },
  //     {
  //       path: 'form',
  //       hidden: true,
  //       name: 'CattleForm',
  //       meta: {
  //         title: '抢购填写'
  //       },
  //       component: 'views/cattle/form'
  //     }
  //   ]
  // },
  // {
  //   path: '/api',
  //   redirect: '/api/index',
  //   meta: {
  //     title: 'api'
  //   },
  //   component: 'layout/Layout',
  //   name: 'Api',
  //   alwaysShow: true,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ApiIndex',
  //       meta: {
  //         title: 'Api'
  //       },
  //       component: 'views/api/index'
  //     }
  //   ]
  // },

  // {
  //   path: '/setting',
  //   redirect: '/setting/center',
  //   meta: {
  //     title: '设置',
  //     icon: 'setting'
  //   },
  //   component: 'layout/Layout',
  //   name: 'Setting',
  //   children: [{
  //       path: 'center',
  //       name: 'SettingCenter',
  //       meta: {
  //         title: '个人中心'
  //       },
  //       component: 'views/setting/center'

  //     },
  //     {
  //       path: 'password',
  //       name: 'SettingPassword',
  //       meta: {
  //         title: '重置密码'
  //       },
  //       component: 'views/setting/password'

  //     }
  //   ]
  // },
  {
    path: '/:pathMatch(.*)*',
    component: 'views/404/404',
    name: 'NoPath',
    hidden: true
  }
]
