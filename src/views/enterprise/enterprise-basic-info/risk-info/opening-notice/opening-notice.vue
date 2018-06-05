/*
 * FileName: 开庭公告
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:15:00 pm
 * Author: LiuBing
 */
<template>
  <div class="opening-notice">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="4"
            colspan="1">{{ index + 1 }}</td>
          <td width="70">本案身份</td>
          <td width="250">被告</td>
          <td width="70">案由</td>
          <td>{{ item.caseReason }}</td>
        </tr>
        <tr>
          <td>原告</td>
          <td>{{ formatArr(item.plaintiff) }}</td>
          <td>被告</td>
          <td>{{ formatArr(item.defendant) }}</td>
        </tr>
        <tr>
          <td>法院</td>
          <td>{{ item.court }}</td>
          <td>法庭</td>
          <td>{{ item.courtroom }}</td>
        </tr>
        <tr>
          <td>审判长</td>
          <td>{{ item.judge }}</td>
          <td>开庭日期</td>
          <td>{{ formatTime(item.startDate) }}</td>
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
          startDate: '1512090000000', //开庭日期（毫秒数）
          judge: '邵莉星', //审判长/主审人
          plaintiff: [
            //原告/上诉人
            {
              type: 2, //1-公司 2-人
              id: 0, //人或公司id
              name: '吴英' //人名或公司名
            }
          ],
          courtroom: '第二十五法庭', //法庭
          caseReason: '财产损害赔偿纠纷', //案由
          contractors: '民一庭', //承办部门
          court: '普陀', //法院
          caseNo: '（2017）沪0107民初7088号', //案号
          defendant: [
            //被告/被上诉人
            {
              type: 1, //1-公司 2-人
              id: 22822, //人或公司id
              name: '北京百度网讯科技有限公司' //人或公司名
            }
          ]
        },
        {
          startDate: '1506321000000',
          judge: '沙丽',
          plaintiff: [
            {
              type: 1,
              id: 2345107433,
              name: '杭州快版科技有限公司'
            }
          ],
          caseReason: '知识产权权属侵权纠纷',
          contractors: '知产庭',
          caseNo: '（2017）浙8601民初1345号',
          courtroom: '第二十五法庭',
          court: '普陀',
          defendant: [
            {
              type: 1,
              id: 22822,
              name: '北京百度网讯科技有限公司'
            },
            {
              type: 1,
              id: 22823,
              name: '百度网讯科技有限公司'
            }
          ]
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
.opening-notice
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>