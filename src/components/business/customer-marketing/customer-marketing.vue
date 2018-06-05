/*
 * FileName: 客户营销
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */
<template>
  <div>
    <div class="search-area"
      id="search-area">
      <el-input v-model="name"
        size="small"
        style="width:180px;"
        placeholder="请输入潜在客户名称"></el-input>
      <el-button icon="el-icon-search"
        size="small"
        @click="search">查询</el-button>
    </div>
    <el-table :data="tableData"
      size="small"
      :height="tableHeight"
      border
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
              <my-switch :width="65"
                :value="isCheck(scope.row.status)"></my-switch>
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
          <el-button @click="handleClick(scope.row)"
            type="text"
            icon="icon-download"
            size="small">下载客户推荐书</el-button>
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
import { getCustomerMarketing } from '@/api/bussiness/customer-marketing/customer-marketing'
import Paging from '@/components/common/paging/paging'
import MySwitch from '@/components/common/my-switch/my-switch'
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    Paging,
    MySwitch
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'name',
          label: '潜在客户名称'
        },
        {
          prop: 'lxr',
          label: '联系人'
        },
        {
          prop: 'tel',
          label: '手机号码'
        },
        {
          prop: 'source',
          label: '客户来源'
        },
        {
          prop: 'status',
          label: '短信通知'
        }
      ]
    }
  },
  data() {
    return {
      type: this.$route.params.type,
      name: '',
      tableHeight: 0,
      tableData: [],
      searchData: {
        value: '',
        type: this.$route.params.type,
        page: 1
      },
      pageSize: 0,
      totalCount: 0
    }
  },
  created() {
    this._getCustomerMarketing()
  },
  mounted() {},
  methods: {
    _getCustomerMarketing() {
      getCustomerMarketing(this.searchData).then(res => {
        this.tableData = res.data
        this.pageSize = res.pageSize
        // this.totalCount = res.totalCount
        this.totalCount = 100 //模拟的100页
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
      console.log(pageIndex)
    },
    isCheck(val) {
      return val == '1' ? true : false
    },
    search() {
      this.searchData.page = 1
      console.log(this.searchData)
    }
  },
  watch: {
    $route(to, from) {
      this._getCustomerMarketing()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
