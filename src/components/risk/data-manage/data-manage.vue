/*
 * FileName: 数据管理
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 1:48:09 pm
 * Author: LiuBing
 */

<template>
  <div>
    <div class="search-area"
      id="search-area">
      <el-select v-model="searchData.company"
        size="small"
        placeholder="请选择">
        <el-option v-for="(item, index) in companys"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input size="small"
        v-model="searchData.value"
        style="width:180px"
        placeholder="客户编号/客户名称/借款人"></el-input>
      <el-button size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>
      <el-button size="small"
        class="fr"
        type="danger">提交审批</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
      border
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
            <div v-if="item.prop === 'creditSubmit' && scope.row[item.prop] === '已推荐'">
              {{scope.row[item.prop]}}
              <el-button type="primary" size="mini">下载</el-button>
            </div>
            <div v-else-if="item.prop === 'loanData' && scope.row[item.prop] === '0'">
              未上传
            </div>
            <div v-else-if="item.prop === 'loanData' && scope.row[item.prop] === '1'">
              已上传
              <el-button type="primary" size="mini">下载</el-button>
            </div>
            <div v-else-if="item.prop === 'creditData'">
              组件待开发
            </div>
            <div v-else>
              {{scope.row[item.prop]}}
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div id="paging">
      <paging @onChange="pageChange"
        :tota-count="totalCount"
        :page-size="pageSize"
        :total-count="totalCount"></paging>
    </div>
    <!-- <my-dialog ref="dialog"
      :buttons="btns"
      width="400px"
      title="打包下载">
      <upload-report></upload-report>
    </my-dialog> -->
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import MyDialog from '@/components/common/my-dialog/my-dialog'
// import { getDataManage } from '@/api/risk/data-manage/index'
import dataManage from '@/assets/data/data-manage'//模拟的数据
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    MyDialog
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
          prop: 'name',
          label: '法定代表人'
        },
        {
          prop: 'creditSubmit',
          label: '授信推荐'
        },
        {
          prop: 'loanData',
          label: '授信数据'
        },
        {
          prop: 'creditData',
          label: '贷后数据'
        }
      ]
    }
  },
  data() {
    return {
      searchData: {
        //搜索数据
        type: this.$route.params.type,
        company: '1',
        value: '',
        page: 1
      },
      companys: [
        {
          value: '1',
          label: '香飘飘食品股份有限公司'
        }
      ],
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getDataManage()
  },
  mounted() {},
  methods: {
    _getDataManage() {
      this.tableData = dataManage.data
        this.pageSize = dataManage.pageSize
        // this.totalCount = res.totalCount
        this.totalCount = 100 //模拟有100条数据
        this.setTableHeight()


      // getDataManage(this.searchData).then(res => {
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
      return val == '1' ? '已上传' : '未上传'
    },
    hasSelected(items) {
      //勾选的数据
      console.log('已选择的数据:', items)
    },
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    }
  },
  watch: {
    $route(to, from) {
      this._getDataManage()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
