/*
 * FileName: 接货管理-接货通知
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="receiving-notice">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>接货管理</el-breadcrumb-item>
        <el-breadcrumb-item>接货通知</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <receiving-notice></receiving-notice>
  </div>
</template>

<script>
import ReceivingNotice from '@/components/business/receiving-manage/receiving-notice'
export default {
  components: {
    ReceivingNotice
  }
}
</script>

<style lang="stylus" scoped>
</style>