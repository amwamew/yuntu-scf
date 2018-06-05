/*
 * FileName: 授权调查-授信调查
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
          <el-radio-button :label="2">待提交</el-radio-button>
        </el-radio-group>
      </div>
      <el-input size="small"
        v-model="searchData.value"
        style="width:180px"
        placeholder="请输入潜在客户名称"></el-input>
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
            <span v-if="item.prop === 'status'"
              class="span-color"
              :class="scope.row.status == '1'?'span-color-red':'span-color-yellow'">
              {{setStatus(scope.row.status)}}
            </span>
            <div v-else-if="item.prop === 'amtPreCredit'">
              {{numeral(scope.row[item.prop])}}
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
          <el-button @click="upLoad(scope.row)"
            type="text"
            icon="icon-upload"
            size="small">上传尽调报告</el-button>
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
    <my-dialog ref="dialog"
      :buttons="btns"
      width="400px"
      title="上传尽调报告">
      <upload-report></upload-report>
    </my-dialog>
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import MyDialog from '@/components/common/my-dialog/my-dialog'
import UploadReport from '@/components/common/my-dialog/business/upload-report'
import ViewRiskReport from '@/components/common/view-report/view-risk-report'
import { getIncreditManageTask } from '@/api/bussiness/incredit-manage-task/incredit-manage-task'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral'
import { upLoadBtns } from '@/assets/js/config'
export default {
  components: {
    Paging,
    MyDialog,
    UploadReport,
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
          prop: 'coreNum',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'conclusion',
          label: '自动审核结论'
        },
        {
          prop: 'rating',
          label: '自动评级'
        },
        {
          prop: 'antiFraud',
          label: '反欺诈'
        },
        {
          prop: 'amtPreCredit',
          label: '额度建议(元)'
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
      btns: upLoadBtns, //上传弹窗按钮
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getIncreditManageTask()
  },
  mounted() {},
  methods: {
    _getIncreditManageTask() {
      getIncreditManageTask(this.searchData).then(res => {
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
      return val == '1' ? '待处理' : '待提交'
    },
    hasSelected(items) {
      //勾选的数据
      console.log('已选择的数据:', items)
    },
    numeral(val) {
      //格式化金额
      return numeralMoney(val)
    },
    upLoad(item) {
      //上传尽调报告
      this.$refs.dialog.open()
      console.log(item)
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
