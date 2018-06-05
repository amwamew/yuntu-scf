/*
 * FileName: 核心企业监测
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:21:36 pm
 * Author: LiuBing
 */

<template>
  <div class="enterprise-monitoring">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>核心企业监测</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <enterprise-monitoring :col="col"></enterprise-monitoring>
  </div>
</template>

<script>
import EnterpriseMonitoring from '@/components/risk/enterprise-monitoring/enterprise-monitoring'
export default {
  components: {
    EnterpriseMonitoring
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
          label: '核心客户名称'
        },
        {
          prop: 'status',
          label: '不良信息扫描'
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