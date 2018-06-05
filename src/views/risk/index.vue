<template>
  <div class="risk">
    <div class="content-left">
      <div class="menu-top-select">
        <business-select @selectChange="onChange"></business-select>
      </div>
      <my-menu :data="menuData"></my-menu>
    </div>
    <div class="content-right">
      <transition name="fade-up">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import MyMenu from '@/components/common/my-menu/my-menu'
import BusinessSelect from '@/components/common/business-select/business-select'
import { getObjectFirst } from '@/utils/utils'
import { mapGetters } from 'vuex'
export default {
  components: {
    MyMenu,
    BusinessSelect
  },
  data() {
    return {
      menuData: []
    }
  },
  created() {
    this.setMenu()
  },
  computed: {
    ...mapGetters(['riskMenu'])
  },
  methods: {
    setMenu() {
      // this.menuData = getObjectFirst(this.riskMenu)
      const type = this.$route.params.type
      this.menuData = this.riskMenu[type]
    },
    onChange(item) {
      const type = item.type
      this.$router.push({
        name: 'Risk',
        params: {
          type: type
        }
      })
      console.log(item)
    }
  },
  watch: {
    $route() {
      this.setMenu()
    }
  }
}
</script>

<style lang="stylus" scoped>
.risk
  height: 100%
</style>
