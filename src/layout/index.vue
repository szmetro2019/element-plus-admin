<template>
  <div class="page-layout">
    <div class="page-sider">
      <siderbar />
    </div>
    <div class="page-body">
      <header class="page-header">
        <page-header />
      </header>
      <section class="page-section">
        <el-scrollbar id="pageWrapScroll" always class="page-scrollbar">
          <router-view v-slot="{ Component }">
            <!-- <transition name="el-zoom-in-top"> -->
            <keep-alive :include="cachedViews">
              <component :is="Component" :key="key" />
            </keep-alive>
            <!-- </transition> -->
          </router-view>
        </el-scrollbar>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue'
import Siderbar from './sider/Siderbar.vue'
import PageHeader from './header.vue'
import { useMainStore } from '~/store/index'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    Siderbar,
    PageHeader
  },
  setup() {
    const useMain = useMainStore()
    let cachedViews = reactive([])
    const route = useRoute()
    const key = ref('')
    const addTags = () => {
      const { name } = route
      if (name) {
        useMain.addCachedView(route)
      }
      return false
    }
    watch(() => route.path, (newPath, oldPath) => {
      key.value = newPath
      addTags()
      cachedViews = useMain.cachedViews
    }, { immediate: true })
    return {
      cachedViews,
      key,
      addTags
    }
  }
})
</script>
<style lang="scss" scoped>
  @import '../styles/var.scss';

  .page-header {
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .page-section {
    height: calc(100vh - 50px);

    ::v-deep(.page-scrollbar) {
      @extend .basic-page-scrollbar
    }
  }
</style>
