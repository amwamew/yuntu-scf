<template>
  <div class="bank">
    <div class="content-left">
      <div class="menu-top-select">
        <business-select @selectChange="onChange"></business-select>
        <div class="company">
          <el-select v-model="selectedCompany"
            placeholder="请选择"
            size="small">
            <el-option v-for="item in company"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
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
import { mapGetters } from 'vuex'
export default {
  components: {
    MyMenu,
    BusinessSelect
  },
  data() {
    return {
      menuData: [],
      selectedCompany: '',
      company: [
        {
          value: '1',
          label: '香飘飘食品股份有限公司'
        },
        {
          value: '2',
          label: '河北晨阳水漆集团公司'
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.setMenu()
  },
  computed: {
    ...mapGetters(['bankMenu'])
  },
  methods: {
    setMenu() {
      const type = this.$route.params.type
      this.menuData = this.bankMenu[type]
    },
    onChange(item) {
      this.$router.push(item.path)
    }
  },
  watch: {
    $route(to, from) {
      this.setMenu()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable'
.bank
  height: 100%
  overflow: hidden
</style>
