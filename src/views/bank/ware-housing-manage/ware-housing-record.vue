/*
 * FileName: 入库管理-入库记录
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="ware-housing-record">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>入库管理</el-breadcrumb-item>
        <el-breadcrumb-item>入库记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ware-housing-record></ware-housing-record>
  </div>
</template>

<script>
import WareHousingRecord from '@/components/business/ware-housing-manage/ware-housing-record'
export default {
  components: {
    WareHousingRecord
  }
}
</script>

<style lang="stylus" scoped>
</style>
