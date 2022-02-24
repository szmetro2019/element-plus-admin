export const Line1Data = {
  grid: {
    left: 0,
    top: 50,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap:false,
    nameLocation: 'middle',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ddd',
        width: 1,
        type: 'solid'
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#333',
        width: 2,
        type: 'solid'
      }
    },
    axisLabel: {
      show: true,
      color: '#ddd',
      fontSize: 14
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#ddd',
        width: 1,
        type: 'solid'
      }
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#333',
        width: 2,
        type: 'solid'
      }
    },
    axisLabel: {
      show: true,
      color: '#ddd',
      fontSize: 14
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {}
    }
  },
  tooltip: {
    show: true,
  },
  title: {
    show: true,
    text: 'Line'
  },
  series: [{
    smooth: true,
    type: 'line'
  }]




}