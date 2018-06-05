<template>
  <div class="switch">
    <el-switch v-model="isCheck"
      :width="width"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :active-text="activeText"
      :inactive-text="inactiveText">
    </el-switch>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 70
    },
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    inactiveColor: {
      type: String,
      default: '#A5A5A5'
    },
    activeText: {
      type: String,
      default: '已开启'
    },
    inactiveText: {
      type: String,
      default: '已关闭'
    }
  },
  data() {
    return {
      isCheck: this.value
    }
  }
}
</script>

<style lang="stylus" scoped>
.switch
  // position: relative
</style>
