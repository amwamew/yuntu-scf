/*
 * FileName: 核库-核库
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
              :class="scope.row.warningLevel == '0'?'span-color-green':'span-color-red'">
              {{setStatus(scope.row[item.prop])}}
            </span>
            <div v-else>
              {{scope.row[item.prop]}}
            </div>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="100">
        <template slot-scope="scope">
          <!-- scope.row -->
          <el-button v-if="scope.row.btn == 1" type="text"
            size="small">核库登记</el-button>
          <el-button v-else
            type="text"
            icon="icon-view"
            size="small">查看核库记录</el-button>
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
import { getVerifyWareHouse } from '@/api/bussiness/verify-ware-house/index'
import { calculateElementHeight } from '@/utils/utils'
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
          prop: 'date',
          label: '核库日期'
        },
        {
          prop: 'inventoryDiff',
          label: '库存差异'
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
    this._getVerifyWareHouse()
  },
  methods: {
    _getVerifyWareHouse() {
      getVerifyWareHouse().then(res => {
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
      return val == '0' ? '正常' : '预警'
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