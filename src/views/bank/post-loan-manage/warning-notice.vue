/*
 * FileName: 贷后管理-预警通知
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="warning-notice">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷后管理</el-breadcrumb-item>
        <el-breadcrumb-item>预警通知</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <warning-notice></warning-notice>
  </div>
</template>

<script>
import WarningNotice from '@/components/business/post-loan-manage/warning-notice'
export default {
  components: {
    WarningNotice
  }
}
</script>

<style lang="stylus" scoped>
</style>