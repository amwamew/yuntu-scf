/*
 * FileName: 工商经营异常
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:28:25 pm
 * Author: LiuBing
 */
<template>
  <div class="abnormal-operation">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="4"
            colspan="1">{{ index + 1 }}</td>
          <td width="150">列入异常名录日期：</td>
          <td width="40%">{{item.putDate}}</td>
          <td width="150"> 决定列入异常名录部门:</td>
          <td>{{ item.putDepartment}}</td>
        </tr>
        <tr>
          <td>列入异常名录原因：</td>
          <td colspan="3">{{ item.putReason }}</td>
          <!-- <td>经营地点：</td>
          <td>{{ item.location }}</td> -->
        </tr>
        <tr>
          <td>移除异常名录日期：</td>
          <td>{{ item.removeDate }}</td>
          <td>决定移除异常名录部门</td>
          <td>{{ item. removeDepartment}}</td>
        </tr>
        <tr>
          <td>移除异常名录原因：</td>
          <td colspan="3">{{ item.removeReason}}</td>

        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import { timestampToTime } from '@/utils/utils'
export default {
  data() {
    return {
      data: [
        {
          createTime: '2017-04-09', //创建时间
          putDate: '2015-07-14', //列入日期
          removeDate: '2016-04-15', //移出日期
          removeDepartment: '长沙市工商行政管理局天心分局', //移出部门
          removeReason: '依法补报了未报年份的年度报告并公示', //移出原因
          putReason: '未按照规定报送2014年度年度报告', //列入经营异常名录原因
          putDepartment: '长沙市工商行政管理局天心分局' //列入部门
        },
        {
          createTime: '2017-04-09',
          putDate: '2015-07-13',
          removeDate: '2016-04-15',
          removeDepartment: '长沙市工商行政管理局天心分局',
          removeReason: '依法补报了未报年份的年度报告并公示',
          putReason: '未按照规定报送2013年度年度报告',
          putDepartment: '长沙市工商行政管理局天心分局'
        }
      ]
    }
  },
  methods: {
    formatArr(arr) {
      if (!arr || !arr.length) {
        return ''
      } else {
        return arr.map(e => e.name).join('，')
      }
    },
    formatTime(time) {
      return timestampToTime(time)
    }
  }
}
</script>
<style lang='stylus' scoped>
.abnormal-operation
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>