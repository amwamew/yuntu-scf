/*
 * FileName: 授信审批-查看尽调报告组件
 * Project: yuntu-scf-vue
 * File Created: Sunday, 20th May 2018 1:35:29 pm
 * Author: LiuBing
 */
<template>
  <div class="view-approval-report">
    <div class="item">
      <label class="item-title">客户信息</label>
      <div class="item-content">
        <div class="item-child">
          <label class="child-title">客户编号：</label>
          <span class="child-content">NO2017122800015</span>
        </div>
        <div class="item-child">
          <label class="child-title">客户名称：</label>
          <span class="child-content">阜南县金宇食品商贸有限公司</span>
        </div>
        <div class="item-child">
          <label class="child-title">借款人：</label>
          <span class="child-content">石亮</span>
        </div>
      </div>
    </div>
    <div class="item">
      <label class="item-title">初审意见</label>
      <span class="item-content">同意</span>
    </div>
    <div class="item">
      <label class="item-title">授信额度</label>
      <span class="item-content">1000000元</span>
    </div>
    <div class="item">
      <label class="item-title">初审意见</label>
      <span class="item-content">该企业信誉良好，给与较高的授信额度</span>
    </div>
    <div class="item">
      <label class="item-title">初审时间</label>
      <span class="item-content">同意</span>
    </div>
    <div class="item">
      <label class="item-title">客户经理</label>
      <span class="item-content">陈伟</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang='stylus' scoped>
@import '~assets/stylus/variable.styl'
.view-approval-report
  .item
    line-height: 26px
    margin-top: 20px
    .item-title
      width: 90px
      float: left
      background: $color-blue
      text-align: center
      color: $color-white
    .item-content
      width: 70%
      display: inline-block
      margin-left: 20px
</style>