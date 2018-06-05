<template>
  <div class="footer" id="footer">
    <p>Copyright @2016 北京云图征信有限公司 版权所有 京ICP备15044723号</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable'
.footer
  position: fixed
  width: 100%
  bottom: 0
  color: $color-gray-99
  background: $color-gray-ef
  font-size: 14px
  text-align: center
  z-index 9
  p
  
  line-height: 36px
</style>
