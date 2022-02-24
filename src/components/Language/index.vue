<template>
  <div class="language-box">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <div class="flex flex-row items-center">
          <SvgIcon name="locale" />
          <div>{{ localeVal }}</div>
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zhCn">简体中文</el-dropdown-item>
          <el-dropdown-item command="en">美国英语</el-dropdown-item>
          <el-dropdown-item command="ru">俄语</el-dropdown-item>
          <el-dropdown-item command="zhTw">繁体中文</el-dropdown-item>
          <el-dropdown-item command="ja">日语</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useMainStore } from '~/store'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    const localObj = reactive({
      zhCn: '简体中文',
      en: '美国英语',
      ru: '俄语',
      zhTw: '繁体中文',
      ja: '日语'
    })
    const useMain = useMainStore()
    const localeVal = ref('简体中文')
    localeVal.value = localObj[useMain.locales]
    const { locale } = useI18n()
    const handleCommand = (command) => {
      useMain.setLocales(command)
      locale.value = command // 要切换的语言
      localeVal.value = localObj[command]
    }
    return {
      localObj,
      localeVal,
      handleCommand
    }
  }
})
</script>
<style scoped lang="scss">
.language-box{
  width:80px;
  font-size: 14px;
  color: #333;
}
</style>
