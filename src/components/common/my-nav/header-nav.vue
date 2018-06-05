<template>
  <div class="top-menu">
    <my-menu :data="topMenuData" mode="horizontal">
    </my-menu>
  </div>
</template>

<script>
import MyMenu from '@/components/common/my-menu/my-menu'
import { mapGetters } from 'vuex'
export default {
  components: {
    MyMenu
  },
  data() {
    return {
      topMenuData: [],
      mode: 'horizontal'
    }
  },
  computed: {
    ...mapGetters(['topMenu'])
  },
  mounted() {
    this.topMenuData = this.topMenu
  }
}
</script>

<style lang="stylus" scoped>
</style>
