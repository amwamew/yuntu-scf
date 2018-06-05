<template>
  <div class="charts" ref="eachrt"></div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.eachrt)
      // 绘制图表
      this.myChart.setOption({
        tooltip: {
          show: true
        },
        grid: {
          left: '0',
          right: '0',
          bottom: '0',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category', //默认为类目
            data: ['授信金额', '贷款金额', '预警金额'],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#A0A0A0'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#A0A0A0'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value', //默认为值类型
            name: '单位：万元',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#A0A0A0'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#A0A0A0'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: 30,
            data: [20.8, 16, 100],
            itemStyle: {
              normal: {
                color: 'lightgrey'
              },
              emphasis: {
                color: '#42AEF3'
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.charts
  width: 100%
  height: 250px
</style>
