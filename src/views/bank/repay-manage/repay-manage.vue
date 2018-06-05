/*
 * FileName: 还款管理-还款管理
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="repay-manage">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>还款管理</el-breadcrumb-item>
        <el-breadcrumb-item>还款管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <repay-manage></repay-manage>
  </div>
</template>

<script>
import RepayManage from '@/components/business/repay-manage/repay-manage'
export default {
  components: {
    RepayManage
  }
}
</script>

<style lang="stylus" scoped>
</style>