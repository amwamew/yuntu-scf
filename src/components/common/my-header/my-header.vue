<template>
  <div class="header" id="header">
    <div class="fl left-info">
      <div class="logo fl">
        <img src="../../../assets/images/logo-yt.png">
      </div>
      <div class="name fl">
        SCF业务管理后台
      </div>
    </div>
    <header-nav></header-nav>
    <div class="fr right-info">
      <div class="item">
        <el-badge :value="0">
          <div class="icon-notice"></div>
          <div class="text">消息</div>
        </el-badge>
      </div>
      <div class="item">
        <el-dropdown>

          <div class="el-dropdown-link text">
            <div class="icon-user"></div>
            陈伟
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/common/my-nav/header-nav'
export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable'
.header
  width: 100%
  overflow: hidden
  background: $color-white
  position: fixed
  top: 0
  z-index: 9
  .top-menu
    float: left
.left-info
  padding: 8px 10px
  .name
    line-height: 42px
    color: #7e8c8d;
.right-info
  padding: 8px 10px
  .item
    float: left
    height: 40px
    margin-left: 10px
    text-align: center
    position: relative
    cursor: pointer
    .icon-notice
      font-size: 26px
      color: #333333
    .icon-user
      font-size: 26px
      color: #333333
      text-align: left
    .text
      text-align: center
      font-size: 14px
      color: $color-black
      line-height: 20px
</style>
