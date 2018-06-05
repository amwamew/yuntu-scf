/*
 * FileName: 合同管理-合同档案
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="contract-archive">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>合同管理</el-breadcrumb-item>
        <el-breadcrumb-item>合同档案</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <contract-archive></contract-archive>
  </div>
</template>

<script>
import ContractArchive from '@/components/business/contract-manage/contract-archive'
export default {
  components: {
    ContractArchive
  }
}
</script>

<style lang="stylus" scoped>
</style>
