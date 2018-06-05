
/*
 * FileName: 授信审批-授信审批
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
          <el-radio-button :label="1">待处理</el-radio-button>
          <el-radio-button :label="2">已分配</el-radio-button>
          <el-radio-button :label="3">已否决</el-radio-button>
        </el-radio-group>
      </div>
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px"
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
        class="fr"
        type="danger">批量登记审批结果</el-button>
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
        width="320">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status == '1'"
            @click="sign(scope.row)"
            type="text"
            icon="icon-sign"
            size="small">签署审批意见</el-button>
          <el-button v-else
            @click="viewApproval(scope.row)"
            type="text"
            icon="icon-view"
            size="small">查看审批意见</el-button>
          <el-button type="text"
            @click="viewReport(scope.row)"
            icon="icon-view"
            size="small">查看尽调报告</el-button>
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
    <my-dialog ref="signedApproval"
      :title="dialog.title"
      width="30%"
      @onClick="onClickSigned">
      <signed-approval ref="approval"
        :data="indexData"
        :model="dialog.model"></signed-approval>
    </my-dialog>
    <my-dialog ref="viewApprovalReport"
      title="查看尽调报告"
      width="30%">
      <view-approval-report></view-approval-report>
    </my-dialog>
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import DatePickerDaterange from '@/components/common/date-picker/data-picker-daterange'
import SimpleInfo from '@/components/common/simple-info/simple-info'
import ViewRiskReport from '@/components/common/view-report/view-risk-report'
import MyDialog from '@/components/common/my-dialog/my-dialog'
import SignedApproval from '@/components/common/my-dialog/business/signed-approval'
import ViewApprovalReport from '@/components/common/my-dialog/business/view-approval-report'
import { getClientApprovalTask } from '@/api/bussiness/client-approval-task/index'
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    DatePickerDaterange,
    SimpleInfo,
    ViewRiskReport,
    MyDialog,
    SignedApproval,
    ViewApprovalReport
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
          prop: 'controlName',
          label: '借款人'
        },
        {
          prop: 'searcherName',
          label: '客户经理'
        },
        {
          prop: 'actualCreditTime',
          label: '提交审批时间'
        },
        {
          prop: 'reviewerSubmitTime',
          label: '分配时间'
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
      dialog: {
        title: '签署审批意见',
        model: true
      },
      indexData: {}, //当前选择的数据
      timeSelect: [],
      tableHeight: 0, //表格高度
      tableData: [], //表格数据
      pageSize: 0, //每页条目个数
      totalCount: 0 //总数据
    }
  },
  created() {
    this._getClientApprovalTask()
  },
  methods: {
    _getClientApprovalTask() {
      getClientApprovalTask().then(res => {
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
    //设置处理状态
    setStatus(val) {
      return val == '1' ? '待处理' : '已审批'
    },
    //勾选的数据
    hasSelected(items) {
      console.log('已选择的数据:', items)
    },
    //签署审批意见
    sign(item) {
      console.log(item)
      this.indexData = item
      this.dialog.model = true
      this.$refs.signedApproval.open()
    },
    //查看审批意见
    viewApproval(item) {
      //模拟的审批意见
      let newItem = item
      newItem.approvalData = {
        result: '1', //审批结果
        amt: '10000', //授信额度\
        startDate: '2018-5-20', //开始时间
        endDate: '2018-10-01', //结束时间
        term: '3', //期限
        repayMethod: '1', //还款方式
        repayCycle: '1', //还款周期
        rate: '1', //年利率
        guaranteeMethod: '1', //担保方式
        suggestion: '通过审批', //审批意见
        sms: true //是否发送短信
      }
      this.indexData = newItem
      this.dialog.model = false
      this.$refs.signedApproval.open()
    },
    //查看尽调报告
    viewReport(item) {
      this.$refs.viewApprovalReport.open()
    },
    //查询搜素
    search() {
      this.searchData.page = 1
      console.log(this.searchData)
    },
    onChange(dates) {
      this.searchData.startDate = dates[0]
      this.searchData.endDate = dates[1]
    },
    //确定
    onClickSigned(data, index) {
      console.log(this.$refs.approval)
      if (index === 1 && this.dialog.model) {
        console.log(this.$refs.approval.approvalData)
      }
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
