<template>
  <div class="statistics">
    统计
    <transition name="fade-up">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created(){
    // console.log(this.$route)
  },
  watch:{
    '$route' (to, from) {
      // console.log('to',to)
      // console.log('from',from)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
