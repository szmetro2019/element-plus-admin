<template>
  <div class="side-scrollbar-wrap">
    <el-scrollbar always class="side-scrollbar-box">
      <el-menu
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :default-active="selectedKeys"
        class="page-side-wrap"
      >
        <side-item v-for="(item,index) in routes" :key="index" :routedata="item" :base-path="item.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '~/store/index'
import SideItem from './SiderbarItem.vue'
import { aside } from '~/styles/var.module.ts'
export default defineComponent({
  components: { SideItem },
  setup() {
    // 全局变量
    const backgroundColor = ref(aside.backgroundColor)
    const textColor = ref(aside.textColor)
    const activeTextColor = ref(aside.activeTextColor)
    const store = useMainStore()
    const route = useRoute()
    const selectedKeys = computed(() => {
      return route.path
    })
    const routes = store.routes
    return {
      backgroundColor,
      textColor,
      activeTextColor,
      routes,
      selectedKeys
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
