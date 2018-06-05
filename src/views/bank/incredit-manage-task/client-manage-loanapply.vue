
/*
 * FileName: 授权调查-客户分配
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */
<template>
  <div class="client-manage-loanapply">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>授信调查</el-breadcrumb-item>
        <el-breadcrumb-item>客户分配</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <client-manage-loanapply></client-manage-loanapply>
  </div>
</template>

<script>
import ClientManageLoanapply from '@/components/business/incredit-manage-task/client-manage-loanapply'

export default {
  components: {
    ClientManageLoanapply
  }
}
</script>

<style lang="stylus" scoped>
</style>
