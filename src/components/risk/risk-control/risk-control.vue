/*
 * FileName: 贷前中后风控
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 2:16:43 pm
 * Author: LiuBing
 */
<template>
  <div>
    <div class="search-area"
      id="search-area">
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称/借款人"></el-input>
      <div class="inline-block mr10">
        提交时间:
        <date-picker-daterange @dataChange="onChange"
          class="inline-block"></date-picker-daterange>
      </div>
      <el-button class="mr10"
        size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>
      
      <el-button size="small"
        class="fr icon-download"
        type="danger">下载列表</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
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
            <div v-if="item.prop === 'conf'">
              <my-switch :value="scope.row[item.prop] == 1 ? true : false"></my-switch>
            </div>
            <span v-else-if="item.prop === 'view'"
              :class="scope.row[item.prop] == '否决'?'red':''">
              {{scope.row[item.prop]}}
            </span>
            <span v-else-if="item.prop === 'financial'"
              :class="scope.row[item.prop] == '未通过'?'red':''">
              {{scope.row[item.prop]}}
            </span>
            <span v-else-if="item.prop === 'warn'"
              :class="scope.row[item.prop] !== '正常'?'red':''">
              {{scope.row[item.prop]}}
            </span>
            <div v-else-if="item.prop === 'report'">
              组件待开发
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
          <view-risk-report :data="scope.row" text="风控报告"></view-risk-report>
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
import MySwitch from '@/components/common/my-switch/my-switch'
// import MyDialog from '@/components/common/my-dialog/my-dialog'
// import { getRiskControl } from '@/api/risk/risk-control/index'
import riskControl from '@/assets/data/risk-control' //模拟的数据
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    ViewRiskReport,
    MySwitch,
    DatePickerDaterange
    // MyDialog,
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'submitDt',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'view',
          label: '准入审查'
        },
        {
          prop: 'creditAmt',
          label: '授信额度(元)'
        },
        {
          prop: 'status',
          label: '不良信息扫描'
        },
        {
          prop: 'business',
          label: '经营评价'
        },
        {
          prop: 'financial',
          label: '财务分析'
        },
        {
          prop: 'level',
          label: '信用评级'
        },
        {
          prop: 'checkDate',
          label: '审查日期'
        }
      ]
    }
  },
  data() {
    return {
      searchData: {
        //搜索数据
        type: this.$route.params.type,
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
    this._getRiskControl()
  },
  methods: {
    _getRiskControl() {
      this.tableData = riskControl.data
      this.pageSize = riskControl.pageSize
      // this.totalCount = riskControl.totalCount
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()

      // getRiskControl().then(res => {
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
      return val == '1' ? '待处理' : '待提交'
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
      this._getRiskControl()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>