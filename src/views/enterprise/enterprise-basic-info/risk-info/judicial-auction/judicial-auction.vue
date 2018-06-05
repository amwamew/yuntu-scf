/*
 * FileName: 司法拍卖
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:23:28 pm
 * Author: LiuBing
 */
<template>
  <div class="judicial-auction">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="6"
            colspan="1">{{ index + 1 }}</td>
          <td width="100">拍卖公告：</td>
          <td width="250"
            colspan="3">{{ item.title }}</td>
          <!-- <td width="70"> 执行依据文号：</td>
          <td>{{ item.gistid}}</td> -->
        </tr>
        <tr>
          <td>公司名称：</td>
          <td>{{ enterpriseBasicInfo.name }}</td>
          <td width="100">公告日期：</td>
          <td width="200">{{ item.pubTime }}</td>
        </tr>
        <tr>
          <td>执行法院：</td>
          <td>{{ item.court }}</td>
          <td>拍卖期限：</td>
          <td>{{ item.scopeDate }}</td>
        </tr>
        <tr>
          <td>介绍：</td>
          <td colspan="3">{{ item.introduction }}</td>
        </tr>
        <tr>
          <td>评估价格(元)：</td>
          <td>{{ formatMoney(item.detail, 'consult_price') }}</td>
          <td>起拍价格(元)：</td>
          <td>{{ formatMoney(item.detail, 'initial_price') }}</td>
        </tr>
        <tr>
          <td>详细数据：</td>
          <td colspan="3">{{ formatArr(item.detail.title) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { timestampToTime } from '@/utils/utils'
import { mapGetters } from 'vuex'
import { numeralMoney } from '@/utils/numeral'
export default {
  data() {
    return {
      data: [
        {
          pubTime: '2017-08-10 11:33',//公告日期
          detail: [//详细信息
            {
              consult_price: 15029523,//评估价格
              title: '常州市武进区银通农村小额贷款股份有限公司1500万股股权',//标题
              initial_price: 15029523,//起拍价格
              jid: 63    //对应表id
            }
          ],
          title:  //拍卖公告
            '常州市武进区人民法院关于常州市武进区银通农村小额贷款股份有限公司1500万股股权（第一次拍卖）的公告',
          court: '常州市武进区人民法院',//执行法院
          scopeDate: '2017-09-17至2017-09-18', //拍卖期限
          url: 'https://sf.taobao.com/notice_detail/601756.htm',//公告url
          introduction:   //介绍
            '江苏省常州市武进区人民法院关于常州市武进区银通农村小额贷款股份有限公司1500万股股权的拍卖公告（第一次）常州市人民法院将于2017年...'
        },
        {
          pubTime: '2017-03-28 15:41',
          detail: [
            {
              consult_price: 19534647,
              title: '常州市武进区银通农村小额贷款股份有限公司1500万股股份',
              initial_price: 15082400,
              jid: 156778
            }
          ],
          title:
            '常州市武进区人民法院关于常州市武进区银通农村小额贷款股份有限公司1500万股股份的公告(二次)',
          court: '常州市武进区人民法院',
          scopeDate: '2017-04-04至2017-04-05',
          url: 'https://sf.taobao.com/notice_detail/475944.htm',
          introduction:
            '江苏省常州市武进区人民法院关于常州市武进区银通农村小额贷款股份有限公司1500万股股份（第一次） 江苏省常州市武进区人民法院将于201...'
        },
        {
          pubTime: '2017-02-17 15:36',
          detail: [
            {
              consult_price: 19534647,
              title: '常州市武进区银通农村小额贷款股份有限公司1500万股股份',
              initial_price: 19534647,
              jid: 181305
            }
          ],
          title:
            '常州市武进区人民法院关于常州市武进区银通农村小额贷款股份有限公司1500万股股份的公告',
          court: '常州市武进区人民法院',
          scopeDate: '2017-03-20至2017-03-21',
          url: 'https://sf.taobao.com/notice_detail/450767.htm',
          introduction:
            '江苏省常州市武进区人民法院关于常州市武进区银通农村小额贷款股份有限公司1500万股股份（第一次） 江苏省常州市武进区人民法院将于201...'
        },
        {
          pubTime: '2016-05-27 08:52',
          detail: [
            {
              consult_price: 21789287,
              title: '常州市武进区银通农村小额贷款股份有限公司2000万股股份',
              initial_price: 17431430,
              jid: 360751
            }
          ],
          title:
            '常州市武进区人民法院关于被执行人持有的常州市武进区银通农村小额贷款股份有限公司2000万股股份的公告(二次)',
          court: '常州市武进区人民法院',
          scopeDate: '2016-06-16至2016-06-17',
          url: 'https://sf.taobao.com/notice_detail/272431.htm',
          introduction:
            '江苏省常州市武进区人民法院关于被执行人持有的常州市武进区银通农村小额贷款股份有限公司2000万股股份的拍卖公告（第二次） 江苏省常州市...'
        },
        {
          pubTime: '2016-04-13 09:09',
          detail: [
            {
              consult_price: 21789287,
              title: '常州市武进区银通农村小额贷款股份有限公司2000万股股份',
              initial_price: 21789287,
              jid: 382640
            }
          ],
          title:
            '常州市武进区人民法院关于被执行人持有的常州市武进区银通农村小额贷款股份有限公司2000万股股份的公告',
          court: '常州市武进区人民法院',
          scopeDate: '2016-05-05至2016-05-06',
          url: 'https://sf.taobao.com/notice_detail/249344.htm',
          introduction:
            '江苏省常州市武进区人民法院关于被执行人持有的常州市武进区银通农村小额贷款股份有限公司2000万股股份的拍卖公告 江苏省常州市武进区人民...'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['enterpriseBasicInfo'])
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
    },
    formatMoney(arr, name) {
      if (!arr || !arr.length) {
        return ''
      } else {
        arr.forEach(item => {
          item[name] = this.numeral(item[name])
        })
        return arr.map(e => e[name]).join('，')
      }
    },
    numeral(money) {
      return numeralMoney(money)
    }
  }
}
</script>
<style lang='stylus' scoped>
.judicial-auction
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>