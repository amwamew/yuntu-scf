/*
 * FileName: 基本信息
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:36:38 pm
 * Author: LiuBing
 */

<template>
  <div class="basic-info">
    <transition name="fade-up">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route)
  }
}
</script>

<style lang="stylus" scoped>
</style>