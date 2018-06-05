/*
 * FileName: 被执行人
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:19:02 pm
 * Author: LiuBing
 */
<template>
  <div class="executor">
    <el-table :data="data"
      border
      :height="tableHeight"
      style="width: 100%">
      <el-table-column type="index"
        label="序号"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column prop="caseCode"
        label="案号"
        width="250">
      </el-table-column>
      <el-table-column prop="caseCreateTime"
        label="立案日期"
        width="150">
        <template slot-scope="scope">
          {{ formatTime(scope.row.caseCreateTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="execMoney"
        label="执行标的（元）"
        width="200">
        <template slot-scope="scope">
          {{ numeral(scope.row.execMoney) }}
        </template>
      </el-table-column>
      <el-table-column prop="execCourtName"
        label="执行法院">
      </el-table-column>
      <el-table-column prop="pname"
        label="被执行人姓名/名称">
      </el-table-column>
      <el-table-column prop="state"
        label="状态"
        width="100">
        <template slot-scope="scope">
          {{ setState(scope.row.state) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { numeralMoney } from '@/utils/numeral'
import { timestampToTime } from '@/utils/utils'
export default {
  data() {
    return {
      tableHeight: 0,
      data: [
        {
          caseCode: '(2017)苏0812执4249号', //案号
          execCourtName: '淮安市清江浦区人民法院', //执行法院
          pname: '淮安禧徕乐投资发展有限公司', //被执行人名称
          partyCardNum: '91320811696****409A', //身份证号／组织机构代码
          caseCreateTime: 1511107200000, //创建时间
          execMoney: '55593', //执行标的
          state: 1 //执行状态：1已执行，0未执行
        },
        {
          caseCode: '(2017)苏0812执4247号',
          execCourtName: '淮安市清江浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740-9',
          caseCreateTime: 1511107200000,
          execMoney: '47689',
          state: 1
        },
        {
          caseCode: '(2017)苏0812执4248号',
          execCourtName: '淮安市清江浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740-9',
          caseCreateTime: 1511107200000,
          execMoney: '58435',
          state: 1
        },
        {
          caseCode: '(2017)苏0812执3091号',
          execCourtName: '淮安市清江浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1502985600000,
          execMoney: '25061',
          state: 1
        },
        {
          caseCode: '(2017)苏0812执3090号',
          execCourtName: '淮安市清江浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1502985600000,
          execMoney: '38806',
          state: 1
        },
        {
          caseCode: '(2017)苏08执78号',
          execCourtName: '淮安市中级人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1490889600000,
          execMoney: '42576',
          state: 1
        },
        {
          caseCode: '(2017)苏08执77号',
          execCourtName: '淮安市中级人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740-9',
          caseCreateTime: 1490889600000,
          execMoney: '42576',
          state: 1
        },
        {
          caseCode: '(2017)苏08执76号',
          execCourtName: '淮安市中级人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740-9',
          caseCreateTime: 1490889600000,
          execMoney: '42576',
          state: 1
        },
        {
          caseCode: '(2017)苏0581执272号',
          execCourtName: '常熟市人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1484150400000,
          execMoney: '263298',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执2348号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1482681600000,
          execMoney: '250016',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执2346号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1482681600000,
          execMoney: '1737968',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执2072号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740-9',
          caseCreateTime: 1479916800000,
          execMoney: '5025',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执恢338号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740-9',
          caseCreateTime: 1476892800000,
          execMoney: '4029200',
          state: 1
        },
        {
          caseCode: '(2016)苏08执406号',
          execCourtName: '淮安市中级人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '12345678-9',
          caseCreateTime: 1474819200000,
          execMoney: '151094',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执1504号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '56261546-7',
          caseCreateTime: 1472054400000,
          execMoney: '35338',
          state: 1
        },
        {
          caseCode: '(2016)鲁02执659号',
          execCourtName: '青岛市中级人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: '69670740－9',
          caseCreateTime: 1471276800000,
          execMoney: '33100000',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执1444号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1471190400000,
          execMoney: '11654208.0',
          state: 1
        },
        {
          caseCode: '(2016)苏0811执1258号',
          execCourtName: '淮安市清浦区人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1469030400000,
          execMoney: '520350',
          state: 1
        },
        {
          caseCode: '(2016)苏08执273号',
          execCourtName: '淮安市中级人民法院',
          pname: '淮安禧徕乐投资发展有限公司',
          partyCardNum: null,
          caseCreateTime: 1465315200000,
          execMoney: '61371224.0',
          state: 1
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setTableHeight()
    })
  },
  methods: {
    numeral(money) {
      return numeralMoney(money)
    },
    formatTime(time) {
      return timestampToTime(time)
    },
    setState(state) {
      return state ? '已执行' : '未执行'
    },
    setTableHeight() {
      this.tableHeight = document.getElementsByClassName(
        'tabs-content'
      )[0].clientHeight
    }
  }
}
</script>
<style lang='stylus' scoped>
.executor
  padding: 0 40px
</style>