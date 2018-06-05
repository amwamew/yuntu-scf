/*
 * FileName: 企业主体
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:31:55 pm
 * Author: LiuBing
 */

<template>
  <div class="enterprise">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-white shadow-box">
          <div class="fl">
            <h1 class="company-name">{{ enterpriseBasicInfo.name }}</h1>
            <div class="actions">
              <el-button type="text"
                class="text-button"
                icon="icon-collect"
                size="small">加入收藏</el-button>
              <el-button type="text"
                class="text-button"
                icon="icon-download1"
                size="small">下载报告</el-button>
            </div>
          </div>
          <div class="fr">
            <div class="refresh">
              <el-button size="small"
                type="success"
                icon="icon-refresh">
                刷新列表
              </el-button>
              <el-button size="small"
                icon="icon-back">
                返回
              </el-button>
            </div>
            <p class="last-update-time">上次刷新时间：2018-03-10</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-white shadow-box">
          <ul class="right-menu">
            <li v-for="(item,index) in rightMenu"
              :key="index">
              <router-link :to="item.path">
                <el-button type="text"
                  size="small">
                  <i :class="item.icon"></i>
                  {{item.name}}
                </el-button>
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <transition name="fade-up">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
      rightMenu: [
        {
          name: '企业基本信息',
          type: 'enterprise-basic-info',
          path: '',
          icon: 'icon-base-info'
        },
        {
          name: '企业关联图谱',
          type: 'association-map',
          path: '',
          icon: 'icon-relational-map'
        },
        {
          name: '不良信息扫描',
          type: 'bad-info-scan',
          path: '',
          icon: 'icon-scanning'
        },
        {
          name: '经营分析',
          type: 'business-analysis',
          path: '',
          icon: 'icon-management-analysis'
        },
        {
          name: '财务分析',
          type: 'financial-analysis',
          path: '',
          icon: 'icon-financial-analysis'
        },
        {
          name: '贷后监控',
          type: 'monitor',
          path: '',
          icon: 'icon-monitor'
        }
      ],
      //企业基本信息，可从接口获取
      enterpriseBasicInfo: {
        id: 1234,//企业id
        regNumber: '312313456765423',//企业注册号
        websiteList: '',//网址
        email: '123456@163.com',//邮箱
        regCapital: '300.00万元',//注册资金
        name: '阜南县金宇食品商贸有限公司',//公司名称
        regInstitute: '',//登记机关
        regLocation: '阜南县鹿城镇冷西8巷1号',//注册地址
        industry: '',//行业,
        registerTime: '2010-05-18',//注册时间
        approvedTime: '2010-05-18至2060-05-17',//核准时间
        tags: [],//企业标签
        orgApprovedInstitute: '阜南县市场监督管理局',//核准机构
        taxNumber: '',//纳税人识别号
        businessScope: '预包装食品、乳制品(含婴幼儿配方乳粉)批发兼零售、卷烟、酒、保健食品销售;日用百货、 文体用品、针织服装、洗涤化妆品、五金电料销售(依法须经批准的项目,经相关部门批准后 方可开展经营活动)',//经营范围
        orgNumber: '',//组织机构代码
        estiblishTime: '',//开业时间
        regStatus: '存续（在营、开业、在册）',//经营状态
        legalPersonName: '石亮',//法人
        legalPersonId: 41314,//法人id
        toTime: '',//经营结束时间
        phoneNumber: '010-12345678',//联系方式
        sourceFlag: '',//来源
        correctCompanyId: 3131,//新公司id
        companyOrgType: '有限责任公司',//公司类型
        updateTimes: '',//更新时间
        base: '',//省份简称
        creditCode: '',//社会统一信用代码
        bondName: '',//股票名称
        bondNum: '',//股票号
        bondType: '',//股票类型
        historyNames: '',//历史名称
      }
    }
  },
  created() {
    this.setRightMenuPath()
    this._setEnterpriseBasicInfo()
  },
  methods: {
    ...mapMutations({
      setEnterpriseBasicInfo: 'SET_ENTERPRISE_BASIC_INFO'
    }),
    setRightMenuPath() {
      this.rightMenu.forEach(item => {
        item.path = `/enterprise/${this.id}/${item.type}`
      })
    },
    _setEnterpriseBasicInfo() {
      this.setEnterpriseBasicInfo(this.enterpriseBasicInfo)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
.enterprise
  max-width: 1920px
  .grid-content
    padding: 20px
    overflow: hidden
    .company-name
      font-size: 22px
      line-height: 50px
    .text-button
      font-size: 14px
    .refresh
      margin-top: 8px
    .last-update-time
      color: $color-gray-99
      font-size: 14px
      margin-top: 20px
    .right-menu
      overflow: hidden
      li
        width: 50%
        float: left
        .el-button--text
          font-size: 14px
          padding: 6px 0
          color: $color-gray-66
          &:hover
            color: $color-blue
        .router-link-active
          .el-button--text
            color: $color-blue
</style>