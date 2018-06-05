/*
 * FileName: 企业基本信息
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 2:33:53 pm
 * Author: LiuBing
 */

<template>
  <div class="enterprise-basic-info bg-white">
    <ul class="basic-info-tab">
      <li class="item-tab"
        v-for="(item,index) in tabMenu"
        :key="index">
        <router-link :to="item.path"
          class="router-link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div class="tab-button"
      v-if="$route.path.indexOf(item.path) > -1 "
      v-for="(item,index) in tabMenu"
      :key="index">
      <ul>
        <li class="fl"
          v-for="(child,i) in item.children"
          :key="i">
          <router-link :to="child.path">
            <el-button type="primary"
              size="small"
              v-if="$route.path === child.path">{{ child.name }}</el-button>
            <el-button plain
              size="small"
              v-else>{{ child.name }}</el-button>

          </router-link>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <transition name="fade-up">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      clientWidth: 0,
      tabMenu: [
        {
          name: '基本信息',
          type: 'basic-info',
          children: [
            {
              name: '工商基本信息',
              type: 'info'
            },
            {
              name: '工商变更',
              type: 'modify'
            }
          ]
        },
        {
          name: '关联企业',
          type: 'affiliated-enterprise',
          children: [
            {
              name: '股权结构图',
              type: 'equity-structure'
            },
            {
              name: '企业对外投资',
              type: 'invest'
            },
            {
              name: '法人投资任职',
              type: 'corporate-invest'
            },
            {
              name: '董监高投资任职',
              type: 'djg-invest'
            },
            {
              name: '股东投资任职',
              type: 'sh-invest'
            }
          ]
        },
        {
          name: '风险信息',
          type: 'risk-info',
          children: [
            {
              name: '法律诉讼',
              type: 'legal-action'
            },
            {
              name: '开庭公告',
              type: 'opening-notice'
            },
            {
              name: '法院公告',
              type: 'court-notice'
            },
            {
              name: '被执行人',
              type: 'executor'
            },
            {
              name: '失信人',
              type: 'unbelievers'
            },
            {
              name: '司法拍卖',
              type: 'judicial-auction'
            },
            {
              name: '欠税公告',
              type: 'tax-arrears-notice'
            },
            {
              name: '工商经营异常',
              type: 'abnormal-operation'
            },
            {
              name: '工商抽查检查',
              type: 'inspect'
            },
            {
              name: '工商违法记录',
              type: 'illegal-record'
            },
            {
              name: '行政处罚',
              type: 'sanction'
            }
          ]
        },
        {
          name: '资产信息',
          type: 'asset-info',
          children: [
            {
              name: '股权出质',
              type: 'equity-pledge'
            },
            {
              name: '动产抵押',
              type: 'chattel-mortgage'
            }
          ]
        },
        {
          name: '知识产权',
          type: 'intellectual-property',
          children: [
            {
              name: '商标信息',
              type: 'trademark'
            },
            {
              name: '专利信息',
              type: 'patent'
            },
            {
              name: '软件著作权',
              type: 'software-copyright'
            },
            {
              name: '作品著作权',
              type: 'works-copyright'
            },
            {
              name: '网站备案',
              type: 'website-record'
            },
            {
              name: '微信公众号',
              type: 'wechat'
            }
          ]
        },
        {
          name: '经营状况',
          type: 'business-state',
          children: [
            {
              name: '招标信息',
              type: 'tendering'
            },
            {
              name: '购地信息',
              type: 'purchase'
            },
            {
              name: '债券信息',
              type: 'bond'
            },
            {
              name: '税务评级',
              type: 'tax-rating'
            },
            {
              name: '产品信息',
              type: 'product'
            },
            {
              name: '资质证书',
              type: 'certifications'
            },
            {
              name: '进出口信用',
              type: 'credit'
            },
            {
              name: '招聘信息',
              type: 'recruit'
            },
            {
              name: '新闻信息',
              type: 'news'
            }
          ]
        },
        {
          name: '上市信息',
          type: 'listed-info',
          children: [
            {
              name: '股票行情',
              type: 'stock-market'
            },
            {
              name: '企业简介',
              type: 'introduction'
            },
            {
              name: '参股控股',
              type: 'taking-holding'
            },
            {
              name: '股本结构',
              type: 'capital-structure'
            },
            {
              name: '上市公告',
              type: 'list-notice'
            },
            {
              name: '分红情况',
              type: 'bonus'
            },
            {
              name: '配股情况',
              type: 'allotment'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.setTabMenuPath()
    this.setEnterpriseMeuns(this.tabMenu)
  },
  methods: {
    ...mapMutations({
      setEnterpriseMeuns: 'SET_ENTERPRISE_MENUS'
    }),
    setTabMenuPath() {
      this.tabMenu.forEach(item => {
        item.path = `/enterprise/${this.$route.params.id}/enterprise-basic-info/${item.type}`
        if (item.children) {
          this.setPath(item.path, item.children)
        }
      })
    },
    setPath(path, data) {
      data.forEach(item => {
        item.path = `${path}/${item.type}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
.enterprise-basic-info
  margin-top: 20px
  .basic-info-tab
    border-bottom: 1px solid $color-gray-c0c4cc
    overflow: hidden
    .item-tab
      float: left
      width: 10%
      .router-link
        text-align: center
        border-right: 1px solid $color-gray-c0c4cc
        display: inline-block
        width: 100%
        height: 45px
        line-height: 45px
        font-size: 14px
        &:hover
          color: $color-blue
      .router-link-active
        color: $color-blue
  .tab-button
    padding: 15px 40px
    ul
      overflow: hidden
      li
        margin-right: 15px
</style>