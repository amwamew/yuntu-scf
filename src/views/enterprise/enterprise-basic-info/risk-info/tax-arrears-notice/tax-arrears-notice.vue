/*
 * FileName: 欠税公告
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:25:49 pm
 * Author: LiuBing
 */
<template>
  <div class="tax-arrears-notice">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="7"
            colspan="1">{{ index + 1 }}</td>
          <td width="150">公司名称：</td>
          <td width="30%">{{item.name}}</td>
          <td width="150"> 纳税人识别号:</td>
          <td>{{ item.taxIdNumber}}</td>
        </tr>
        <tr>
          <td>法人或负责人名称:</td>
          <td>{{ item.legalpersonName }}</td>
          <td>经营地点：</td>
          <td>{{ item.location }}</td>
        </tr>
        <tr>
          <td>欠税税种：</td>
          <td>{{ item.taxCategory }}</td>
          <td>欠税金额:</td>
          <td>{{ item.ownTaxAmount }}</td>
        </tr>
        <tr>
           <td>纳税人类型：</td>
          <td>{{ item.taxpayerType }}</td>
          <td>发布日期:</td>
          <td>{{ item.publishDate }}</td>
        </tr>
        <tr>
          <td>欠税余额(元):</td>
          <td>{{ item.ownTaxBalance }}</td>
          <td>当前新发生欠税余额(元):</td>
          <td>{{ item. newOwnTaxBalance}}</td>
        </tr>
        <tr>
           <td>注册类型:</td>
          <td>{{ item.regType }}</td>
          <td>税款所属税务机关:</td>
          <td>{{ item.department }}</td>
        </tr>
        <tr>
           <td>来源：</td>
          <td>{{ item.department }}</td>
          <td>	税种:</td>
          <td>{{ item.type }}</td>
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
          regType: null,//注册类型
          personIdNumber: '非公示项',//证件号码
          legalpersonName: '王惠民',//法人或负责人名称
          location: '洪山区珞瑜路196号',//经营地点
          ownTaxAmount: '66.19',//欠税金额
          department: '湖北省地方税务局',//部门
          taxIdNumber: '',//纳税人识别号
          type: '地税',//税务类型
          taxCategory: '营业税、城市维护建设税等',//欠税税种
          taxpayerType: null,//纳税人类型
          newOwnTaxBalance: null,//当前新发生欠税余额
          ownTaxBalance: '',//欠税余额
          name: '武汉远东绿世界集团有限公司',//纳税人名称
          personIdName: null,//法人证件名称
          publishDate: '2014-12-31'//发布时间
        },
        {
          regType: null,
          personIdNumber: '非公示项',
          legalpersonName: '王惠民',
          location: '洪山区珞瑜路196号',
          ownTaxAmount: '',
          department: null,
          taxIdNumber: '  ',
          type: '国税',
          taxCategory: '营业税、城市维护建设税等',
          taxpayerType: null,
          newOwnTaxBalance: '',
          ownTaxBalance: '661900',
          name: '武汉远东绿世界集团有限公司',
          personIdName: null,
          publishDate: null
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
.tax-arrears-notice
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>