/*
 * FileName: 合同管理-合同档案
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
          <!-- <template slot-scope="scope"> -->
            <!-- <span v-if="item.prop === 'status'"
              class="span-color"
              :class="scope.row.status == '1'?'span-color-red':'span-color-green'">
              {{setStatus(scope.row.status)}}
            </span>
            <div v-else-if="scope.row.status == '2' && item.prop === 'reviewerName'">
              <simple-info :text="scope.row[item.prop]"
                :name="scope.row.reviewerName"
                :mobile="scope.row.searcherMobile"
                :department="scope.row.searcherDepartment"></simple-info>
            </div>
            <div v-else>
              {{scope.row[item.prop]}}
            </div> -->
          <!-- </template> -->
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="150">
        <template slot-scope="scope">
          <el-button type="text"
            icon="icon-view"
            size="small">查看已签署合同</el-button>
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
// import { getContractArchive } from '@/api/bussiness/contract-manage/index'
import htda from '@/assets/data/htda'
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
          prop: 'dealerNO',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'legalPerson',
          label: '借款人'
        },
        {
          prop: 'customer',
          label: '客户经理'
        },
        {
          prop: 'creditMoney',
          label: '授信余额(元)'
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
    this._getContractArchive()
  },
  methods: {
    _getContractArchive() {
      console.log(htda)
      this.tableData = htda.data
      this.pageSize = htda.pageSize
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()
      // getContractArchive().then(res => {
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
      this._getIncreditManageTask()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
.uploads
  color: $color-white
  padding: 2px 5px
  line-height: 14px
  border-radius: 3px
.has-upload
  background: $color-green
.no-upload
  background: $color-red
</style>
