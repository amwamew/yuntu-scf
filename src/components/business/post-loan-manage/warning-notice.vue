/*
 * FileName: 贷后管理-预警通知
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div>
    <div class="search-area"
      id="search-area">
      <div class="inline-block">
        处理状态
        <el-radio-group v-model="searchData.status"
          size="small">
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="1">待处理</el-radio-button>
          <el-radio-button :label="2">已处理</el-radio-button>
          <el-radio-button :label="3">正常</el-radio-button>
          <el-radio-button :label="4">停止</el-radio-button>
        </el-radio-group>
      </div>
      <el-input size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称/借款人"></el-input>
      <el-button size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
      border
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
            <div v-if="item.prop === 'status'">
              {{setStatus(scope.row.status)}}
            </div>
            <div v-else-if="item.prop === 'sysLevel'">
              {{setWaring(scope.row[item.prop])}}
            </div>
            <div v-else-if="item.prop === 'amt'">
              {{numeral(scope.row[item.prop])}}
            </div>
            <!-- 无风险监测字段，所以用了个isOpen来替代格式化数据 -->
            <div v-else-if="item.prop === 'isOpen'">
              风险监测组件(待开发)
            </div>
            <div v-else>
              {{scope.row[item.prop]}}
            </div>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="250">
        <template slot-scope="scope">
          <el-button type="text"
            icon="icon-notice2"
            v-if="scope.row.status == '1'"
            size="small">贷后检查通知</el-button>
          <el-button type="text"
            v-if="scope.row.status == '2'"
            icon="icon-view"
            size="small">查看通知</el-button>
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
import ViewRiskReport from '@/components/common/view-report/view-risk-report'
import { getWarningNotice } from '@/api/bussiness/post-loan-manage/index'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral'
export default {
  components: {
    Paging,
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
          prop: 'dealer_no',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'manager',
          label: '客户经理'
        },
        {
          prop: 'amt',
          label: '借款余额(元)'
        },
        {
          prop: 'dueDate',
          label: '到期日期'
        },
        {
          prop: 'sysLevel',
          label: '系统预警'
        },
        {
          prop: 'isOpen',
          label: '风险监测'
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
        page: 1
      },
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getWarningNotice()
  },
  mounted() {},
  methods: {
    _getWarningNotice() {
      getWarningNotice(this.searchData).then(res => {
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
      var status = ''
      switch (val) {
        case 1:
          status = '待分发'
          break
        case 2:
          status = '正常'
          break
        case 3:
          status = '停止'
          break
      }
      return status
    },
    setWaring(val) {
      //设置处理状态
      var status = ''
      switch (val) {
        case 0:
          status = '正常'
          break
        case 1:
          status = '一级预警'
          break
        case 2:
          status = '二级预警'
          break
        case 3:
          status = '停止'
          break
      }
      return status
    },
    numeral(val) {
      //格式化金额
      return numeralMoney(val)
    },
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    }
  },
  watch: {
    $route(to, from) {
      this._getWarningNotice()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>