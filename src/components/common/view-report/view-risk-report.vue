/*
 * FileName: 查看风控报告及其他有下拉的
 * Project: yuntu-scf-vue
 * File Created: Saturday, 19th May 2018 8:17:10 pm
 * Author: LiuBing
 */

<template>
  <span class="view-risk-report">
    <el-dropdown @command="onClick">
      <el-button @click="goMain()"
        class="el-dropdown-link"
        type="text"
        icon="icon-view"
        size="small">{{text}}</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in dropData"
          :command="item.type"
          :key="index">{{index + 1}}.{{item.label}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      defaultL: {}
    },
    //按钮是否可以点击
    needClick: {
      type: Boolean,
      default: true
    },
    dropData: {
      type: Array,
      default: () => [
        {
          type: 1,
          label: '企业基本信息'
        },
        {
          type: 2,
          label: '不良信息扫描'
        },
        {
          type: 3,
          label: '企业关联图谱'
        },
        {
          type: 4,
          label: '经营分析'
        },
        {
          type: 5,
          label: '财务分析'
        },
        {
          type: 6,
          label: '贷后监控'
        }
      ]
    },
    text: {
      type: String,
      default: '查看风控报告'
    }
  },
  methods: {
    //按钮点击
    goMain() {
      if (this.needClick) {
        console.log(this.data)
      }
    },
    //下拉菜单点击
    onClick(command) {
      console.log(command)
      console.log(this.data)
      // this.$emit('reportOnClick',command,this.data)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
