/*
 * FileName: 规则设置
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:11:55 pm
 * Author: LiuBing
 */
<template>
  <div class="rule-setting">
    <div id="breadCrumb"
      class="breadCrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>规则设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <rule-setting></rule-setting>
  </div>
</template>

<script>
import RuleSetting from '@/components/risk/rule-setting/rule-setting'
export default {
  components: {
    RuleSetting
  }
}
</script>

<style lang="stylus" scoped>
</style>