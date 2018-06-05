
/*
 * FileName: 授信审批-审批记录
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
          :key="index">
          <template slot-scope="scope">
            <div v-if="item.prop === 'status'">
              {{setStatus(scope.row.status)}}
            </div>
            <div v-else-if="item.prop === 'loanAmt'">
              {{numeral(scope.row.loanAmt)}}
            </div>
            <div v-else-if="item.prop === 'sms'">
              {{setSms(scope.row.sms)}}
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
  </div>
</template>

<script>
import Paging from '@/components/common/paging/paging'
import { getRecordApproval } from '@/api/bussiness/client-approval-task/index'
import { calculateElementHeight } from '@/utils/utils'
import { numeralMoney } from '@/utils/numeral.js'
export default {
  components: {
    Paging
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'entNum',
          label: '客户编号'
        },
        {
          prop: 'pname',
          label: '客户名称'
        },
        {
          prop: 'searcherName',
          label: '客户经理'
        },
        {
          prop: 'appPerson',
          label: '审批人'
        },
        {
          prop: 'status',
          label: '审批结论'
        },
        {
          prop: 'loanAmt',
          label: '授信额度(元)'
        },
        {
          prop: 'expiringDate',
          label: '额度起始日'
        },
        {
          prop: 'expiringDate',
          label: '额度到期日'
        },
        {
          prop: 'sms',
          label: '短信通知'
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
    this._getRecordApproval()
  },
  methods: {
    _getRecordApproval() {
      getRecordApproval().then(res => {
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
      return val == '1' ? '通过' : '未通过'
    },
    setSms(val) {
      //设置短信通知状态
      return val == '1' ? '已发送' : '未发送'
    },
    numeral(val) {
      //格式化金额
      return numeralMoney(val)
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