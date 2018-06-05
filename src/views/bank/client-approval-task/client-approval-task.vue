
/*
 * FileName: 授信审批-授信审批
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */
<template>
  <div class="client-approval-task">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>授信审批</el-breadcrumb-item>
        <el-breadcrumb-item>授信审批</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <client-approval-task></client-approval-task>
  </div>
</template>

<script>
import ClientApprovalTask from '@/components/business/client-approval-task/client-approval-task'
export default {
  components: {
    ClientApprovalTask
  }
}
</script>

<style lang="stylus" scoped>
</style>