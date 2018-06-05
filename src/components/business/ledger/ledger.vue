/*
 * FileName: 台帐-台帐
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div>
    <div class="search-area"
      id="search-area">
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称"></el-input>
      <el-button class="mr10"
        size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
      style="width: 100%">
      <el-table-column label="序号"
        type="index">
      </el-table-column>
      <el-table-column label="基本信息" align="center">
        <template v-for="(item,index) in normalInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else-if="item.prop === 'impawnRate' || item.prop === 'marginRatio' || item.prop === 'loanRate'">
                {{scope.row[item.prop]}}%
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="放款" align="center">
        <template v-for="(item,index) in loanInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="入库出质" align="center">
        <template v-for="(item,index) in putInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="提货" align="center">
        <template v-for="(item,index) in goodsInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="库存" align="center">
        <template v-for="(item,index) in stockInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="调价信息" align="center">
        <template v-for="(item,index) in modifyInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="应收账款转让" align="center">
        <template v-for="(item,index) in receivableInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

      <el-table-column label="应收账款回购" align="center">
        <template v-for="(item,index) in backInfo">
          <el-table-column :prop="item.prop"
            :label="item.label"
            :key="index">
            <template slot-scope="scope" align="center">
              <div v-if="needNumeral(item.prop)">
                {{numeral(scope.row[item.prop])}}
              </div>
              <div v-else>
                {{scope.row[item.prop]}}
              </div>
            </template>
          </el-table-column>
        </template>
      </el-table-column>

    </el-table>
    <div id="paging">
      <paging @onChange="pageChange"
        :tota-count="totalCount"
        :page-size="pageSize"
        :total-count="totalCount"></paging>
    </div>
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import { getLedger } from '@/api/bussiness/ledger/index'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral'
export default {
  components: {
    Paging
  },
  props: {
    //基本信息
    normalInfo: {
      type: Array,
      default: () => [
        {
          prop: 'contractNo',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'coreEntName',
          label: '核心企业名称'
        },
        {
          prop: 'creditLine',
          label: '授信额度'
        },
        {
          prop: 'creditBeginTime',
          label: '额度起始日'
        },
        {
          prop: 'creditEndTime',
          label: '额度到期日'
        },
        {
          prop: 'operationMode',
          label: '操作方式'
        },
        {
          prop: 'impawnRate',
          label: '质押率'
        },
        {
          prop: 'marginRatio',
          label: '保证金比例'
        },
        {
          prop: 'loanRate',
          label: '贷款利率'
        },
        {
          prop: 'manager',
          label: '客户经理姓名'
        },
        {
          prop: 'institutions',
          label: '经营机构'
        }
      ]
    },
    //放款信息
    loanInfo: {
      type: Array,
      default: () => [
        {
          prop: 'loanDate',
          label: '放款日期'
        },
        {
          prop: 'loanEndDate',
          label: '借款到期日'
        },
        {
          prop: 'redeemGoodsDate',
          label: '赎货期'
        },
        {
          prop: 'creditAmt',
          label: '授信金额'
        },
        {
          prop: 'contractNo',
          label: '合同号'
        },
        {
          prop: 'initialMargin',
          label: '初始保证金'
        },
        {
          prop: 'account',
          label: '账号'
        },
        {
          prop: 'additionalMargin',
          label: '追加保证金'
        },
        {
          prop: 'postingDate',
          label: '入账时间'
        },
        {
          prop: 'riskExposure',
          label: '风险敞口'
        }
      ]
    },
    //入库出质
    putInfo: {
      type: Array,
      default: () => [
        {
          prop: 'orderNumber',
          label: '仓单/货单号'
        },
        {
          prop: 'storageShortName',
          label: '仓储方简称'
        },
        {
          prop: 'productName',
          label: '品名'
        },
        {
          prop: 'quantity',
          label: '数量'
        },
        {
          prop: 'rkUnitPrice',
          label: '单价'
        },
        {
          prop: 'gross',
          label: '总值'
        },
        {
          prop: 'entryTime',
          label: '入库时间'
        }
      ]
    },
    //提货
    goodsInfo: {
      type: Array,
      default: () => [
        {
          prop: 'goodsName',
          label: '提货名称'
        },
        {
          prop: 'goodsQuantity',
          label: '提货数量'
        },
        {
          prop: 'thUnitPrice',
          label: '单价'
        },
        {
          prop: 'goodsValue',
          label: '提货价值'
        },
        {
          prop: 'deliveryTime',
          label: '出库时间'
        },
        {
          prop: 'value1',
          label: '可提价值'
        },
        {
          prop: 'operator',
          label: '经办人'
        }
      ]
    },
    //库存
    stockInfo: {
      type: Array,
      default: () => [
        {
          prop: 'kcProcutName',
          label: '库存品名'
        },
        {
          prop: 'kcQuantity',
          label: '库存数量'
        },
        {
          prop: 'ckValue',
          label: '库存价值'
        }
      ]
    },
    //调价信息
    modifyInfo: {
      type: Array,
      default: () => [
        {
          prop: 'subject',
          label: '价格'
        },
        {
          prop: 'adjustPriceTime',
          label: '调价时间'
        }
      ]
    },
    //应收账款转让
    receivableInfo: {
      type: Array,
      default: () => [
        {
          prop: 'subject',
          label: '融资标的'
        },
        {
          prop: 'subjectAmt',
          label: '标的金额'
        },
        {
          prop: 'dueDate1',
          label: '到期日期'
        }
      ]
    },
    //应收账款回购
    backInfo: {
      type: Array,
      default: () => [
        {
          prop: 'dueDate2',
          label: '到期日期'
        },
        {
          prop: 'repaymentCapital',
          label: '应还本金'
        },
        {
          prop: 'interest',
          label: '尚欠利息'
        },
        {
          prop: 'repurchaseAmt',
          label: '回购金额'
        }
      ]
    }
  },
  data() {
    return {
      searchData: {
        //搜索数据
        type: this.$route.params.type,
        status: 0,
        value: '',
        startDate: '',
        endDate: '',
        page: 1
      },
      timeSelect: [],
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getLedger()
  },
  methods: {
    _getLedger() {
      getLedger().then(res => {
        this.tableData = res.data
        this.pageSize = res.pageSize
        this.totalCount = res.totalCount
        // this.totalCount = 100 //模拟有100条数据
        this.setTableHeight()
      })
    },
    setTableHeight() {
      this.$nextTick(() => {
        this.tableHeight = calculateElementHeight(
          ['header', 'footer', 'paging', 'breadCrumb', 'search-area'],
          30
        )
      })
    },
    pageChange(pageIndex) {
      this.searchData.page = pageIndex
    },
    numeral(money) {
      return numeralMoney(money)
    },
    needNumeral(val) {
      const arr = [
        'creditLine',
        'creditAmt',
        'initialMargin',
        'additionalMargin',
        'quantity',
        'rkUnitPrice',
        'gross',
        'goodsQuantity',
        'goodsValue',
        'kcQuantity',
        'ckValue',
        'price',
        'subjectAmt',
        'repaymentCapital',
        'interest',
        'repurchaseAmt'
      ]
      return arr.includes(val)
    },
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    },
    onChange(dates) {
      this.searchData.startDate = dates[0]
      this.searchData.endDate = dates[1]
    }
  },
  watch: {
    $route(to, from) {
      this._getIncreditManageTask()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>