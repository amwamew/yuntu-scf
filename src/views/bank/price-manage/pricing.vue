/*
 * FileName: 价格管理-核价
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="pricing">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>价格管理</el-breadcrumb-item>
        <el-breadcrumb-item>核价</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <pricing></pricing>
  </div>
</template>

<script>
import Pricing from '@/components/business/price-manage/pricing'
export default {
  components: {
    Pricing
  }
}
</script>

<style lang="stylus" scoped>
</style>