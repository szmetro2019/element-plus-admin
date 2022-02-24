import { createPinia } from 'pinia';
const pinia = createPinia();
import { createI18n } from 'vue-i18n'
import { useMainStore } from '~/store'
import zhCnLocale from './zhCn'
import enLocale from './en'
import jaLocale from './ja'
import ruLocale from './ru'
import zhTwLocale from './zhTw'
const messages = {
  zhCn: {
    ...zhCnLocale
  },
  en: {
    ...enLocale
  },
  ja: {
    ...jaLocale
  },
  ru: {
    ...ruLocale
  },
  zhTw: {
    ...zhTwLocale
  }
}
const userStore1 = useMainStore(pinia);
const localeStore = userStore1.locales
const i18n = createI18n({
  locale:localeStore,
  fallbackLocale: 'en',
  messages
})

export default i18n