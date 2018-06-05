/*
 * FileName: 核库-核库
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */
<template>
  <div class="verify-ware-house">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>核库</el-breadcrumb-item>
        <el-breadcrumb-item>核库</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <verify-ware-house></verify-ware-house>
  </div>
</template>

<script>
import VerifyWareHouse from '@/components/business/verify-ware-house/verify-ware-house'
export default {
  components: {
    VerifyWareHouse
  }
}
</script>

<style lang="stylus" scoped>
</style>