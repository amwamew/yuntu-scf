/*
 * FileName: 数据管理
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:10:26 pm
 * Author: LiuBing
 */
<template>
  <div class="data-manage">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <data-manage></data-manage>
  </div>
</template>

<script>
import DataManage from '@/components/risk/data-manage/data-manage'
export default {
  components: {
    DataManage
  }
}
</script>

<style lang="stylus" scoped>
</style>
