/*
 * FileName: 授权调查-授信调查
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="incredit-manage-task">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>授信调查</el-breadcrumb-item>
        <el-breadcrumb-item>授信调查</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <incredit-manage-task></incredit-manage-task>
  </div>
</template>

<script>
import IncreditManageTask from '@/components/business/incredit-manage-task/incredit-manage-task'

export default {
  components: {
    IncreditManageTask
  }
}
</script>

<style lang="stylus" scoped>
</style>