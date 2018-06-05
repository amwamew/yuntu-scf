/*
 * FileName: 价格管理-盯市管理
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
      <div class="inline-block mr10">
        监管机构:
        <el-select v-model="searchData.govment"
          size="small"
          placeholder="请选择监管机构">
          <el-option v-for="item in govment"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
            <span v-if="item.prop === 'warningLevel'"
              class="span-color"
              :class="scope.row.warningLevel == '1'?'span-color-green':'span-color-red'">
              {{setStatus(scope.row[item.prop])}}
            </span>
            <div v-else-if="item.prop === 'amt1' || item.prop === 'amt2' || item.prop === 'amt3'">
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
        width="100">
        <template slot-scope="scope">
          <!-- scope.row -->
          <el-button type="text"
            size="small">预警通知</el-button>
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
import { getMarkManage } from '@/api/bussiness/price-manage/index'
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
          prop: 'regulators',
          label: '监管机构'
        },
        {
          prop: 'amt1',
          label: '上期核定库存价格（元）'
        },
        {
          prop: 'amt2',
          label: '本期核定库存价格（元）'
        },
        {
          prop: 'warningLevel',
          label: '预警级别'
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
        govment: '',
        page: 1
      },
      govment: [
        {
          value: '1',
          label: '中远物流'
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
    this._getMarkManage()
  },
  methods: {
    _getMarkManage() {
      getMarkManage().then(res => {
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
      //设置级别
      return val == '1' ? '正常' : '预警'
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