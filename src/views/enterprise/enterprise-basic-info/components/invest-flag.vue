/*
 * FileName: 任职
 * Project: yuntu-scf-vue
 * File Created: Monday, 28th May 2018 1:38:52 pm
 * Author: LiuBing
 */
<template>
  <div class="invest-flag">
    <div class="flag-items">
      <div class="item"
        v-for="(item,index) in data"
        :key="index">
        <div class="item-title">
          <span class="flag">{{ item.name }}</span>
          <span class="title">{{ item.title }}</span>
          <span class="detail"
            @click="showDetail(item)">详情</span>
        </div>
        <ul>
          <li>
            <div class="item-li">
              担任法人的企业({{getNum('legalEnterprise',item)}})家)
            </div>
          </li>
          <li>
            <div class="item-li">
              投资企业({{getNum('investEnterprise',item)}}家)
            </div>
          </li>
          <li>
            <div class="item-li">
              任职企业({{getNum('joinEnterprise',item)}}家)
            </div>
          </li>
        </ul>
      </div>
    </div>
    <my-dialog ref="detail" class="flag-items-dialog"
      :title="currentData.dialogTitle">
      <div class="detail-info">
        <div class="enterprise-name">
          主体公司名称:
        </div>
        <el-collapse v-model="actives"
          class="no-padding-collapse">

          <el-collapse-item :title="collapseTitle('担任法人的企业',1)"
            name="1">
            <table class="my-table"
              v-if="currentData && currentData.legalEnterprise && currentData.legalEnterprise.length">
              <tbody>
                <template v-for="(item,index) in currentData.legalEnterprise">
                  <tr>
                    <td width="20"
                      align="center"
                      rowspan="2"
                      colspan="1">{{ index + 1 }}</td>
                    <td>企业名称：
                      <dropdown-menu :text="item.name"
                        :menus="dropdownMenus"
                        @hasClick="onClick">
                      </dropdown-menu>
                    </td>
                    <td>状态：{{ item.state }}</td>
                  </tr>
                  <tr>
                    <td>注册资金：{{ item.regCapital }}</td>
                    <td>成立日期：{{ item.estiblishTime }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
            <no-result v-else></no-result>
          </el-collapse-item>

          <el-collapse-item :title="collapseTitle('投资的企业',2)"
            name="2">
            <table class="my-table"
              v-if="currentData && currentData.investEnterprise && currentData.investEnterprise.length">
              <tbody>
                <template v-for="(item,index) in currentData.investEnterprise">
                  <tr>
                    <td width="20"
                      align="center"
                      rowspan="3"
                      colspan="1">{{ index + 1 }}</td>
                    <td>企业名称：
                      <dropdown-menu :text="item.name"
                        :menus="dropdownMenus"
                        @hasClick="onClick">
                      </dropdown-menu>
                    </td>
                    <td>状态：{{ item.state }}</td>
                  </tr>
                  <tr>
                    <td>认缴出资额：{{ item.amount }}</td>
                    <td>出资比例：{{ item.percent }}</td>
                  </tr>
                  <tr>
                    <td>注册资金：{{ item.regCapital }}</td>
                    <td>成立日期：{{ item.estiblishTime }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
            <no-result v-else></no-result>
          </el-collapse-item>

          <el-collapse-item :title="collapseTitle('任职的企业（',3)"
            name="3">
            <table class="my-table"
              v-if="currentData && currentData.joinEnterprise && currentData.joinEnterprise.length">
              <tbody>
                <template v-for="(item,index) in currentData.joinEnterprise">
                  <tr>
                    <td width="20"
                      align="center"
                      rowspan="3"
                      colspan="1">{{ index + 1 }}</td>
                    <td>企业名称：
                      <dropdown-menu :text="item.name"
                        :menus="dropdownMenus"
                        @hasClick="onClick">
                      </dropdown-menu>
                    </td>
                    <td>状态：{{ item.state }}</td>
                  </tr>
                  <tr>
                    <td>担任职位：{{ setJoin(item.typeJoin) }}</td>
                    <td>注册资金：{{ item.regCapital }}</td>
                  </tr>
                  <tr>
                    <td rowspan="1"
                      colspan="2">成立日期：{{ item.estiblishTime }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
            <no-result v-else></no-result>
          </el-collapse-item>

        </el-collapse>
      </div>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from '@/components/common/my-dialog/my-dialog'
import NoResult from '@/components/common/no-result/no-result'
import DropdownMenu from '@/components/common/dropdown-menu/dropdown-menu'
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    dropdownMenus: {
      type: Array,
      default: () => [
        {
          id: 1,
          name: '反诈骗',
          class: 'menu-img menu-1'
        },
        {
          id: 2,
          name: '关联图',
          class: 'menu-img menu-2'
        },
        {
          id: 3,
          name: '经营分析',
          class: 'menu-img menu-3'
        },
        {
          id: 4,
          name: '智能监控',
          class: 'menu-img menu-4'
        },
        {
          id: 5,
          name: '信息报告',
          class: 'menu-img menu-5'
        },
        {
          id: 6,
          name: '债券分析',
          class: 'menu-img menu-6'
        },
        {
          id: 7,
          name: '经营核验',
          class: 'menu-img menu-7'
        }
      ]
    }
  },
  components: {
    MyDialog,
    NoResult,
    DropdownMenu
  },
  data() {
    return {
      actives: ['1', '2', '3'],
      currentData: {}
    }
  },
  methods: {
    onClick(item) {
      console.log('item', item)
    },
    setJoin(arr) {
      if (!arr || !arr.length) {
        return ''
      } else {
        return arr.join(',')
      }
    },
    getNum(name, item) {
      if (!item[name] || !item[name].length) {
        return 0
      } else {
        return item[name].length
      }
    },
    showDetail(item) {
      const typeJoin = this.setJoin(item.typeJoin)
      this.currentData = item
      this.dialogTitle = `${item.name}(${typeJoin})`
      this.$refs.detail.open()
    },
    collapseTitle(text, name) {
      let length = ''
      switch (name) {
        case 1:
          length = this.getNum('legalEnterprise', this.currentData)
          break
        case 2:
          length = this.getNum('joinEnterprise', this.currentData)
          break
        case 3:
          length = this.getNum('joinEnterprise', this.currentData)
          break
      }
      return `${text}(${length})`
    }
  }
}

</script>
<style lang='stylus' scoped>

</style>