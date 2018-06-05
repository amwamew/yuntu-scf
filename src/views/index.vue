<template>
  <div class="wrapper">
    <my-header ref="myHeader"></my-header>
    <div class="container"
      ref="container">
      <transition name="fade-up">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <my-footer ref="footer"></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/common/my-header/my-header'
import MyFooter from '@/components/common/my-footer/my-footer'
import { topMenu, bankMenu, riskMenu } from '@/assets/js/menu'
import { mapMutations } from 'vuex'
import { getObjectFirst } from '@/utils/utils'
export default {
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    // console.log(this.$route)
    this._setMenu()
    this._goDefault()
  },
  mounted() {
    this.$nextTick(() => {
      // this._setMainHeight()
    })
  },
  methods: {
    ...mapMutations({
      setTopMenu: 'SET_TOP_MENU',
      setBankMenu: 'SET_BANK_MENU',
      setRiskMenu: 'SET_RISK_MENU'
    }),
    _setMainHeight() {
      let screenHeight = document.documentElement.clientHeight
      let headerHeight = this.$refs.myHeader.$el.clientHeight
      let footerHeight = this.$refs.footer.$el.clientHeight
      let containerHeight = screenHeight - headerHeight - footerHeight - 15
      this.$refs.container.style.height = containerHeight + 'px'
    },
    _setMenu() {
      this.setTopMenu(topMenu)
      this.setBankMenu(bankMenu)
      this.setRiskMenu(riskMenu)
    },
    _getFirstPath(meun) {
      let defaultPath = '/'
      let firstMenu = meun
      if (!firstMenu.children || !firstMenu.children.length) {
        defaultPath = firstMenu.path
      } else {
        defaultPath = firstMenu.children[0].path
      }
      return defaultPath
    },
    //用于跳转默认的第一条链接
    _goDefault() {
      const route = this.$route
      const name = route.name
      const type = route.params.type
      let defaultPath = ''
      if (route.matched.length < 3) {
        if (type) {
          switch (name) {
            case 'Bank':
              defaultPath = this._getFirstPath(bankMenu[type][0])
              break
            case 'Risk':
              defaultPath = this._getFirstPath(riskMenu[type][0])
              break
          }
        } else {
          switch (name) {
            case 'Bank':
              defaultPath = this._getFirstPath(getObjectFirst(bankMenu)[0])
              break
            case 'Risk':
              defaultPath = this._getFirstPath(getObjectFirst(riskMenu)[0])
              break
          }
        }
        this.$router.push(defaultPath)
      }
    }
  },
  watch: {
    $route(to, from) {
      this._goDefault()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
