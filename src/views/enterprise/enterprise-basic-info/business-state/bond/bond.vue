/*
 * FileName: 债券信息
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:46:21 pm
 * Author: LiuBing
 */
<template>
  <div class="bond">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="12"
            colspan="1">{{ index + 1 }}</td>
          <td width="100">债券名称：</td>
          <td width="250"
            colspan="3">{{ item.bondName}}</td>
          <!-- <td width="70"> 执行依据文号：</td>
          <td>{{ item.gistid}}</td> -->
        </tr>
        <tr>
          <td>债券代码：</td>
          <td width="500">{{ item.bondNum }}</td>
          <td width="100"> 债券类型：</td>
          <td >{{ item.bondType }}</td>
        </tr>
        <tr>
          <td>债券发行日：</td>
          <td>{{ item.publishTime }}</td>
          <td>债券到期日：</td>
          <td>{{ item.publishExpireTime }}</td>
        </tr>
        <tr>
          <td>债券期限：</td>
          <td colspan="1">{{ item.bondTimeLimit }}</td>
          <td>计息方式：</td>
          <td>{{ item.calInterestType }}</td>
        </tr>
        <tr>
          <td>债券摘牌日：</td>
          <td>{{ item.bondStopTime}}</td>
          <td>信用评级机构：</td>
          <td>{{ item.creditRatingGov }}</td>
        </tr>
        <tr>
          <td>债项评级：</td>
          <td>{{ item.debtRating }}</td>
          <td>面值：</td>
          <td>{{ item.faceValue }}</td>
        </tr>
        <tr>
          <td>参考利率：</td>
          <td>{{ item.refInterestRate }}</td>
          <td>票面利率：</td>
          <td>{{ item.faceInterestRate }}</td>
        </tr>
        <tr>
          <td>实际发行量亿：</td>
          <td>{{ item.realIssuedQuantity }}</td>
          <td>计划发行量亿：</td>
          <td>{{ item.planIssuedQuantity }}</td>
        </tr>
        <tr>
          <td>发行价格元：</td>
          <td>{{ item.issuedPrice }}</td>
          <td>利差：</td>
          <td>{{ item.interestDiff }}</td>
        </tr>
        <tr>
          <td>付息频率：</td>
          <td>{{ item.payInterestHZ }}</td>
          <td>债券起息日：</td>
          <td>{{ item.startCalInterestTime }}</td>
        </tr>
        <tr>
          <td>行权日期：</td>
          <td>{{ item.exeRightTime }}</td>
          <td>托管机构：</td>
          <td>{{ item.escrowAgent }}</td>
        </tr>
        <tr>
          <td>流通范围：</td>
          <td colspan="3">{{ item.flowRange }}</td>
          
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
          bondName: '16嘉兴银行CD032',//债券名称
          bondNum: '111693879',//债券代码
          bondStopTime: 1495728000000,//债劵摘牌日
          bondTimeLimit: '1年',//债劵期限
          bondTradeTime: null,//上市交易日
          bondType: '同业存单', //债券类型
          calInterestType: '贴现',  //计息方式
          createTime: 1464170281000, //创建时间
          creditRatingGov: '',  //信用评级机构
          debtRating: '',   //债项评级
          escrowAgent: '上海清算所',  //托管机构
          exeRightTime: null,   //行权日期
          exeRightType: '',//行权类型
          faceInterestRate: 0,//票面利率(%)
          faceValue: 100, //面值
          flowRange: '公开发行',//流通范围
          id: 5,  //对应表id
          interestDiff: 0,  //利差(BP)
          isDelete: 0, //0:未删除 1:已删除
          issuedPrice: 96.78,//发行价格(元)
          payInterestHZ: '', //付息频率
          planIssuedQuantity: 2,//计划发行量(亿)
          publishExpireTime: 1495814400000,//债劵到期日
          publishTime: 1464192000000, //债劵发行日
          publisherName: '嘉兴银行股份有限公司', //发行人
          realIssuedQuantity: 0, //实际发行量(亿)
          refInterestRate: 0, //参考利率
          remark: '', //备注
          startCalInterestTime: 1464278400000, //债券起息日
          tip: '对于含权债，票面利率/利差指行权前的票面利率/利差。',//注
          updateTime: 1464170281000  //更新时间
        },
        {
          bondName: '16嘉兴银行CD033',
          bondNum: '111693885',
          bondStopTime: 1495728000000,
          bondTimeLimit: '1年',
          bondTradeTime: 1464278400000,
          bondType: '同业存单',
          calInterestType: '贴现',
          createTime: 1464170281000,
          creditRatingGov: '',
          debtRating: '',
          escrowAgent: '上海清算所',
          exeRightTime: null,
          exeRightType: '',
          faceInterestRate: 0,
          faceValue: 100,
          flowRange: '公开发行',
          id: 7,
          interestDiff: 0,
          isDelete: 0,
          issuedPrice: 96.78,
          payInterestHZ: '',
          planIssuedQuantity: 3,
          publishExpireTime: 1495814400000,
          publishTime: 1464192000000,
          publisherName: '嘉兴银行股份有限公司',
          realIssuedQuantity: 3,
          refInterestRate: 0,
          remark: '',
          startCalInterestTime: 1464278400000,
          tip: '对于含权债，票面利率/利差指行权前的票面利率/利差。',
          updateTime: 1464170281000
        },
        {
          bondName: '16嘉兴银行CD031',
          bondNum: '111693819',
          bondStopTime: 1495641600000,
          bondTimeLimit: '1年',
          bondTradeTime: 1464192000000,
          bondType: '同业存单',
          calInterestType: '贴现',
          createTime: 1464170687000,
          creditRatingGov: '',
          debtRating: '',
          escrowAgent: '上海清算所',
          exeRightTime: null,
          exeRightType: '',
          faceInterestRate: 0,
          faceValue: 100,
          flowRange: '公开发行',
          id: 84,
          interestDiff: 0,
          isDelete: 0,
          issuedPrice: 96.8,
          payInterestHZ: '',
          planIssuedQuantity: 2,
          publishExpireTime: 1495728000000,
          publishTime: 1464105600000,
          publisherName: '嘉兴银行股份有限公司',
          realIssuedQuantity: 2,
          refInterestRate: 0,
          remark: '',
          startCalInterestTime: 1464192000000,
          tip: '对于含权债，票面利率/利差指行权前的票面利率/利差。',
          updateTime: 1464170687000
        },
        {
          bondName: '16嘉兴银行CD030',
          bondNum: '111693391',
          bondStopTime: 1494777600000,
          bondTimeLimit: '1年',
          bondTradeTime: 1463328000000,
          bondType: '同业存单',
          calInterestType: '贴现',
          createTime: 1464179610000,
          creditRatingGov: '',
          debtRating: '',
          escrowAgent: '上海清算所',
          exeRightTime: null,
          exeRightType: '',
          faceInterestRate: 0,
          faceValue: 100,
          flowRange: '公开发行',
          id: 1043,
          interestDiff: 0,
          isDelete: 0,
          issuedPrice: 96.8,
          payInterestHZ: '',
          planIssuedQuantity: 0.5,
          publishExpireTime: 1494864000000,
          publishTime: 1463068800000,
          publisherName: '嘉兴银行股份有限公司',
          realIssuedQuantity: 0.5,
          refInterestRate: 0,
          remark: '',
          startCalInterestTime: 1463328000000,
          tip: '对于含权债，票面利率/利差指行权前的票面利率/利差。',
          updateTime: 1464179610000
        },
        {
          bondName: '16嘉兴银行CD029',
          bondNum: '111693316',
          bondStopTime: 1494518400000,
          bondTimeLimit: '1年',
          bondTradeTime: 1463068800000,
          bondType: '同业存单',
          calInterestType: '贴现',
          createTime: 1464180233000,
          creditRatingGov: '',
          debtRating: '',
          escrowAgent: '上海清算所',
          exeRightTime: null,
          exeRightType: '',
          faceInterestRate: 0,
          faceValue: 100,
          flowRange: '公开发行',
          id: 1112,
          interestDiff: 0,
          isDelete: 0,
          issuedPrice: 96.78,
          payInterestHZ: '',
          planIssuedQuantity: 1,
          publishExpireTime: 1494604800000,
          publishTime: 1462982400000,
          publisherName: '嘉兴银行股份有限公司',
          realIssuedQuantity: 1,
          refInterestRate: 0,
          remark: '',
          startCalInterestTime: 1463068800000,
          tip: '对于含权债，票面利率/利差指行权前的票面利率/利差。',
          updateTime: 1464180233000
        }
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>