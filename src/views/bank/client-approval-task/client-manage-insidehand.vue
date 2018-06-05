/*
 * FileName: 授信审批-审批任务分配
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="client-manage-insidehand">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>授信审批</el-breadcrumb-item>
        <el-breadcrumb-item>审批任务分配</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <client-manage-insidehand></client-manage-insidehand>
  </div>
</template>

<script>
import clientManageInsidehand from '@/components/business/client-approval-task/client-manage-insidehand'
export default {
  components: {
    clientManageInsidehand
  }
}
</script>

<style lang="stylus" scoped>
</style>
