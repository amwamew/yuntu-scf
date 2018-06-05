/*
 * FileName: 暂无信息
 * Project: yuntu-scf-vue
 * File Created: Monday, 28th May 2018 10:13:15 am
 * Author: LiuBing
 */
<template>
  <div class="no-result">
    <span class="tip-img"
      :class="tipClass"></span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tipClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '暂无信息，可能存在时间相对滞后或未公示情况，仅供参考'
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '~assets/stylus/variable.styl'
.no-result
  text-align: center
  height: 30px
  margin: 10px 0
  .tip-img
    display: inline-block
    width: 44px
    height: 30px
    background: url('tip-img.png') no-repeat center center
  .text
    color: $color-gray-99
    font-size: 14px
    vertical-align: top
    line-height: 30px
</style>