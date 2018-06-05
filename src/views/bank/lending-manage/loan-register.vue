/*
 * FileName: 放款管理-放款登记
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="loan-register">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>放款管理</el-breadcrumb-item>
        <el-breadcrumb-item>放款登记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <loan-register></loan-register>
  </div>
</template>

<script>
import LoanRegister from '@/components/business/lending-manage/loan-register'
export default {
  components: {
    LoanRegister
  }
}
</script>

<style lang="stylus" scoped>
</style>
