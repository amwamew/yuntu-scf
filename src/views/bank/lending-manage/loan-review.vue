/*
 * FileName: 放款管理-放款审查
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="loan-review">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>放款管理</el-breadcrumb-item>
        <el-breadcrumb-item>放款审查</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <loan-review></loan-review>
  </div>
</template>

<script>
import LoanReview from '@/components/business/lending-manage/loan-review'
export default {
  components: {
    LoanReview
  }
}
</script>

<style lang="stylus" scoped>
</style>