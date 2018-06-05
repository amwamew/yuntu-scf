/*
 * FileName: 规则设置
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 11:07:38 am
 * Author: LiuBing
 */

<template>
  <div>
    <div class="search-area"
      id="search-area">
      <el-select v-model="company"
        size="small"
        placeholder="请选择">
        <el-option v-for="(item, index) in companys"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button size="small"
        class="fr"
        type="danger">添加策略集</el-button>
    </div>
    <el-table :data="settingData"
      size="small"
      style="width: 100%">
      <el-table-column label="序号"
        type="index">
      </el-table-column>
      <template v-for="(item,index) in col">
        <el-table-column :prop="item.prop"
          :label="item.label"
          :key="index">
        </el-table-column>
      </template>
      <el-table-column label="操作"
        fixed="right"
        width="320">
        <template slot-scope="scope">
          <el-button type="text"
            icon="icon-view"
            size="small">策略管理</el-button>
          <el-button type="text"
            icon="icon-sign"
            size="small">编辑策略集</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import MyDialog from '@/components/common/my-dialog/my-dialog'
import { getClientApprovalTask } from '@/api/bussiness/client-approval-task/index'
import { calculateElementHeight } from '@/utils/utils'
export default {
  components: {
    MyDialog
  },
  props: {
    col: {
      type: Array,
      default: () => [
        {
          prop: 'strategies',
          label: '策略集/策略'
        }
      ]
    }
  },
  data() {
    return {
      settingData: [
        {
          strategies: '数据加工规则'
        },
        {
          strategies: '客户准入规则'
        },
        {
          strategies: '信用评分模型'
        },
        {
          strategies: '授信额度模型'
        },
        {
          strategies: '风险预警模型'
        }
      ],
      indexData: {}, //当前选择的数据
      company: '1',
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
      ]
    }
  },
  methods: {},
  watch: {
    $route(to, from) {
      // this._getIncreditManageTask()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>