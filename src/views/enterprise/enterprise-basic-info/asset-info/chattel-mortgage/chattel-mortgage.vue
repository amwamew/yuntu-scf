/*
 * FileName: 动产抵押
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:36:06 pm
 * Author: LiuBing
 */
<template>
  <div class="chattel-mortgage">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="7"
            colspan="1">{{ index + 1 }}</td>
          <td width="100">登记编号</td>
          <td width="40%">{{ item.baseInfo.regNum }}</td>
          <td width="150">状态</td>
          <td>{{ item.baseInfo.status }}</td>
        </tr>
        <tr>
          <td>登记日期</td>
          <td>{{ item.baseInfo.regDate }}</td>
          <td>公示日期</td>
          <td>{{ formatTime(item.baseInfo.publishDate) }}</td>
        </tr>
        <tr>
          <td>登记机关</td>
          <td>{{ item.baseInfo.regDepartment }}</td>
          <td>债务人履行债务的期限</td>
          <td>{{ item.baseInfo.overviewTerm }}</td>
        </tr>
        <tr>
          <td>被担保债权种类</td>
          <td>{{ item.baseInfo.type }}</td>
          <td>被担保债权数额</td>
          <td>{{ item.baseInfo.amount }}</td>
        </tr>
        <tr>
          <td>担保范围</td>
          <td rowspan="1"
            colspan="3">{{ item.baseInfo.scope }}</td>
        </tr>
        <tr>
          <td>备注</td>
          <td rowspan="1"
            colspan="4">{{ item.baseInfo.remark }}</td>
        </tr>
        <tr>
          <td>注销日期</td>
          <td>{{ formatTime(item.baseInfo.cancelDate) }}</td>
          <td>注销原因</td>
          <td>{{ item.baseInfo.cancelReason }}</td>
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
          baseInfo: {
            overviewAmount: '350万元人民币元',//概况数额
            scope: '抵押担保',//担保范围
            status: '有效',//状态
            remark: '',//备注
            regDate: '2017-04-27',//登记日期
            overviewType: '借款合同',//概况种类
            type: '借款合同',//被担保债权种类
            cancelReason: '',//注销原因
            overviewScope: '抵押担保',//概况担保的范围
            id: 9896676,//表id
            amount: '350万元人民币元',//被担保债权数额
            overviewRemark: '',//概况备注
            overviewTerm: '2017年04月27日至2018年04月26日',//概况债务人履行债务的期限
            regDepartment: '融水苗族自治县市场监督管理局',//登记机关
            regNum: '融工商抵登字[2017]31号',//登记编号
            term: '2017年04月27日至2018年04月26日',//债务人履行债务的期限
            base: 'gx',//省份
            cancelDate: 1498752000000,//注销日期
            publishDate: 1498752000000//公示日期
          },
          changeInfoList: [
            {
              changeDate: 1461600000000,//变更日期
              changeContent:
                '原借款合同编号234803150906681变更为：234803160529541.'//变更内容
            }
          ],
          pawnInfoList: [
            {
              detail: '28台套、良好、老莱镇丰盛村',//数量、质量、状况、所在地等情况
              ownership: '讷河市丰盛现代农业农机专业合作社',//所有权归属
              pawnName: '农机具',//名称
              remark: ''//备注
            }
          ],
          peopleInfo: [
            {
              licenseNum: '非公示项',//证照/证件号码
              peopleName: '讷河市农村信用合作联社',//抵押权人名称
              liceseType: '其他'//抵押权人证照/证件类型
            }
          ]
        }
      ]
    }
  },
  methods: {
    formatTime(time) {
      return time ? timestampToTime(time) : ''
    }
  }
}
</script>
<style lang='stylus' scoped>
.chattel-mortgage
  padding: 0 40px
  .my-table
    margin-bottom: 15px
  .my-table td, .my-table th
    padding: 15px
</style>