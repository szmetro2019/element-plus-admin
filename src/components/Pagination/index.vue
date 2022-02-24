<template>
  <div class="pagination-container">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      background
      small
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { defineComponent, toRefs, computed } from 'vue'
// import * as vue from 'vue'
export default defineComponent({
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 30
    },
    pageSizes: {
      type: Array,
      default() {
        return [30, 50, 100]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  setup(props, context) {
    const { page, limit, total, layout, pageSizes } = toRefs(props)
    // 计算
    const currentPage = computed({
      get() {
        return page.value
      },
      set(val) {
        context.emit('update:page', val)
      }
    })
    const pageSize = computed({
      get() {
        return limit.value
      },
      set(val) {
        context.emit('update:limit', val)
      }
    })
    // const el = vue.ref(null)
    // const container = vue.ref(null)
    const handleSizeChange = (val) => {
      // el.value = document.querySelector('.body-scrollbar .el-scrollbar__wrap')
      // container.value = el.value
      // container.value.scrollTop = 0
      context.emit('pagination', {
        page: currentPage.value,
        limit: val
      })
    }
    const handleCurrentChange = (val) => {
      // el.value = document.querySelector('.body-scrollbar .el-scrollbar__wrap')
      // container.value = el.value
      // container.value.scrollTop = 0
      context.emit('pagination', {
        page: val,
        limit: pageSize.value
      })
    }
    return {
      pageSizes,
      currentPage,
      pageSize,
      handleSizeChange,
      handleCurrentChange,
      total,
      layout
    }
  }
})
</script>

<style lang="scss" scoped>
  .pagination-container {
    display: flex;
    justify-content: center;
    background: #fff;
    padding-top: 1rem;

    .el-pagination {
      padding: 0;
    }
  }

  .pagination-container.hidden {
    display: none;
  }
</style>
