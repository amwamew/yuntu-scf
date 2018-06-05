/*
 * FileName: 贷前风控
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:16:53 pm
 * Author: LiuBing
 */
<template>
  <div class="risk-control">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>贷前风控</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <risk-control></risk-control>
  </div>
</template>

<script>
import RiskControl from '@/components/risk/risk-control/risk-control'
export default {
  components: {
    RiskControl
  }
}
</script>

<style lang="stylus" scoped>
</style>