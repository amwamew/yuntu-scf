/*
 * FileName: 贷后管理-预警解除
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="warning-relieve">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷后管理</el-breadcrumb-item>
        <el-breadcrumb-item>预警解除</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <warning-relieve></warning-relieve>
  </div>
</template>

<script>
import WarningRelieve from '@/components/business/post-loan-manage/warning-relieve'
export default {
  components: {
    WarningRelieve
  }
}
</script>

<style lang="stylus" scoped>
</style>