/*
 * FileName: 台帐-台帐
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="ledger">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>台帐</el-breadcrumb-item>
        <el-breadcrumb-item>台帐</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ledger></ledger>
  </div>
</template>

<script>
import Ledger from '@/components/business/ledger/ledger'
export default {
  components: {
    Ledger
  }
}
</script>

<style lang="stylus" scoped>
</style>