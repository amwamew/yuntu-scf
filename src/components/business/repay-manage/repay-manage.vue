/*
 * FileName: 还款管理-还款管理
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
          <el-radio-button :label="1">待分配</el-radio-button>
          <el-radio-button :label="2">已分配</el-radio-button>
        </el-radio-group>
      </div>
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称/借款人"></el-input>
      <div class="inline-block mr10">
        到期日期:
        <date-picker-daterange @dataChange="onChange"
          class="inline-block"></date-picker-daterange>
      </div>
      <el-button class="mr10"
        size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>
      <el-button size="small"
        class="fr"
        type="danger">批量登记</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
      @selection-change="hasSelected"
      style="width: 100%">
      <el-table-column type="selection">
      </el-table-column>
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
            <div v-else-if="item.prop === 'giveAmt'">
              {{numeral(scope.row[item.prop])}}
            </div>
            <div v-else-if="item.prop === 'sendMsg'">
              <my-switch :width="65"
                :value="scope.row[item.prop]"></my-switch>
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
            @click="upLoad(scope.row)"
            type="text"
            icon="icon-distribute"
            size="small">分配审批人员</el-button>
          <el-button v-else
            @click="show(scope.row)"
            type="text"
            icon="icon-batch"
            size="small">批量分配</el-button>
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
import MySwitch from '@/components/common/my-switch/my-switch'
// import { getRepayManage } from '@/api/bussiness/client-approval-task/index'
import repay from '@/assets/data/repay'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral'
export default {
  components: {
    Paging,
    DatePickerDaterange,
    MySwitch
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
          prop: 'controlName',
          label: '借款人'
        },
        {
          prop: 'giveAmt',
          label: '贷款金额'
        },
        {
          prop: 'remainDays',
          label: '剩余天数(天)'
        },
        {
          prop: 'expireDate',
          label: '到期日期'
        },
        {
          prop: 'sendMsg',
          label: '自动发送短信通知'
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
    this._getRepayManage()
  },
  methods: {
    _getRepayManage() {
      this.tableData = repay.data
      this.pageSize = repay.pageSize
      // this.totalCount = res.totalCount
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()
      // getRepayManage().then(res => {
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
    hasSelected(items) {
      //勾选的数据
      console.log('已选择的数据:', items)
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