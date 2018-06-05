/*
 * FileName: 放款管理-放款登记
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div>
    <div class="search-area"
      id="search-area">
      <div class="inline-block mr10">
        处理状态:
        <el-radio-group v-model="searchData.status"
          size="small">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">未处理</el-radio-button>
          <el-radio-button :label="2">已放款</el-radio-button>
          <el-radio-button :label="3">已否决</el-radio-button>
        </el-radio-group>
      </div>
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称/借款人"></el-input>
      <div class="inline-block mr10">
        申请时间:
        <date-picker-daterange @dataChange="onChange"
          class="inline-block"></date-picker-daterange>
      </div>
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
      <template v-for="(item,index) in col">
        <el-table-column :prop="item.prop"
          :label="item.label"
          :key="index">
          <template slot-scope="scope">
            <span v-if="item.prop === 'status'"
              class="span-color"
              :class="scope.row.status == '1'?'span-color-red':'span-color-yellow'">
              {{setStatus(scope.row[item.prop])}}
            </span>
            <div v-else-if="item.prop === 'subjectAmt' || item.prop === 'avaAmt' || item.prop === 'creditAmt' ">
              {{numeral(scope.row[item.prop])}}
            </div>
            <div v-else-if="item.prop === 'ratio'">
              {{scope.row[item.prop]}}%
            </div>
            <div v-else>
              {{scope.row[item.prop]}}
            </div>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="300">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status == '1'"
            type="text"
            icon="icon-sign"
            size="small">签署审批意见</el-button>
          <el-button v-else
            type="text"
            icon="icon-view"
            size="small">查看审批意见</el-button>
          <el-button type="text"
            icon="icon-view"
            size="small">查看提款申请</el-button>
          <view-risk-report :data="scope.row"></view-risk-report>
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
import DatePickerDaterange from '@/components/common/date-picker/data-picker-daterange'
import ViewRiskReport from '@/components/common/view-report/view-risk-report'
import { getLoanRegister } from '@/api/bussiness/lending-manage/index'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral.js'
export default {
  components: {
    Paging,
    DatePickerDaterange,
    ViewRiskReport
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'status',
          label: '处理状态'
        },
        {
          prop: 'dealerNO',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'subject',
          label: '融资标的'
        },
        {
          prop: 'subjectAmt',
          label: '标的金额(元)'
        },
        {
          prop: 'avaAmt',
          label: '申请金额(元)'
        },
        {
          prop: 'ratio',
          label: '融资比例'
        },
        {
          prop: 'appTime',
          label: '申请时间'
        },
        {
          prop: 'creditAmt',
          label: '可用额度(元)'
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
    this._getLoanRegister()
  },
  methods: {
    _getLoanRegister() {
      getLoanRegister().then(res => {
        this.tableData = res.data
        this.pageSize = res.pageSize
        // this.totalCount = res.totalCount
        this.totalCount = 100 //模拟有100条数据
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
    setStatus(val) {
      //设置处理状态
      return val == '1' ? '未处理' : '待放款'
    },
    numeral(val) {
      //格式化金额
      return numeralMoney(val)
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
