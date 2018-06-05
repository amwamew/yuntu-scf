
/*
 * FileName: 授信审批-审批记录
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */
<template>
  <div class="record-approval">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>授信审批</el-breadcrumb-item>
        <el-breadcrumb-item>审批记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <record-approval></record-approval>
  </div>
</template>

<script>
import RecordApproval from '@/components/business/client-approval-task/record-approval'
export default {
  components: {
    RecordApproval
  }
}
</script>

<style lang="stylus" scoped>
</style>

