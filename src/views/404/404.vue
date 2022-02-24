<template>
  <div class="result-wrap">
    <el-scrollbar always class="result-wrap-scrollbar">
      <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
          <a-button type="primary">Back Home</a-button>
        </template>
      </a-result>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '404',
  setup() {
    const router = useRouter()
    const toHome = () => {
      router.push({
        name: 'WorkbenchDashboard'
      })
    }
    return {
      toHome
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
