/*
 * FileName: 上市公司数据库
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:22:41 pm
 * Author: LiuBing
 */

<template>
  <div class="company-database">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>上市公司数据库</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <company-database></company-database>
  </div>
</template>

<script>
import CompanyDatabase from '@/components/risk/company-database/company-database'
export default {
  components: {
    CompanyDatabase
  }
}
</script>

<style lang="stylus" scoped>
</style>