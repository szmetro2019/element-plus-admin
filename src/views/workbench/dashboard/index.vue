<template>
  <div class="p-4">
    <el-row :gutter="12">
      <el-col :xs="8" :sm="6" :md="12" :lg="12" :xl="1">
        <el-card class="chart-card-bt" shadow="always">
          <LineChart key="LineChartData1" chartid="LineChartData1" :chart-data="LineChartData" />
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="12" :lg="12" :xl="1">
        <el-card class="chart-card-bt" shadow="always">
          WorkbenchDashboard
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="12" :lg="12" :xl="1">
        <el-card class="chart-card-bt" shadow="always">
          WorkbenchDashboard
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="12" :lg="12" :xl="1">
        <el-card class="chart-card-bt" shadow="always">
          WorkbenchDashboard
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="12" :lg="12" :xl="1">
        <el-card class="chart-card-bt" shadow="always">
          WorkbenchDashboard
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="6" :md="12" :lg="12" :xl="1">
        <el-card class="chart-card-bt" shadow="always">
          WorkbenchDashboard
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue'
import LineChart from './components/LineChart.vue'
export default defineComponent({
  name: 'WorkbenchDashboard',
  components: { LineChart },
  setup() {
    onMounted(() => {

    })
    onUnmounted(() => {

    })
    const LineChartData = reactive([150, 230, 224, 218, 135, 147, 260])
    return {
      LineChartData
    }
  }
})
</script>

<style lang="scss" scoped>
.chart-card-bt{
  margin-bottom: 12px;
}
</style>
