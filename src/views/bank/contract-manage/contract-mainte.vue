/*
 * FileName: 合同管理-合同维护
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="contract-mainte">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>合同管理</el-breadcrumb-item>
        <el-breadcrumb-item>合同维护</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <contract-mainte></contract-mainte>
  </div>
</template>

<script>
import ContractMainte from '@/components/business/contract-manage/contract-mainte'
export default {
  components: {
    ContractMainte
  }
}
</script>

<style lang="stylus" scoped>
</style>