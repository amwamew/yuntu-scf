/*
 * FileName: 股东投资任职
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:11:17 pm
 * Author: LiuBing
 */
<template>
  <div class="sh-invest">
    <invest-flag :data="data"></invest-flag>
  </div>
</template>

<script>
import InvestFlag from '../../components/invest-flag'
export default {
  components: {
    InvestFlag
  },
  data() {
    return {
      data: [
        {
          name: '石亮',
          typeJoin: ['执行董事'],
          //担任法人的企业
          legalEnterprise: [
            {
              id: '123457',
              name: '阜南县金宇食品商贸有限公司',
              state: '存续（在营、开业、在册）',
              regCapital: '300.00万元',
              estiblishTime: '2010-05-18'
            }
          ],
          //投资的企业
          investEnterprise: [
            {
              id: '123457',
              name: '阜南县金宇食品商贸有限公司',
              state: '存续（在营、开业、在册）',
              amount: '290.00万元',
              percent: '96.67%',
              regCapital: '300.00万元',
              estiblishTime: '2010-05-18'
            }
          ],
          //任职的企业
          joinEnterprise: [
            {
              id: '123457',
              name: '阜南县金宇食品商贸有限公司',
              state: '存续（在营、开业、在册）',
              typeJoin: ['执行董事'],
              regCapital: '300.00万元',
              estiblishTime: '2010-05-18'
            }
          ]
        },
        {
          name: '辛园园',
          typeJoin: ['董事'],
          legalEnterprise: [],
          investEnterprise: [
            {
              id: '123457',
              name: '阜南县金宇食品商贸有限公司',
              state: '存续（在营、开业、在册）',
              amount: '10.00万元',
              percent: '3.33%',
              regCapital: '300.00万元',
              estiblishTime: '2010-05-18'
            }
          ],
          joinEnterprise: [
            {
              id: '123457',
              name: '阜南县金宇食品商贸有限公司',
              state: '存续（在营、开业、在册）',
              typeJoin: ['监事'],
              regCapital: '300.00万元',
              estiblishTime: '2010-05-18'
            },
            {
              id: '123457',
              name: '阜南县金宇食品商贸有限公司',
              state: '存续（在营、开业、在册）',
              typeJoin: ['监事'],
              regCapital: '300.00万元',
              estiblishTime: '2010-05-18'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.formatData();
  },
  methods: {
    formatData() {
      this.data.forEach(item => {
        item.dialogTitle = `${item.name} 投资金额 ${item.investEnterprise[0].amount}（占比${item.investEnterprise[0].percent}）`
        item.title = `投资金额 ${item.investEnterprise[0].amount}（占比${item.investEnterprise[0].percent}）`
      })
    }
  }
}

</script>
<style lang='stylus' scoped>
.sh-invest
  padding-left: 40px
  padding-right: 40px
</style>