<template>
  <div :id="chartid" :style="{'height':height}" class="echarts-box" />
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, reactive, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
// ————————————————————S——————————————————
// import * as echarts from 'echarts/core'
// import { GridComponent, GridComponentOption, TooltipComponent } from 'echarts/components'
// import { LineChart, LineSeriesOption } from 'echarts/charts'
// import { UniversalTransition } from 'echarts/features'
// import { CanvasRenderer } from 'echarts/renderers'
// echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition, TooltipComponent])
// type EChartsOption = echarts.ComposeOption<
//   GridComponentOption | LineSeriesOption
// >;
// ——————————————End
export default defineComponent({
  name: 'WorkbenchDashboard',
  props: {
    chartid: {
      type: String,
      default: 'myId'
    },
    chartData: {
      type: Object,
      default: function() {
        return {}
      }
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  setup(props) {
    const { chartid, chartData, height } = toRefs(props)
    const myChart = reactive({ chart: null})
    let option: EChartsOption = reactive({})
    onMounted(async() => {
      myChart.chart = echarts.init(document.getElementById(chartid.value as HTMLElement))
      option = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          show: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line'
          }
        ]
      }
      option && myChart.chart.setOption(option)
      // 绘制图表
      myChart.chart.setOption({
        series: [
          {
            data: chartData.value
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart.chart.resize()
      })
    })
    onUnmounted(() => {
      myChart.chart.dispose()
    })
    return {
      myChart,
      chartid,
      chartData,
      height
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
