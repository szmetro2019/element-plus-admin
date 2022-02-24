<template>
  <div v-if="!routerItem.hidden" class="page-cc-li">
    <template
      v-if="hasOneShowingChild(routerItem.children,routerItem) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!routerItem.alwaysShow"
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <div class="page-icon-box">
            <svg-icon
              v-if="routerItem.meta && routerItem.meta.icon"
              class="page-side-icon"
              :name="onlyOneChild.meta.icon||(routerItem.meta&&routerItem.meta.icon)"
            />
            <span>{{ generateTitle(onlyOneChild.meta.title) }}</span>
          </div>
        </el-menu-item>
      </app-link>
    </template>
    <el-sub-menu v-else :index="resolvePath(routerItem.path)" popper-append-to-body>
      <template #title>
        <div class="page-icon-box">
          <svg-icon v-if="routerItem.meta" class="page-side-icon" :name="routerItem.meta.icon" />
          <span>{{ generateTitle(routerItem.meta.title) }}</span>
        </div>
      </template>
      <siderbar-item
        v-for="child in routerItem.children"
        :key="child.path"
        :routedata="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { isExternal } from '~/utils/validate.ts'
import { useI18n } from 'vue-i18n'
import AppLink from './Link.vue'
export default defineComponent({
  components: {
    AppLink
  },
  props: {
    routedata: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    // 获取传过来的参数
    const routerItem = reactive(props.routedata)
    const router = useRouter()
    const toJunp = (val: string) => {
      router.push({
        name: val
      })
    }
    // 11111111
    const onlyOneChild = ref(null)
    const hasOneShowingChild = (children = [], parent:any) => {
      const showingChildren = children.filter((item: any) => {
        if (item.hidden) {
          return false
        } else {
          // 临时设置（如果只有一个显示子级，将使用）
          onlyOneChild.value = item
          return true
        }
      })
      // 当只有一个子路由器时，默认显示子路由器
      if (showingChildren.length === 1) {
        return true
      }
      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        onlyOneChild.value = {
          ...parent,
          path: '',
          noShowingChildren: true
        }
        return true
      }
      return false
    }
    // 22222222
    const {
      basePath
    } = reactive(props)
    const resolvePath = (routePath: any) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(basePath)) {
        return basePath
      }
      if (basePath === '/') {
        const basic = basePath.replace('/', '') + '/' + routePath.replace('/', '')
        if (basic.substring(basic.length - 1) === '/') {
          return basic
          // .substring(0, basic.length - 1)
        } else {
          return basic
        }
      } else {
        const basic = '/' + basePath.replace('/', '') + '/' + routePath.replace('/', '')
        if (basic.substring(basic.length - 1) === '/') {
          return basic.substring(0, basic.length - 1)
        } else {
          return basic
        }
      }
    }
    const {
      t
    } = useI18n()
    const generateTitle = (title: any) => {
      return t('route.' + title)
    }
    return {
      routerItem,
      toJunp,
      hasOneShowingChild,
      onlyOneChild,
      resolvePath,
      generateTitle
    }
  }

})
</script>

<style lang="scss" scoped>

</style>
