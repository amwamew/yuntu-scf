/*
 * FileName: 首页
 * Project: yuntu-scf-vue
 * File Created: 2018-05-12
 * Author: liubing
 */

<template>
  <div class="home">
    <div class="itme-top shadow-box"
      ref="itemTop">
      <ul>
        <li v-for="(item,index) in topData"
          :key="index">
          <div class="item">
            <img src="../../assets/images/company.png"
              v-if="item.name === 'company'">
            <img src="../../assets/images/customer.png"
              v-if="item.name === 'customer'">
            <img src="../../assets/images/amount.png"
              v-if="item.name === 'amount'">
            <img src="../../assets/images/loan.png"
              v-if="item.name === 'loan'">
            <img src="../../assets/images/balance.png"
              v-if="item.name === 'balance'">
            <div class="info">
              <div class="name">{{item.text}}</div>
              <div class="value">
                <countup :endVal="item.value"></countup>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="itme-middle">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content shadow-box slide"
            ref="gridLeft">
            <div class="content-top">
              <div class="name">待办事项</div>
              <div class="search">
                <el-input placeholder="客户名称/编号"
                  size="mini">
                  <template slot="append">
                    <el-button type="info"
                      round
                      icon="el-icon-search"
                      class="search-btn"></el-button>
                  </template>
                </el-input>
              </div>
            </div>
            <div class="content-mid">
              <el-radio-group size="small"
                v-model="toDoType"
                @change="toDoChange">
                <el-radio-button label="0">授信调查</el-radio-button>
                <el-radio-button label="1">授信审查</el-radio-button>
                <el-radio-button label="2">放款管理</el-radio-button>
                <el-radio-button label="3">预警处理</el-radio-button>
              </el-radio-group>
            </div>
            <div class="content-list"
              ref="contentList">
              <ul v-for="(item,i) in toDoList"
                :key="i"
                v-if="toDoList.length"
                v-show="toDoIndex == i">
                <li v-for="(child,n) in item"
                  :key="n"
                  :class="{'active':n%2 != 0}">
                  <a href="#"
                    :title="child.title">
                    <p>{{child.title}}</p>
                    <p>{{child.date}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content shadow-box center"
            ref="gridMid">
            <div class="content-top">
              <div class="search-area">
                <div class="select company">
                  <el-select v-model="searchQuery.business"
                    placeholder="请选择">
                    <el-option v-for="(item, index) in queryBusiness"
                      :key="index"
                      :label="item.label"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </div>
                <div class="select company">
                  <el-select v-model="searchQuery.company"
                    placeholder="请选择">
                    <el-option v-for="item in company"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="select date">
                  <el-date-picker v-model="timeSelect"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    unlink-panels
                    value-format="yyyy-MM-dd"
                    @change="dateChange">
                  </el-date-picker>
                </div>
                <div class="select query">
                  <el-button type="info"
                    icon="el-icon-search"
                    @click.native="query">查询</el-button>
                </div>
                <div class="select export">
                  <el-button type="info">导出EXCEL</el-button>
                </div>
              </div>
            </div>
            <div class="content-mid mid-middle">
              <div class="mid-left">
                <ul>
                  <li>
                    <span class="name">授信客户数</span>
                    <span class="num">
                      <countup :endVal="890"></countup>
                    </span>
                  </li>
                  <li>
                    <span class="name">授信金额</span>
                    <span class="num">
                      <countup :endVal="208000"></countup> 万
                    </span>
                  </li>
                  <li>
                    <span class="name">累计放款</span>
                    <span class="num">
                      <countup :endVal="310000"></countup> 万
                    </span>
                  </li>
                  <li>
                    <span class="name">累计还款</span>
                    <span class="num">
                      <countup :endVal="150000"></countup> 万
                    </span>
                  </li>
                  <li>
                    <span class="name">贷款余额</span>
                    <span class="num">
                      <countup :endVal="160000"></countup> 万
                    </span>
                  </li>
                  <li>
                    <span class="name">30天到期</span>
                    <span class="num">
                      <countup :endVal="12000"></countup> 万
                    </span>
                  </li>
                  <li>
                    <span class="name">预警客户数</span>
                    <span class="num">
                      <countup :endVal="8"></countup> 户
                    </span>
                  </li>
                  <li>
                    <span class="name">预警余额</span>
                    <span class="num">
                      <countup :endVal="2500"></countup> 万
                    </span>
                  </li>
                </ul>
              </div>
              <div class="mid-right">
                <chart-bar></chart-bar>
              </div>
            </div>
            <div class="content-bottom">
              <chart-line></chart-line>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content shadow-box slide"
            ref="gridRight">
            <div class="content-top">
              <div class="name">风险预警</div>
            </div>
            <div class="content-mid">
              <div class="select company">
                <el-select v-model="companySelect"
                  placeholder="请选择"
                  @change="waringChange">
                  <el-option v-for="item in company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="select level">
                <el-select v-model="errorSelect"
                  placeholder="请选择"
                  @change="waringChange">
                  <el-option v-for="item in errorLevel"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="content-list">
              <ul>
                <li v-for="(item,n) in waringData"
                  :key="n"
                  :class="{'active':n%2 != 0}">
                  <a href="#"
                    :title="item.title">
                    <p>
                      {{item.title}}
                      <span class="level">
                        {{setLevel(item.level)}}
                      </span>
                    </p>
                    <p>{{item.date}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getTopData, getToDoList, getWaringList } from '@/api/home'
import { numeralMoney } from '@/utils/numeral'
import { mapGetters } from 'vuex'
import ChartBar from '@/base/echarts/bar'
import ChartLine from '@/base/echarts/line'
import Countup from '@/base/countup/countup'
export default {
  components: {
    Countup,
    ChartBar,
    ChartLine
  },
  data() {
    return {
      topData: [],
      toDoList: [],
      toDoType: '0',
      toDoIndex: '1',
      company: [
        {
          value: '1',
          label: '香飘飘食品股份有限公司'
        },
        {
          value: '2',
          label: '河北晨阳水漆集团公司'
        }
      ],
      companySelect: '',
      errorLevel: [
        {
          value: '1',
          label: '一级'
        },
        {
          value: '2',
          label: '二级'
        }
      ],
      errorSelect: '',
      waringData: [],
      timeSelect: [],
      searchQuery: {
        business: '',
        company: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  created() {
    this._getTopData()
    this._getToDoList('0')
    this._getQueryMenu()
  },
  mounted() {
    this._getWaringData()
    this.$nextTick(() => {
      this._setElementHeight()
    })
  },
  computed: {
    ...mapGetters(['topMenu'])
  },
  methods: {
    toDoChange(i) {
      this.toDoIndex = i
      this._getToDoList(i)
    },
    waringChange() {
      this._getWaringData(this.companySelect, this.errorSelect)
    },
    //日期选择变化
    dateChange() {
      this.searchQuery.startDate = this.timeSelect[0]
      this.searchQuery.endDate = this.timeSelect[1]
    },
    //查询
    query() {
      console.log(this.searchQuery)
    },
    _getQueryMenu() {
      const menu = this.topMenu
      menu.forEach(item => {
        if (item.name === 'Bank') {
          this.queryBusiness = item.children
          return false
        }
      })
    },
    _getTopData() {
      getTopData().then(res => {
        this.topData = res.data
      })
    },
    setLevel(type) {
      return type === '1' ? '一级预警' : '二级预警'
    },
    numeral(m) {
      return numeralMoney(m)
    },
    _getToDoList(type) {
      if (!this.toDoList[type]) {
        getToDoList(this.toDoType).then(res => {
          this.toDoIndex = type
          this.$set(this.toDoList, type, res.data)
        })
      }
    },
    _setElementHeight() {
      const { itemTop, gridLeft, gridMid, gridRight } = this.$refs
      const header = document.getElementsByClassName('header')[0]
      const footer = document.getElementsByClassName('footer')[0]

      const screenHeight = document.documentElement.clientHeight
      const hederHeight = header.clientHeight
      const itemTopHeight = itemTop.clientHeight
      const footerHeight = footer.clientHeight

      const midHeight =
        screenHeight - hederHeight - itemTopHeight - footerHeight

      // console.log(midHeight)
    },
    _getWaringData(company, level) {
      // console.log(this.$refs.contentList)
      // this.loading = this.$loading({
      //   target: this.$refs.contentList
      // })
      getWaringList(company, level).then(res => {
        this.waringData = res.data
        // this.loading.close()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable'
.itme-top
  overflow: hidden
  padding: 26px 0
  background-color: $color-white
  ul
    width: 100%
    overflow: hidden
    li
      width: 20%
      float: left
      text-align: center
      overflow: hidden
      .item
        display: inline-block
        overflow: hidden
        img
          border-radius: 4px
          float: left
        .info
          float: left
          text-align: center
          padding-left: 10px
          div
            line-height: 32px
          .name
            font-size: 14px
            color: $color-gray-66
          .value
            font-size: 28px
            font-weight: bold
.itme-middle
  position: absolute
  top: 140px
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  .grid-content
    height: 100%
  .content-top
    padding: 15px 0
    overflow: hidden
    width: 80%
    margin: auto
  .center
    .content-top
      width: 94%
      .search-area
        width: 100%
        overflow: hidden
        .select
          width: 12%
          margin-right: 10px
          float: left
        .date, .query, .export
          width: auto
        .export
          float: right
  .name
    float: left
    font-size: 16px
    height: 28px
    line-height: 28px
  .el-input-group__append
    padding-left: 16px
    padding-right: 10px
  .search
    width: 70%
    float: right
    overflow: hidden
    .search-btn
      padding-left: 10px
      padding-right: 10px
  .content-mid
    width: 80%
    margin: auto
    overflow: hidden
    .select
      float: left
    .company
      width: 50%
      margin-right: 10px
    .level
      width: 40%
  .mid-middle
    width: 94%
    position: relative
    overflow: hidden
    .mid-left
      width: 50%
      position: absolute
      bottom: 0
      ul
        overflow: hidden
        li
          width: 40%
          border: 1px solid #ddd
          border-left: 3px solid #ddd
          float: left
          line-height: 30px
          height: 30px
          margin-bottom: 17px
          margin-right: 4%
          padding: 0 10px
          overflow: hidden
          .name, .num
            font-size: 14px
            line-height: 32px
          .num
            float: right
    .mid-right
      width: 50%
      float: right
  .content-list
    li.active
      background: $color-gray-F9F9F9
    a
      width: 80%
      margin: auto
      display: block
      color: $color-black
      padding: 5px 0
      p
        font-size: 12px
        line-height: 20px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
      .level
        float: right
        color: $color-red
</style>
