/*
 * FileName: 分配客户经理组件
 * Project: yuntu-scf-vue
 * File Created: Saturday, 19th May 2018 2:32:08 pm
 * Author: LiuBing
 */
<template>
  <div class="assigning-customer-manager">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content">
          <el-select v-model="data.bank"
            style="width:100%"
            placeholder="请选择银行">
            <el-option v-if="datas.banks"
              v-for="(item,index) in datas.banks"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <el-select v-model="data.manager"
            style="width:100%"
            :multiple="multiple"
            placeholder="请选择客户经理"
            @change="onChange">
            <el-row class="select-header">
              <el-col :span="6">
                <div class="grid-content">姓名</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">手机号</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">已分配</div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">跟进中</div>
              </el-col>
            </el-row>
            <el-option v-if="datas.managers"
              v-for="(item,index) in datas.managers"
              :key="index"
              :label="item.name"
              :value="item.id">
              <el-row>
                <el-col :span="6">
                  <div class="grid-content">
                    {{item.name}}
                    <!-- <el-checkbox :v-model="true">{{item.name}}</el-checkbox> -->
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">{{item.mobile}}</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">{{item.allocated}}</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">{{item.followUp}}</div>
                </el-col>
              </el-row>
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    datas: {
      type: Object,
      default: () => {}
    },
    //是否开启多选
    multiple: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onChange(item) {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
.select-header
  padding: 10px 20px
  background: $color-gray-F9F9F9
</style>
