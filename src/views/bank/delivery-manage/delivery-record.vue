/*
 * FileName: 提货管理-提货记录
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="delivery-record">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>提货管理</el-breadcrumb-item>
        <el-breadcrumb-item>提货记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <delivery-record></delivery-record>
  </div>
</template>

<script>
import DeliveryRecord from '@/components/business/delivery-manage/delivery-record'
export default {
  components: {
    DeliveryRecord
  }
}
</script>

<style lang="stylus" scoped>
</style>