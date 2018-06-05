/*
 * FileName: 贷后风控
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:18:00 pm
 * Author: LiuBing
 */

<template>
  <div class="risk-control">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷后风控</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <risk-control :col="col"></risk-control>
  </div>
</template>

<script>
import RiskControl from '@/components/risk/risk-control/risk-control'
export default {
  components: {
    RiskControl
  },
  data() {
    return {
      col: [
        {
          prop: 'conf',
          label: '监测状态'
        },
        {
          prop: 'submitDt',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'report', //随便用了个名字
          label: '经营监测'
        },
        {
          prop: 'warn',
          label: '预警级别'
        },
        {
          prop: 'endDate',
          label: '监测结束时间'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>