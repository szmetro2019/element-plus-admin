<template>
  <el-config-provider
    :locale="localeVal"
    :message="configMessage"
  >
    <router-view />
  </el-config-provider>
</template>
<script>
import { defineComponent, watch, ref, reactive } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useMainStore } from '~/store/index'
import zhCn from 'element-plus/lib/locale/lang/zh-cn' // 简体中文
import en from 'element-plus/lib/locale/lang/en' // 美国英语
import ru from 'element-plus/lib/locale/lang/ru' // 俄语
import zhTw from 'element-plus/lib/locale/lang/zh-tw' // 繁体中文
import ja from 'element-plus/lib/locale/lang/ja' // 日语
export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    const locales = reactive({
      zhCn: { ...zhCn },
      en: { ...en },
      ru: { ...ru },
      zhTw: { ...zhTw },
      ja: { ...ja }
    })
    const localeVal = ref()
    const store = useMainStore()
    localeVal.value = locales[store.locales]
    watch(() => store.locales, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        localeVal.value = locales[newVal]
      }
    })
    const configMessage = reactive({
      max: 1
    })
    return {
      locales,
      localeVal,
      configMessage
    }
  }
})
</script>
<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
