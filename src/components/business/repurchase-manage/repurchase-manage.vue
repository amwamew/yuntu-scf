/*
 * FileName: 回购管理-回购管理
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div>
    <div class="search-area"
      id="search-area">
      <div class="inline-block mr10">
        还款状态:
        <el-radio-group v-model="searchData.status"
          size="small">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">已还款</el-radio-button>
          <el-radio-button :label="2">未还款</el-radio-button>
        </el-radio-group>
      </div>
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称"></el-input>
      <div class="inline-block mr10">
        到期日期:
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
      <!-- <el-table-column type="selection">
      </el-table-column> -->
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
              :class="scope.row.status == '1'?'span-color-red':'span-color-green'">
              {{setStatus(scope.row.status)}}
            </span>
            <div v-else-if="item.prop === 'giveAmt' || item.prop === 'overdueBalance'">
              {{numeral(scope.row[item.prop])}}
            </div>
            <div v-else>
              {{scope.row[item.prop]}}
            </div>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status == '1'"
            type="text"
            size="small">发送回购通知</el-button>
          <el-button v-else
            @click="show(scope.row)"
            type="text"
            icon="icon-view"
            size="small">查看回购通知</el-button>
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
// import { getRepurchaseManage } from '@/api/bussiness/repurchase-manage/index'
import repurchase from '@/assets/data/repurchase'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral'
export default {
  components: {
    Paging,
    DatePickerDaterange
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'status',
          label: '还款状态'
        },
        {
          prop: 'entId',
          label: '客户编号'
        },
        {
          prop: 'entName',
          label: '客户名称'
        },
        {
          prop: 'giveAmt',
          label: '贷款余额'
        },
        {
          prop: 'expireDate',
          label: '到期日期'
        },
        {
          prop: 'overdueBalance',
          label: '逾期余额（元）'
        },
        {
          prop: 'remainDays',
          label: '逾期天数(天)'
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
    this._getRepurchaseManage()
  },
  methods: {
    _getRepurchaseManage() {
      this.tableData = repurchase.data
      this.pageSize = repurchase.pageSize
      // this.totalCount = res.totalCount
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()
      // getRepurchaseManage().then(res => {
      //   this.tableData = res.data
      //   this.pageSize = res.pageSize
      //   // this.totalCount = res.totalCount
      //   this.totalCount = 100 //模拟有100条数据
      //   this.setTableHeight()
      // })
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
      return val == '1' ? '未还款' : '已还款'
    },
    numeral(money) {
      return numeralMoney(money)
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