import { createApp } from 'vue'
// router
import router from './router/index'
// store
import store from './store/index'
// i18n
import i18n from './locales'
// element-plus icon svg
import { Search, CircleClose, CirclePlus, Plus, Delete, Edit, ArrowDown } from '@element-plus/icons-vue'
const iconComponents = [Search, CircleClose, CirclePlus, Plus, Delete, Edit, ArrowDown]
// svg
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'
// loading
import { setupGlobDirectives } from './directive/main'
// directives
import directives from './directive/index'
// styles
import 'element-plus/theme-chalk/el-message.css'
import './styles/index.scss'
// permisson
import './permission'
// +++END+++
import App from './App.vue'
const app = createApp(App)
app.component('SvgIcon', SvgIcon)
iconComponents.forEach(component => {
  app.component(component.name, component)
})
  ; (() => {
    setupGlobDirectives(app)
  })()
app.use(router).use(store).use(i18n).use(directives).mount('#app')

