<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
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
        name: 'PageHome'
      })
    }
    return {
      toHome
    }
  }
})
</script>
<style lang="scss" scoped>
    .cc-none {
        height: 100vh;
        overflow: hidden;
        font-size: 180px;
        color: #00BCD4;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .none-btn {
            margin-top: 20px;
        }
    }
</style>
