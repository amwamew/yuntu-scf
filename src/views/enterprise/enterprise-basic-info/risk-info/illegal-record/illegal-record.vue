/*
 * FileName: 工商违法记录
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:31:18 pm
 * Author: LiuBing
 */
<template>
  <div class="illegal-record">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="5"
            colspan="1">{{ index + 1 }}</td>
          <td>列入日期</td>
          <td>{{ formatTime(item.putDate) }}</td>
          <td>决定列入部门</td>
          <td>{{ item.putDepartment }}</td>
        </tr>
        <tr>
          <td>列入原因</td>
          <td rowspan="1"
            colspan="3">{{ item.putReason }}</td>
        </tr>
        <tr>
          <td>移除日期</td>
          <td>{{ formatTime(item.removeDate) }}</td>
          <td>决定移除部门</td>
          <td></td>
        </tr>
        <tr>
          <td>移除原因</td>
          <td rowspan="1"
            colspan="3">{{ item.removeReason }}</td>
        </tr>
        <tr>
          <td>类别</td>
          <td rowspan="1"
            colspan="3">{{ item.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { numeralMoney } from '@/utils/numeral'
import { timestampToTime } from '@/utils/utils'
export default {
  data() {
    return {
      data: [
        {
          removeReason: '', //移除原因
          removeDepartment: '', //决定移除部门
          putDate: 1472745600000, //列入日期
          putReason: '提交虚假材料或者采取其他欺诈手段隐瞒重要事实，取得公司变更或者注销登记，被撤销登记的', //列入原因
          putDepartment: '陕西省工商行政管理局', //决定列入部门(作出决定机关)
          removeDate: null, //移除日期
          type: '' //类别
        }
      ]
    }
  },
  methods: {
    numeral(money) {
      return numeralMoney(money)
    },
    formatTime(time) {
      return time ? timestampToTime(time) : ''
    }
  }
}
</script>
<style lang='stylus' scoped>
.illegal-record
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>