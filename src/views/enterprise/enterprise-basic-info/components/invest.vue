/*
 * FileName: 对外投资企业
 * Project: yuntu-scf-vue
 * File Created: Sunday, 27th May 2018 4:43:08 pm
 * Author: LiuBing
 */
 <template>
  <div class="invest">
    <el-table :data="myInvest"
      border
      style="width: 100%">
      <template v-for="(item,index) in col">
        <el-table-column :key="index"
          :prop="item.name"
          :width="item.width || ''"
          :label="item.label">
          <template slot-scope="scope">
            {{scope.row[item.prop]}}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
 
 <script>
 import { timestampToTime } from '@/utils/utils'
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    col: {
      type: Array,
      default: () => [
        {
          prop: 'name',
          label: '对外投资企业名称',
          width: '300'
        },
        {
          prop: 'type',
          label: '企业类型',
          width: '100'
        },
        {
          prop: 'legalPersonName',
          label: '企业法人',
          width: '100'
        },
        {
          prop: 'regCapital',
          label: '注册资金'
        },
        {
          prop: 'amount',
          label: '投资额'
        },
        {
          prop: 'percent',
          label: '投资占比'
        },
        {
          prop: 'estiblishTime',
          label: '企业成立时间'
        },
        {
          prop: 'regStatus',
          label: '企业经营状态'
        }
      ]
    }
  },
  data() {
    return {
      myInvest: this.data
    }
  },
  created(){
    this.formatInvest()
  },
  methods: {
    formatInvest() {
      this.myInvest.forEach(item => {
        item.estiblishTime = timestampToTime(item.estiblishTime)
        item.type = item.type === 1 ? '公司' : '个人'
        item.personType = item.personType === 1 ? '公司' : '个人'
        item.amount = item.amount + '万元'
      })
    },
  }
}

</script>
 <style lang='stylus' scoped>
</style>
