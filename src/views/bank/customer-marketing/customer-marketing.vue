/*
 * FileName: 客户营销
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */
<template>
  <div class="customer-marketing">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>业务管理</el-breadcrumb-item>
        <el-breadcrumb-item>客户营销</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <customer-marketing></customer-marketing>
  </div>
</template>

<script>
import CustomerMarketing from '@/components/business/customer-marketing/customer-marketing'

export default {
  components: {
    CustomerMarketing
  }
}
</script>

<style lang="stylus" scoped>
</style>
