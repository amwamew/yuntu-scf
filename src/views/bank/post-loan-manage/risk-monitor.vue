/*
 * FileName: 贷后管理-风险监测
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="risk-monitor">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷后管理</el-breadcrumb-item>
        <el-breadcrumb-item>风险监测</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <risk-monitor></risk-monitor>
  </div>
</template>

<script>
import RiskMonitor from '@/components/business/post-loan-manage/risk-monitor'
export default {
  components: {
    RiskMonitor
  }
}
</script>

<style lang="stylus" scoped>
</style>
