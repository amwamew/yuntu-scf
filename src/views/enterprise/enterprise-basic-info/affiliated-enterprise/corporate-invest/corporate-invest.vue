/*
 * FileName: 法人投资任职
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:04:20 pm
 * Author: LiuBing
 */
<template>
  <div class="corporate-invest">
    <el-collapse v-model="actives">
      <el-collapse-item :title="collapseTitle('担任法人的企业',1)"
        name="1">
        <el-table :data="legalEnterprise"
          border
          style="width: 100%">
          <el-table-column type="index"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column prop="name"
            label="企业名称">
          </el-table-column>
          <el-table-column prop="state"
            label="状态">
          </el-table-column>
          <el-table-column prop="regCapital"
            label="注册资本">
          </el-table-column>
          <el-table-column prop="estiblishTime"
            width="120"
            label="成立日期">
          </el-table-column>
        </el-table>
      </el-collapse-item>

      <el-collapse-item :title="collapseTitle('投资的企业',2)"
        name="2">
        <el-table :data="investEnterprise"
          border
          style="width: 100%">
          <el-table-column type="index"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column prop="name"
            label="企业名称">
          </el-table-column>
          <el-table-column prop="state"
            label="状态">
          </el-table-column>
          <el-table-column prop="amount"
            label="认缴出资额">
          </el-table-column>
          <el-table-column prop="percent"
            label="认缴出资比例">
          </el-table-column>
          <el-table-column prop="regCapital"
            label="注册资本">
          </el-table-column>
          <el-table-column prop="estiblishTime"
            width="120"
            label="成立日期">
          </el-table-column>
        </el-table>
      </el-collapse-item>

      <el-collapse-item :title="collapseTitle('任职的企业',3)"
        name="3">
        <el-table :data="joinEnterprise"
          border
          style="width: 100%">
          <el-table-column type="index"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column prop="name"
            label="企业名称">
          </el-table-column>
          <el-table-column prop="state"
            label="状态">
          </el-table-column>
          <el-table-column prop="typeJoin"
            label="担任职位">
          </el-table-column>
          <el-table-column prop="regCapital"
            label="注册资本">
          </el-table-column>
          <el-table-column prop="estiblishTime"
            width="120"
            label="成立日期">
          </el-table-column>
        </el-table>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      actives: ['1', '2', '3'],
      //担任法人的企业
      legalEnterprise: [
        {
          name: '大新华航空有限公司',
          state: '在营（开业）企业',
          regCapital: '600832.40万元',
          estiblishTime: '2004-07-12'
        },
        {
          name: '洋浦泰恒实业投资有限公司',
          state: '吊销企业',
          regCapital: '10000.00万元',
          estiblishTime: '1999-12-13'
        },
        {
          name: '金鼎俱乐部有限公司',
          state: '在营（开业）企业',
          regCapital: '5000.00万元',
          estiblishTime: '2005-06-30'
        },
        {
          name: '海航集团有限公司',
          state: '存续（在营，开业，在册）',
          regCapital: '6000000.00万元',
          estiblishTime: '1999-04-16'
        }
      ],
      //投资的企业
      investEnterprise: [
        {
          name: '洋浦泰恒实业投资有限公司',
          state: '吊销企业',
          amount: '5000.00万元',
          percent: '50.00%',
          regCapital: '10000.00万元',
          estiblishTime: '1999-12-13'
        },
        {
          name: '三亚祥泰实业投资有限公司',
          state: '吊销企业',
          amount: '5000.00万元',
          percent: '50.00%',
          regCapital: '10000.00万元',
          estiblishTime: '2000-01-12'
        }
      ],
      //任职的企业
      joinEnterprise: [
        {
          name: '大新华航空有限公司',
          state: '在营（开业）企业',
          typeJoin: ['负责人'],
          regCapital: '600832.40万元',
          estiblishTime: '2004-07-12'
        },
        {
          name: '洋浦泰恒实业投资有限公司',
          state: '吊销企业',
          typeJoin: ['负责人'],
          regCapital: '10000.00万元',
          estiblishTime: '1999-12-13'
        },
        {
          name: '金鼎俱乐部有限公司',
          state: '在营（开业）企业',
          typeJoin: ['负责人'],
          regCapital: '5000.00万元',
          estiblishTime: '2005-06-30'
        },
        {
          name: '三亚祥泰实业投资有限公司',
          state: '吊销企业',
          typeJoin: ['副董事长'],
          regCapital: '10000.00万元',
          estiblishTime: '2000-01-12'
        },
        {
          name: '海南星辰旅游发展有限公司',
          state: '吊销企业',
          typeJoin: ['董事'],
          regCapital: '1000.00万元',
          estiblishTime: '1993-12-31'
        },
        {
          name: '海南省航空旅游服务总公司',
          state: '吊销企业',
          typeJoin: ['董事长'],
          regCapital: '450.00万元',
          estiblishTime: '1991-09-07'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['enterpriseBasicInfo'])
  },
  methods: {
    collapseTitle(text, name) {
      const legalPersonName = this.enterpriseBasicInfo.legalPersonName
      let length = ''
      switch (name) {
        case 1:
          length = this.legalEnterprise.length
          break
        case 2:
          length = this.investEnterprise.length
          break
        case 3:
          length = this.joinEnterprise.length
          break
      }
      return `(${legalPersonName})${text}(${length})`
    },
  }
}
</script>

<style lang="stylus" scoped>
</style>