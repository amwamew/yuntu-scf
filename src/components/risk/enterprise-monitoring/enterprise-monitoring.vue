/*
 * FileName: 核心企业监测
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 4:44:46 pm
 * Author: LiuBing
 */
<template>
  <div>
    <div class="search-area"
      id="search-area">
      <el-select class="mr10"
        v-model="searchData.company"
        size="small"
        placeholder="请选择">
        <el-option v-for="(item, index) in companys"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input class="mr10"
        size="small"
        v-model="searchData.value"
        style="width:180px;"
        placeholder="客户编号/客户名称"></el-input>
      <el-button class="mr10"
        size="small"
        icon="el-icon-search"
        @click.native="search">查询</el-button>

      <el-button size="small"
        class="fr icon-download"
        type="danger">下载列表</el-button>
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
              :class="scope.row[item.prop] == '未通过'?'red':''">
              {{scope.row[item.prop]}}
            </span>
            <span v-else-if="item.prop === 'financial'"
              :class="scope.row[item.prop] == '未通过'?'red':''">
              {{scope.row[item.prop]}}
            </span>
            <span v-else-if="item.prop === 'warn'"
              :class="scope.row[item.prop] !== '正常'?'red':''">
              {{scope.row[item.prop]}}
            </span>
            <div v-else-if="item.prop === 'report'">
              组件待开发
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
          <view-risk-report :data="scope.row"
            :dropData="reportList"
            text="风控报告">
          </view-risk-report>
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
import ViewRiskReport from '@/components/common/view-report/view-risk-report'
import MySwitch from '@/components/common/my-switch/my-switch'
// import MyDialog from '@/components/common/my-dialog/my-dialog'
// import { getEnterpriseMonitoring } from '@/api/risk/risk-control/index'
import riskControl from '@/assets/data/risk-control' //模拟的数据
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    ViewRiskReport,
    MySwitch
    // MyDialog,
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
          prop: 'view',
          label: '准入审查'
        },
        {
          prop: 'creditAmt',
          label: '授信额度(元)'
        },
        {
          prop: 'status',
          label: '不良信息扫描'
        },
        {
          prop: 'financial',
          label: '财务分析'
        },
        {
          prop: 'level',
          label: '信用评级'
        },
        {
          prop: 'checkDate',
          label: '审查日期'
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
        company: '1',
        page: 1
      },
      companys: [
        {
          value: '1',
          label: '华润怡宝饮料(中国)有限公司'
        },
        {
          value: '2',
          label: '河北晨阳漆集团公司'
        },
        {
          value: '3',
          label: '香飘飘食品股份有限公司'
        },
        {
          value: '4',
          label: '红星美凯龙家居集团股份有限公司'
        },
        {
          value: '5',
          label: '山东华宝食品股份有限公司'
        },
        {
          value: '6',
          label: '上海家化联合股份有限公司'
        },
        {
          value: '7',
          label: '南京公用发展股份有限公司'
        },
        {
          value: '8',
          label: '吉林化纤股份有限公司'
        },
        {
          value: '9',
          label: '长沙通程控股股份有限公司'
        }
      ],
      reportList: [
        {
          type: 1,
          label: '企业基本信息'
        },
        {
          type: 2,
          label: '不良信息扫描'
        },
        {
          type: 3,
          label: '企业关联图谱'
        },
        {
          type: 5,
          label: '财务分析'
        },
        {
          type: 6,
          label: '贷后监控'
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
    this._getEnterpriseMonitoring()
  },
  methods: {
    _getEnterpriseMonitoring() {
      this.tableData = riskControl.data
      this.pageSize = riskControl.pageSize
      // this.totalCount = riskControl.totalCount
      this.totalCount = 100 //模拟有100条数据
      this.setTableHeight()

      // getEnterpriseMonitoring().then(res => {
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
    search() {
      //查询搜素
      this.searchData.page = 1
      console.log(this.searchData)
    },
  },
  watch: {
    $route(to, from) {
      this._getEnterpriseMonitoring()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>