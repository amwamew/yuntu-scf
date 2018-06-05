/*
 * FileName: 股权出质
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:35:06 pm
 * Author: LiuBing
 */
<template>
  <div class="equity-pledge">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="5"
            colspan="1">{{ index + 1 }}</td>
          <td width="100"> 出质人</td>
          <td width="30%">{{ item.pledgor }}</td>
          <td width="100">质权人</td>
          <td>{{ item.pledgee }}</td>
        </tr>
        <tr>
          <td>出质股权数额</td>
          <td>{{ item.equityAmount }}</td>
          <td>状态</td>
          <td>{{ item.state }}</td>
        </tr>
        <tr>
          <td>登记编号</td>
          <td>{{ item.regNumber }}</td>
          <td>登记日期</td>
          <td>{{ formatTime(item.regDate) }}</td>
        </tr>
        <tr>
          <td>公示日期</td>
          <td>{{ formatTime(item.putDate) }}</td>
          <td>注销日期</td>
          <td></td>
        </tr>
        <tr>
          <td>注销原因</td>
          <td valign="top"
            rowspan="1"
            colspan="3"></td>
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
          equityAmount: '3900万元',//出质股权数额
          pledgee: '中信银行股份有限公司呼和浩特分行',//质权人
          regNumber: 'A1501579843',//登记编号
          companyList: [//公司列表
            {
              id: '211058937',//公司id
              name: '中信银行股份有限公司呼和浩特分行'//公司名
            },
            {
              id: '288006849',
              name: '鄂尔多斯市山湾投资有限公司'
            }
          ],
          putDate: 1464019200000,//股权出质设立发布日期
          pledgorStr: "<a href='http://www.tianyancha.com/company/288006849' target='_blank'>鄂尔多斯市山湾投资有限公司</a>",
          regDate: 1464019200000,//股权出质设立登记日期
          state: '无效',//状态
          base: 'nmg',//省份简称
          pledgor: '鄂尔多斯市山湾投资有限公司',//出质人
          certifNumberR: '非公示项',//质权人证照/证件号码
          certifNumber: '非公示项',//出质人证照/证件号码
          pledgeeStr: "<a href='http://www.tianyancha.com/company/211058937' target='_blank'>中信银行股份有限公司呼和浩特分行</a>"
        },
        {
          equityAmount: '5400万元',
          pledgee: '中信银行股份有限公司呼和浩特分行',
          regNumber: 'A1501581499',
          companyList: [
            {
              id: '211058937',
              name: '中信银行股份有限公司呼和浩特分行'
            }
          ],
          putDate: 1464019200000,
          pledgorStr: '王凤龙',
          regDate: 1464019200000,
          state: '无效',
          base: 'nmg',
          pledgor: '王凤龙',
          certifNumberR: '非公示项',
          certifNumber: '非公示项',
          pledgeeStr: "<a href='http://www.tianyancha.com/company/211058937' target='_blank'>中信银行股份有限公司呼和浩特分行</a>"
        },
        {
          equityAmount: '5400万元',
          pledgee: '中信银行股份有限公司呼和浩特分行',
          regNumber: 'A1600984068',
          companyList: [
            {
              id: '211058937',
              name: '中信银行股份有限公司呼和浩特分行'
            }
          ],
          putDate: 1464019200000,
          pledgorStr: '王凤龙',
          regDate: 1464019200000,
          state: '有效',
          base: 'nmg',
          pledgor: '王凤龙',
          certifNumberR: '非公示项',
          certifNumber: '非公示项',
          pledgeeStr: "<a href='http://www.tianyancha.com/company/211058937' target='_blank'>中信银行股份有限公司呼和浩特分行</a>"
        },
        {
          equityAmount: '3900万元',
          pledgee: '中信银行股份有限公司呼和浩特分行',
          regNumber: 'A1600984294',
          companyList: [
            {
              id: '211058937',
              name: '中信银行股份有限公司呼和浩特分行'
            },
            {
              id: '288006849',
              name: '鄂尔多斯市山湾投资有限公司'
            }
          ],
          putDate: 1464019200000,
          pledgorStr: "<a href='http://www.tianyancha.com/company/288006849' target='_blank'>鄂尔多斯市山湾投资有限公司</a>",
          regDate: 1464019200000,
          state: '有效',
          base: 'nmg',
          pledgor: '鄂尔多斯市山湾投资有限公司',
          certifNumberR: '非公示项',
          certifNumber: '非公示项',
          pledgeeStr: "<a href='http://www.tianyancha.com/company/211058937' target='_blank'>中信银行股份有限公司呼和浩特分行</a>"
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
.equity-pledge
  padding: 0 40px
  .my-table
    margin-bottom: 15px
  .my-table td, .my-table th
    padding: 15px
</style>