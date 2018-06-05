/*
 * FileName: 合同管理-合同维护
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
          <el-radio-button :label="1">已上传</el-radio-button>
          <el-radio-button :label="2">已注册</el-radio-button>
        </el-radio-group>
      </div>
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
            <div v-else-if="scope.row.status == '2' && item.prop === 'reviewerName'">
              <simple-info :text="scope.row[item.prop]"
                :name="scope.row.reviewerName"
                :mobile="scope.row.searcherMobile"
                :department="scope.row.searcherDepartment"></simple-info>
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
          <el-button @click="upLoad(scope.row)"
            type="text"
            icon="icon-upload"
            size="small">上传</el-button>
          <el-button type="text"
            icon="icon-register"
            size="small">注册账号</el-button>
          <el-button type="text"
            size="small">
            <span class="uploads has-upload"
              v-if="scope.row.credit > 0">{{scope.row.credit}}</span>
            <span class="uploads no-upload"
              v-else>{{scope.row.credit}}</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="paging">
      <paging @onChange="pageChange"
        :tota-count="totalCount"
        :page-size="pageSize"
        :total-count="totalCount"></paging>
    </div>
    <my-dialog ref="uploadContract"
      title="合同上传"
      width="50%">
      <upload-contract></upload-contract>
    </my-dialog>
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import DatePickerDaterange from '@/components/common/date-picker/data-picker-daterange'
import SimpleInfo from '@/components/common/simple-info/simple-info'
import MyDialog from '@/components/common/my-dialog/my-dialog'
import UploadContract from '@/components/common/my-dialog/business/upload-contract'
// import { getContractMainte } from '@/api/bussiness/contract-manage/index'
import htwh from '@/assets/data/htwh'
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    DatePickerDaterange,
    SimpleInfo,
    MyDialog,
    UploadContract
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
          prop: 'dealerNO',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'customer',
          label: '客户经理'
        },
        {
          prop: 'c-status',
          label: '客户状态'
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
    this._getContractMainte()
  },
  methods: {
    _getContractMainte() {
      this.tableData = htwh.data
      this.pageSize = htwh.pageSize
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()
      // getContractMainte().then(res => {
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
    hasSelected(items) {
      //勾选的数据
      console.log('已选择的数据:', items)
    },
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    },
    upLoad(item){
      this.$refs.uploadContract.open()
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