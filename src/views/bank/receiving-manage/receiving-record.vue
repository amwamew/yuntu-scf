/*
 * FileName: 接货管理-接货记录
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="receiving-record">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>接货管理</el-breadcrumb-item>
        <el-breadcrumb-item>接货记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <receiving-record></receiving-record>
  </div>
</template>

<script>
import ReceivingRecord from '@/components/business/receiving-manage/receiving-record'
export default {
  components: {
    ReceivingRecord
  }
}
</script>

<style lang="stylus" scoped>
</style>