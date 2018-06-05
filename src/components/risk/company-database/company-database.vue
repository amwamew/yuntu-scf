/*
 * FileName: 上市公司数据库
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 4:58:25 pm
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
      <template v-for="(item,index) in col">
        <el-table-column :prop="item.prop"
          :label="item.label"
          :width="item.prop === 'pname' ? '350':'auto'"
          :key="index">
          <!-- <template slot-scope="scope">
            <div v-if="item.prop === 'pname'" style="width:350px">
              {{scope.row[item.prop]}}
            </div>
            <div v-else>
              {{scope.row[item.prop]}}
            </div>
          </template> -->
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="200">
        <template slot-scope="scope">
          <view-risk-report :data="scope.row"
            :dropData="reportList"
            text="详情">
          </view-risk-report>
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
import MySwitch from '@/components/common/my-switch/my-switch'
// import MyDialog from '@/components/common/my-dialog/my-dialog'
// import { getCompanyDatabase } from '@/api/risk/company-database/index'
import companyDatabase from '@/assets/data/company-database' //模拟的数据
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    ViewRiskReport,
    MySwitch
    // MyDialog,
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'name',
          label: '股票名称'
        },
        {
          prop: 'submitDt',
          label: '股票代码'
        },
        {
          prop: 'pname',
          label: '公司名称'
        },
        {
          prop: 'view',
          label: '交易所名称'
        },
        {
          prop: 'creditApprove',
          label: '上市日期'
        },
        {
          prop: 'creditAmt',
          label: '注册地址'
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
        page: 1
      },
      reportList: [
        {
          type: 1,
          label: '企业基本信息'
        },
        {
          type: 7,
          label: '上市公告'
        },
        {
          type: 5,
          label: '财务分析'
        }
      ],
      timeSelect: [],
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getCompanyDatabase()
  },
  methods: {
    _getCompanyDatabase() {
      this.tableData = companyDatabase.data
      this.pageSize = companyDatabase.pageSize
      // this.totalCount = companyDatabase.totalCount
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()

      // getCompanyDatabase().then(res => {
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
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    }
  },
  watch: {
    $route(to, from) {
      this._getCompanyDatabase()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>