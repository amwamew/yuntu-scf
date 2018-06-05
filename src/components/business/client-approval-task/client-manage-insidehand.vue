/*
 * FileName: 授信审批-审批任务分配
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
          <el-radio-button :label="1">待分配</el-radio-button>
          <el-radio-button :label="2">已分配</el-radio-button>
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
          <el-button v-if="scope.row.status == '1'"
            @click="distribute(scope.row)"
            type="text"
            icon="icon-distribute"
            size="small">分配审批人员</el-button>
          <el-button v-else
            @click="distributeMulite(scope.row)"
            type="text"
            icon="icon-batch"
            size="small">批量分配</el-button>
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
      :title="dialog.title">
      <div class="user-info">
        <el-form :inline="true"
          label-position="right"
          label-width="110px"
          class="demo-form-inline">
          <el-form-item label="借款人：">
            {{dialogDatas.indexData.controlName}}
          </el-form-item>
          <el-form-item label="申请时间：">
            {{dialogDatas.indexData.actualCreditTime}}
          </el-form-item>
          <el-form-item label="身份证号：">
            <!-- {{dialogDatas.indexData.actualCreditTime}} -->
            110203198801032321
          </el-form-item>
          <el-form-item label="客户经理：">
            {{dialogDatas.indexData.searcherName}}
          </el-form-item>
          <el-form-item label="经营机构主体：">
            {{dialogDatas.indexData.pname}}
          </el-form-item>
        </el-form>
      </div>
      <assigning-customer-manager :data="dialogData"
        :datas="dialogDatas"
        :multiple="dialog.multiple"></assigning-customer-manager>
    </my-dialog>
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import DatePickerDaterange from '@/components/common/date-picker/data-picker-daterange'
import SimpleInfo from '@/components/common/simple-info/simple-info'
import MyDialog from '@/components/common/my-dialog/my-dialog'
import AssigningCustomerManager from '@/components/common/my-dialog/business/assigning-customer-manager'
import { getClientManageInsidehand } from '@/api/bussiness/client-approval-task/index'
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    DatePickerDaterange,
    SimpleInfo,
    MyDialog,
    AssigningCustomerManager
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
          prop: 'reviewerName',
          label: '审批人员'
        }
      ]
    }
  },
  data() {
    return {
      //弹窗信息
      dialog: {
        title: '',
        multiple: false
      },
      //弹窗选择的数据
      dialogData: {
        bank: '1',
        manager: ''
      },
      //弹窗内容数据
      dialogDatas: {
        //当前数据
        indexData: {},
        //银行
        banks: [
          {
            value: '1',
            label: '深圳南山支行'
          }
        ],
        manager: [],
        //客户经理
        managers: [
          {
            id: '1',
            name: '马洪', //姓名
            mobile: '13819923849', //手机号
            allocated: '20', //已分配
            followUp: '20' //跟进中
          },
          {
            id: '2',
            name: '陈伟', //姓名
            mobile: '13693256745', //手机号
            allocated: '12', //已分配
            followUp: '13' //跟进中
          },
          {
            id: '3',
            name: '刘全', //姓名
            mobile: '13691111745', //手机号
            allocated: '22', //已分配
            followUp: '23' //跟进中
          }
        ]
      },
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
    this._getClientManageInsidehand()
  },
  methods: {
    _getClientManageInsidehand() {
      getClientManageInsidehand().then(res => {
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
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    },
    onChange(dates) {
      this.searchData.startDate = dates[0]
      this.searchData.endDate = dates[1]
    },
    distribute(item) {
      this.dialogDatas.indexData = item
      this.dialog.title = '分配客户经理'
      this.dialog.multiple = false
      this.$refs.dialog.open()
    },
    distributeMulite(item) {
      this.dialogDatas.indexData = item
      if (!this.dialog.multiple) {
        this.dialogData.manager = []
      }
      this.dialog.title = '批量分配'
      this.dialog.multiple = true
      this.$refs.dialog.open()
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