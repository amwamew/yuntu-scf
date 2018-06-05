<template>
  <div class="charts" ref="eachrt"></div>
</template>

<script>
import echarts from 'echarts'
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
          trigger: 'axis'
        },
        grid: {
          left: '4%',
          right: '4%',
          // bottom: '0',
          containLabel: true
        },
        color: ['#A5D865', '#F9C334', '#FF715C'],
        legend: {
          data: [
            { name: '授信金额', icon: 'rect' },
            { name: '贷款余额', icon: 'rect' },
            { name: '预警金额', icon: 'rect' }
          ],
          y: 'bottom',
          orient: 'horizontal', //水平排列
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 16
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [
              '2017-01',
              '2017-02',
              '2017-03',
              '2017-04',
              '2017-05',
              '2017-06',
              '2017-07',
              '2017-08',
              '2017-09',
              '2017-10',
              '2017-11',
              '2017-12'
            ],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#A0A0A0'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#e0e0e0'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
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
            name: '授信金额',
            type: 'line',
            data: [5, 10, 35, 50, 72, 102, 120, 105, 98, 76, 42, 34, 66]
          },
          {
            name: '贷款余额',
            type: 'line',
            data: [5, 15, 24, 35, 38, 22, 100, 102, 120, 150, 140]
          },
          {
            name: '预警金额',
            type: 'line',
            data: [3, 17, 23, 38, 35, 26, 110, 130, 170, 104, 98]
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
  height: 300px
</style>
