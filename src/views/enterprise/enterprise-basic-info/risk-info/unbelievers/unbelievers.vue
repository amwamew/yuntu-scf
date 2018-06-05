/*
 * FileName: 失信人
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:22:22 pm
 * Author: LiuBing
 */
<template>
  <div class="unbelievers">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="5"
            colspan="1">{{ index + 1 }}</td>
          <td width="200">案号:</td>
          <td width="250">{{item.casecode}}</td>
          <td width="150"> 执行依据文号：</td>
          <td>{{ item.gistid}}</td>
        </tr>
        <tr>
          <td>执行法院:</td>
          <td>{{ item.courtname }}</td>
          <td>作出执行依据单位：</td>
          <td>{{ item.gistunit }}</td>
        </tr>
        <tr>
          <td>立案日期:</td>
          <td>{{ item.regdate }}</td>
          <td>发布日期</td>
          <td>{{ item.publishdate }}</td>
        </tr>
        <tr>
          <td>失信人人行为具体情形：</td>
          <td colspan="3">{{ item.disrupttypename }}</td>
        </tr>
        <tr>
          <td>生效法律文书确定的义务</td>
          <td colspan="3">{{ item.duty }}</td>
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
          iname: '天津信裕房地产发展有限公司', //失信人名称
          businessentity: '徐永清', //法定代表人
          gistid: '2016津仲裁字第47号', //执行依据文号
          areaname: '天津', //省份
          cardnum: '60056316-5', //身份证号／组织机构代码
          courtname: '天津市河西区人民法院', //执行法院
          publishdate: '1501171200000', //发布时间
          type: '1', //1-公司 2-人
          id: '196602058', //人或公司id
          gistunit: '天津仲裁委员会', //做出执行依据单位
          duty:
            '一、被执行人退还申请执行人购房款23515元及加倍支付迟延履行期间的债务利息681元；二、交付申请执行人案件受理费2226元、公告费1000元。', //法律生效文书确定的义务
          performance: '全部未履行', //被执行人的履行情况
          regdate: '1491321600000', //立案时间
          casecode: '(2017)津0103执1606号', //案号
          disrupttypename: '有履行能力而拒不履行生效法律文书确定义务' //失信被执行人行为具体情形
        },
        {
          iname: '天津信裕房地产发展有限公司',
          businessentity: '徐永清',
          gistid: '(2014)西民一初字第751号',
          areaname: '天津',
          cardnum: '60056316-5',
          courtname: '天津市河西区人民法院',
          publishdate: '1493222400000',
          type: '1',
          id: '196602058',
          gistunit: '天津市河西区人民法院',
          duty:
            '一、被告于2014年12月31日前返还原告借款200000元，于2015年12月31日前返还原告剩余借款400000元；二、案件受理费9800元，减半收取后为4900元，由原、被告各自承担2450元',
          performance: '全部未履行',
          regdate: '1483027200000',
          casecode: '(2016)津0103执4676号',
          disrupttypename: '其他有履行能力而拒不履行生效法律文书确定义务的'
        },
        {
          iname: '天津信裕房地产发展有限公司',
          businessentity: '徐永清',
          gistid: '(2013)西民二初字224号',
          areaname: '天津',
          cardnum: '60056316-5',
          courtname: '天津市河西区人民法院',
          publishdate: '1381248000000',
          type: '1',
          id: '196602058',
          gistunit: '河西法院',
          duty:
            '一、被告天津信裕房地产发展有限公司于本判决生效之日起十日内支付原告天津和平建工集团有限公司工程款1800000元。二、被告天津信裕房地产发展有限公司于本判决生效之日起十日内支付原告天津和平建工集团有限公司滞纳金449800元（从2011年6月31日起至2013年1月30日止）及从2013年2月1日开始实际给付工程款1800000元之日止的滞纳金，每延期一日按万分之五计算案件受理费24798元由被告天津信裕房地产发展有限公司负担',
          performance: '全部未履行',
          regdate: '1372262400000',
          casecode: '(2013)西法执字第01218号',
          disrupttypename: '其他有履行能力而拒不履行生效法律文书确定义务'
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
    formatTime(time){
      return timestampToTime(time)
    }
  }
}
</script>
<style lang='stylus' scoped>
.unbelievers
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>