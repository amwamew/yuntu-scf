/*
 * FileName: 价格管理-盯市管理
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="mark-manage">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>价格管理</el-breadcrumb-item>
        <el-breadcrumb-item>盯市管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <mark-manage></mark-manage>
  </div>
</template>

<script>
import MarkManage from '@/components/business/price-manage/mark-manage'
export default {
  components: {
    MarkManage
  }
}
</script>

<style lang="stylus" scoped>
</style>