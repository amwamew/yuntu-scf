/*
 * FileName: 提货管理-提货审查
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="delivery-review">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>提货管理</el-breadcrumb-item>
        <el-breadcrumb-item>提货审查</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <delivery-review></delivery-review>
  </div>
</template>

<script>
import DeliveryReview from '@/components/business/delivery-manage/delivery-review'
export default {
  components: {
    DeliveryReview
  }
}
</script>

<style lang="stylus" scoped>
</style>
