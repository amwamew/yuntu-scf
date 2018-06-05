/*
 * FileName: 工商抽查检查
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:29:21 pm
 * Author: LiuBing
 */
<template>
  <div class="inspect">
    <el-table :data="data"
      border
      style="width: 100%">
      <!-- <el-table-column type="index"
        label="序号"
        align="center"
        width="50">
      </el-table-column> -->
      <el-table-column prop="caseCode"
        label="公司名称">
        <template slot-scope="scope">
          {{ name }}
        </template>
      </el-table-column>
      <el-table-column prop="checkOrg"
        label="检查实施机关">
      </el-table-column>
      <el-table-column prop="checkType"
        label="类型"
        width="100">
      </el-table-column>
      <el-table-column prop="checkDate"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column prop="checkResult"
        label="结果"
        width="100">
      </el-table-column>
      <el-table-column prop="remark"
        label="备注">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      name: '', //公司名称
      data: [
        {
          checkDate: '2015-02-03', //日期
          checkOrg: '浦东新区市场监管局', //检查实施机关
          checkType: '抽查', //类型
          remark: null, //备注
          checkResult: '正常' //结果
        }
      ]
    }
  },
  created() {
    this.setName()
  },
  computed: {
    ...mapGetters(['enterpriseBasicInfo'])
  },
  methods: {
    setName() {
      this.name = this.enterpriseBasicInfo.name
    }
  }
}
</script>
<style lang='stylus' scoped>
.inspect
  padding: 0 40px
</style>