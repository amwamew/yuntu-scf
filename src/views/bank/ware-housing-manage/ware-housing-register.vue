/*
 * FileName: 入库管理-入库登记
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="ware-housing-register">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>入库管理</el-breadcrumb-item>
        <el-breadcrumb-item>入库登记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ware-housing-register></ware-housing-register>
  </div>
</template>

<script>
import WareHousingRegister from '@/components/business/ware-housing-manage/ware-housing-register'
export default {
  components: {
    WareHousingRegister
  }
}
</script>

<style lang="stylus" scoped>
</style>