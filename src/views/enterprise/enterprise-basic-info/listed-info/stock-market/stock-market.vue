/*
 * FileName: 股票行情
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:53:00 pm
 * Author: LiuBing
 */
<template>
  <div class="stock-market">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <!-- <td width="20"
            align="center"
            rowspan="6"
            colspan="1">{{ index + 1 }}</td> -->
          <td width="200">总市值：</td>
          <td>{{ item.tvalue }}</td>
          <td width="200">流通市值：</td>
          <td>{{ item.flowvalue}}</td>
          <td width="200">成交量:</td>
          <td>{{ item.tamount}}</td>
        </tr>
        <tr>
          <td>成交额：</td>
          <td>{{ item.tamounttotal }}</td>
          <td> 市净率：</td>
          <td>{{ item.tvaluep }}</td>
          <td>市盈率(动)：</td>
          <td>{{ item.fvaluep}}</td>
        </tr>
        <tr>
          <td>振幅：</td>
          <td>{{ item.trange }}</td>
          <td>换手：</td>
          <td>{{ item.tchange }}</td>
          <td></td>
          <td></td>
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
          graphId: '199557844',//公司id
          stockcode: '000001',//股票号
          stockname: '平安银行',//股票名
          stockType: '1',//股票类型
          timeshow: '2018-01-16 15:00:00',//更新时间
          fvaluep: '9.548',//市盈率（动）
          tvalue: '2438.20亿',//总市值
          flowvalue: '2402.35亿',//流通市值
          tvaluep: '1.23',//市净率
          topenprice: '14.17',//今开
          tamount: '24445.49万',//成交量
          trange: '2.54%',//振幅
          thighprice: '14.38',//最高
          tamounttotal: '34.79亿',//成交额
          tchange: '1.45%',//换手
          tlowprice: '14.02',//最低
          pprice: '14.20',//昨收
          tmaxprice: '15.62',//涨停
          tminprice: '12.78',//跌停
          hexm_curPrice: '14.20',//当前价格
          hexm_float_price: '0.00',//浮动价格
          hexm_float_rate: '0.00%',//浮动率
          stop: '0',//无用
          flag: false   //无用
        }
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>