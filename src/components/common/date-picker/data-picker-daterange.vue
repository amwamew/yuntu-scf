<template>
  <div>
    <el-date-picker v-model="timeSelect"
      type="daterange"
      :range-separator="rangeSeparator"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :size="size"
      unlink-panels
      value-format="yyyy-MM-dd"
      @change="onChange">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    rangeSeparator: {
      type: String,
      default: '至'
    },
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    size:{
      type: String,
      default: 'small'
    }
  },
  data() {
    return {
      timeSelect: []
    }
  },
  methods: {
    onChange(val) {
      this.$emit('dataChange', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
