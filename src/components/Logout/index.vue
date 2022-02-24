<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-avatar :size="30" :src="circleUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '~/store'
export default defineComponent({
  name: 'Logout',
  setup() {
    const useMain = useMainStore()
    const handleCommand = (command:String) => {
      if (command === 'logout') {
        useMain.setLogout('logout')
      }
    }
    const circleUrl:String = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    return {
      handleCommand,
      circleUrl
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
