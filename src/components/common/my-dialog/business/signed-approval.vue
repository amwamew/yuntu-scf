/*
 * FileName: 签署审批意见
 * Project: yuntu-scf-vue
 * File Created: Sunday, 20th May 2018 10:24:01 am
 * Author: LiuBing
 */
<template>
  <div class="signed-approval">
    <el-form label-position="right"
      label-width="120px">
      <el-form-item label="客户编号：">
        {{data.coreNum}}
      </el-form-item>

      <el-form-item label="客户名称：">
        {{data.pname}}
      </el-form-item>

      <el-form-item label="借款人：">
        {{data.controlName}}
      </el-form-item>

      <el-form-item label="审批结果：">
        <el-radio-group v-if="model"
          v-model="approvalData.result"
          size="small">
          <el-radio label="1">同意</el-radio>
          <el-radio label="0">否决</el-radio>
        </el-radio-group>
        <template v-else>
          {{result()}}
        </template>
      </el-form-item>

      <el-form-item label="授信额度：">
        <el-input v-if="model"
          v-model="approvalData.amt"
          style="width:100%"
          size="small"
          placeholder="请输入授信额度">
          <template slot="append">元</template>
        </el-input>
        <template v-else>
          {{approvalData.amt}}
        </template>
      </el-form-item>

      <el-form-item label="授信起止时间：">
        <el-date-picker v-if="model"
          v-model="dateSelect"
          style="width:100%"
          size="small"
          type="daterange"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          @change="dateChange">
        </el-date-picker>
        <template v-else>
          {{approvalData.startDate}}至{{approvalData.endDate}}
        </template>
      </el-form-item>

      <el-form-item label="期限：">
        <el-input v-if="model"
          v-model="approvalData.term"
          style="width:100%"
          size="small"
          placeholder="请输入期限">
          <template slot="append">月</template>
        </el-input>
        <template v-else>
          {{term()}}
        </template>
      </el-form-item>

      <el-form-item label="还款方式：">
        <el-select v-if="model"
          v-model="approvalData.repayMethod"
          style="width:100%"
          size="small"
          placeholder="请选择还款方式">
          <el-option v-for="item in repayList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <template v-else>
          {{repayMethod()}}
        </template>
      </el-form-item>

      <el-form-item label="还款周期：">
        <el-select v-if="model"
          v-model="approvalData.repayCycle"
          style="width:100%"
          size="small"
          placeholder="请选择还款周期">
          <el-option v-for="item in cycleList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <template v-else>
          {{repayCycle()}}
        </template>
      </el-form-item>

      <el-form-item label="年利率：">
        <el-input v-if="model"
          v-model="approvalData.rate"
          style="width:100%"
          size="small"
          placeholder="请输入年利率">
          <template slot="append">%</template>
        </el-input>
        <template v-else>
          {{rate()}}
        </template>
      </el-form-item>

      <el-form-item label="担保方式：">
        <el-select v-if="model"
          v-model="approvalData.guaranteeMethod"
          style="width:100%"
          size="small"
          placeholder="请选择担保方式">
          <el-option v-for="item in guaranteeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <template v-else>
          {{guaranteeMethod()}}
        </template>
      </el-form-item>

      <el-form-item label="审批意见：">
        <el-input v-if="model"
          v-model="approvalData.suggestion"
          style="width:100%"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请填写审批意见">
        </el-input>
        <template v-else>
          {{approvalData.suggestion}}
        </template>
      </el-form-item>

      <el-form-item label="发送短信通知：">
        <my-switch v-if="model"
          :value="approvalData.sms"
          :width="46"
          activeText="是"
          inactiveText="否"></my-switch>
        <template v-else>
          {{sms()}}
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import MySwitch from '@/components/common/my-switch/my-switch'
export default {
  props: {
    //模式，true为编辑模式，false为查看模式
    model: {
      type: Boolean,
      default: true
    },
    //整条数据
    data: {
      type: Object,
      default: {}
    }
  },
  components: {
    MySwitch
  },
  data() {
    return {
      // approvalData: this.setApprovalData(),
      approvalData: {
        result: '', //审批结果
        amt: '', //授信额度\
        startDate: '', //开始时间
        endDate: '', //结束时间
        term: '', //期限
        repayMethod: '', //还款方式
        repayCycle: '', //还款周期
        rate: '', //年利率
        guaranteeMethod: '', //担保方式
        suggestion: '', //审批意见
        sms: false //是否发送短信
      },
      dateSelect: '', //日期选择
      repayList: [
        //还款方式列表
        {
          value: '1',
          label: '按月付息，到期还本'
        }
      ],
      cycleList: [
        //还款周期列表
        {
          value: '1',
          label: '按月'
        }
      ],
      guaranteeList: [
        //担保方式列表
        {
          value: '1',
          label: '信用无抵押'
        }
      ]
    }
  },
  mounted() {
    this.setApprovalData()
  },
  computed: {},
  methods: {
    result() {
      return this.approvalData.result === '1' ? '同意' : '否决'
    },
    term() {
      return this.approvalData.term + '月'
    },
    rate() {
      return this.approvalData.rate + '%'
    },
    repayMethod() {
      return this._getLabel(this.approvalData.repayMethod, this.repayList)
    },
    repayCycle() {
      return this._getLabel(this.approvalData.repayCycle, this.cycleList)
    },
    guaranteeMethod() {
      return this._getLabel(
        this.approvalData.guaranteeMethod,
        this.guaranteeList
      )
    },
    sms() {
      return this.approvalData.result ? '是' : '否'
    },

    setApprovalData() {
      let approvalData = {
        result: '', //审批结果
        amt: '', //授信额度
        startDate: '', //开始时间
        endDate: '', //结束时间
        term: '', //期限
        repayMethod: '', //还款方式
        repayCycle: '', //还款周期
        rate: '', //年利率
        guaranteeMethod: '', //担保方式
        suggestion: '', //审批意见
        sms: false //是否发送短信
      }
      if (this.data.approvalData) {
        this.approvalData = this.data.approvalData
      } else {
        this.approvalData = approvalData
      }
    },
    dateChange(item) {
      this.approvalData.startDate = item[0]
      this.approvalData.endDate = item[1]
    },
    _getLabel(val, list) {
      var label = ''
      for (let i = 0; i < list.length; i++) {
        if (list[i].value === val) {
          label = list[i].label
        }
      }
      return label
    }
  },
  watch: {
    model(newVal) {
      this.setApprovalData()
    }
  }
}
</script>
<style lang='stylus' scoped>
.signed-approval
  width: 80%
  margin: auto
</style>
