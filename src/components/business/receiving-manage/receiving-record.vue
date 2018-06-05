/*
 * FileName: 接货管理-接货记录
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
        placeholder="客户编号/客户名称/借款人"></el-input>
      <el-button class="mr10"
        size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
      @selection-change="hasSelected"
      style="width: 100%">
      <el-table-column label="序号"
        type="index">
      </el-table-column>
      <template v-for="(item,index) in col">
        <el-table-column :prop="item.prop"
          :label="item.label"
          :key="index">
          <template slot-scope="scope">
            <div v-if="item.prop === 'amt1' || item.prop === 'amt2'">
              {{numeral(scope.row[item.prop])}}
            </div>
            <div v-else>
              {{scope.row[item.prop] || '/'}}
            </div>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="200">
        <template slot-scope="scope">
          <!-- scope.row -->
          <el-button type="text"
            icon="icon-view"
            size="small">查看接货明细</el-button>
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
import { getReceivingRecord } from '@/api/bussiness/receiving-manage/index'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral'
export default {
  components: {
    Paging
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'date',
          label: '日期'
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
          prop: 'aa',
          label: '供货商'
        },
        {
          prop: 'amt1',
          label: '本次发货价值（元）'
        },
        {
          prop: 'amt2',
          label: '累计发货价值（元）'
        },
        {
          prop: 'bb',
          label: '监管机构'
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
      timeSelect: [],
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getReceivingRecord()
  },
  methods: {
    _getReceivingRecord() {
      getReceivingRecord().then(res => {
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
    numeral(money) {
      return numeralMoney(money)
    },
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
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
