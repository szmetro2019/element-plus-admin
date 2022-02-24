<template>
  <div class="flex flex-row-reverse items-center page-header">
    <el-space>
      <Language />
      <Logout />
    </el-space>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Language from '~/components/Language/index.vue'
import Logout from '~/components/Logout/index.vue'
export default defineComponent({
  components: {
    Language,
    Logout
  },
  setup() {
    return { }
  }
})
</script>
<style scoped lang="scss">
.page-header{
  padding: 0 20px;
}
</style>
