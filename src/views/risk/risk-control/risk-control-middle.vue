/*
 * FileName: 贷中风控
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:17:47 pm
 * Author: LiuBing
 */

<template>
  <div class="risk-control">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷中风控</el-breadcrumb-item>
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
          prop: 'submitDt',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'view',
          label: '贷中审查'
        },
        {
          prop: 'creditAmt',
          label: '授信额度(元)'
        },
        {
          prop: 'status',
          label: '不良信息扫描'
        },
        {
          prop: 'business',
          label: '经营评价'
        },
        {
          prop: 'financial',
          label: '财务分析'
        },
        {
          prop: 'lending',
          label: '放款条件'
        },
        {
          prop: 'checkDate',
          label: '审查日期'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>