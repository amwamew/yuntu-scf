/*
 * FileName: 贷后管理-预警认定
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="warning-cognizance">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷后管理</el-breadcrumb-item>
        <el-breadcrumb-item>预警认定</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <warning-cognizance></warning-cognizance>
  </div>
</template>

<script>
import WarningCognizance from '@/components/business/post-loan-manage/warning-cognizance'
export default {
  components: {
    WarningCognizance
  }
}
</script>

<style lang="stylus" scoped>
</style>
