<template>
  <div class="bussiness-select">
    <el-select v-model="value"
      :placeholder="placeholder"
      :size="size"
      @change="onChange">
      <el-option v-for="(item,index) in bussinessMenu"
        :key="index"
        :label="item.label"
        :value="index">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    optionValue: {
      type: String,
      default: 'path'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {
      value: 0,
      bussinessMenu: []
    }
  },
  created() {
    this._getBussinessMenu()
    this.setDefaultValue(this.$route.params.type)
  },
  computed: {
    ...mapGetters(['topMenu'])
  },
  methods: {
    _getBussinessMenu() {
      this.topMenu.forEach(item => {
        if (item.name === 'Bank') {
          this.bussinessMenu = item.children
          return false
        }
      })
    },
    setMenu(data) {
      this.bussinessMenu = data
    },
    onChange(i) {
      const menuInfo = this.bussinessMenu[i]
      this.$emit('selectChange', menuInfo)
    },
    setDefaultValue(type) {
      this.bussinessMenu.forEach((item, i) => {
        if (item.type === type) {
          this.value = i
          return false
        }
      })
    }
  },
  watch: {
    $route(to, from) {
      this.setDefaultValue(this.$route.params.type)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
