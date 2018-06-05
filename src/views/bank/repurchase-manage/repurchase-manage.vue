/*
 * FileName: 回购管理-回购管理
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="repurchase-manage">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>回购管理</el-breadcrumb-item>
        <el-breadcrumb-item>回购管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <repurchase-manage></repurchase-manage>
  </div>
</template>

<script>
import RepurchaseManage from '@/components/business/repurchase-manage/repurchase-manage'
export default {
  components: {
    RepurchaseManage
  }
}
</script>

<style lang="stylus" scoped>
</style>
