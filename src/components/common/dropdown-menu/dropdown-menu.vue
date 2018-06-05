<template>
  <div class="dropdown-menu">
    <el-dropdown trigger="click"
      @command="onClick">
      <span class="el-dropdown-link">
        {{ text }}
        <i v-if="isIcon"
          class="el-icon--right"
          :class="arrowDownIcon"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in menus"
          :key="index"
          :class="item.class" :command="item">{{ item.name }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    //触发方式，click、hover
    trigger: {
      type: String,
      default: 'click'
    },
    //下拉菜单文字
    text: {
      type: String,
      default: ''
    },
    //是否显示菜单后面的icon
    isIcon: {
      type: Boolean,
      default: true
    },
    //下拉菜单文字后面的icon图标
    arrowDownIcon: {
      type: String,
      default: 'el-icon-arrow-down'
    },
    //下拉菜单数组
    menus: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick(item) {
      this.$emit('hasClick',item)
    }
  }
}

</script>
<style lang='stylus' scoped>
.el-dropdown-link
  cursor: pointer
</style>