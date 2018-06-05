/*
 * FileName: 法律诉讼
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:13:31 pm
 * Author: LiuBing
 */
<template>
  <div class="legal-action">
    <div class="serach-area">
      <div class="inline-block mr10">
        文书类型：
        <el-select v-model="searchData.documentType"
          size="small"
          placeholder="请选择文书类型">
          <el-option v-for="item in documentType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="inline-block mr10">
        案件类型：
        <el-select v-model="searchData.caseType"
          size="small"
          placeholder="请选择案件类型">
          <el-option v-for="item in caseType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button class="mr10"
        size="small"
        icon="el-icon-search"
        @click="search">查询</el-button>
    </div>
    <div class="flag-items">
      <div class="item"
        v-for="(item,index) in data"
        :key="index">
        <div class="item-title">
          <span class="flag">{{ item.casetype }}</span>
          <span class="detail"
            @click="toogle($event,item)">
            <i class="el-icon-arrow-down el-icon--left"></i>{{ item.actionText }}</span>
        </div>
        <ul>
          <li class=title>
            <div class="item-li">
              标题：
              <a href="javascript:;"
                class="link-color-blue">{{ item.title }}</a>
            </div>
          </li>
          <li>
            <div class="item-li">
              法院：{{ item.court }}
            </div>
          </li>
          <li>
            <div class="item-li">
              文书类型：{{ item.doctype }}
            </div>
          </li>
          <li>
            <div class="item-li">
              案件类型：{{ item.casetype }}
            </div>
          </li>
          <li>
            <div class="item-li">
              案号：{{ item.caseno }}
            </div>
          </li>
          <li>
            <div class="item-li">
              发布日期：{{ item.submittime }}
            </div>
          </li>
          <transition name="fade">
            <li class="more-info"
              v-show="item.isShow">
              <div class="item-li">
                当事方：{{ item.abstracts }}
              </div>
            </li>
          </transition>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '@/assets/js/dom'
import { documentType, caseType } from '@/assets/js/config'
export default {
  data() {
    return {
      documentType: documentType,
      caseType: caseType,
      searchData:{
        documentType: '0',
        caseType: '0'
      },
      data: [
        {
          plaintiffs: "北京百度网讯科技有限公司",//原告
          court: "广州知识产权法院",//法院
          casereason: "侵害作品信息网络传播权纠纷",//案由
          url: "http://wenshu.court.gov.cn/content/content?DocID=e96e9ffe-85ff-480f-8c9b-a89b009748e3",//原文链接地址
          caseno: "（2017）粤73民辖终1273-1278号",//案件号
          id: "41908019",//对应表id
          title: "北京百度网讯科技有限公司、太平洋影音公司侵害作品信息网络传播权纠纷二审民事裁定书",//标题
          abstracts: "",//摘要
          submittime: "1520265600000",//提交时间
          casetype: "民事案件",//案件类型
          uuid: "08033c793f0611e8b0207cd30ae00c08",
          doctype: "被告裁定书",//文书类型
          defendants: "太平洋影音公司"//被告
        },
        {
          id: "40764479",
          title: "787上海玄霆娱乐信息科技有限公司苏州分公司与北京百度网讯科技有限公司侵害作品信息网络传播权纠纷二审民事裁定书",
          abstracts: "江苏省高级人民法院民 事 裁 定 书(2017)苏民终787号上诉人（原审被告）：北京百度网讯科技有限公司，住所地北京市海淀区上地十街10号百度大厦2层。法定代表人：梁志祥，该公司经理。委托诉讼代理人：谭红娟、望开雄，北京市海润律师事务所律师。被上诉人（原审原告）：上海玄霆娱乐信息科技有限公司苏州分公司，住所地江苏省苏州市高铁新城南天成路58号。负责人：胡秋峰。委托诉讼代理人：汪靖、李浩，上海天闻世代律师事务所律师。上诉人北京百度网讯科技有限公司（以下简称百度公司）因与被上诉人上海玄霆娱乐信息科技有限公司苏州分公司（以下简称玄霆苏州分公司）侵害信息网络传播权纠纷一案，不服江苏省苏州市中级人民法院(2016)苏05民初202号民事判决，向",
          submittime: "1511539200000",
          court: "江苏省高级人民法院",
          casetype: "民事案件",
          casereason: "侵害作品信息网络传播权纠纷",
          uuid: "7da1f311e4a611e788a5008cfaf8725a",
          doctype: "民事裁定书",
          caseno: "（2017）苏民终787号"
        },
        {
          id: "30345489",
          title: "柏树峰、周家顶等名誉权纠纷二审管辖裁定书",
          abstracts: "上诉人（原审被告）：北京百度网讯科技有限公司，住所地北京市海淀区上地十街10号百度大厦2层。 法定代表人：梁志祥，经理。 委托诉讼代理人：唐宁，北京市海铭律师事务所律师。 被上诉人（原审原告）：柏树峰，男，1970年2月3日出生。 原审被告：周家顶，男，1965年1月22日出生。 上诉人北京百度网讯科技有限公司（以下简称百度网讯公司）因与被上诉人柏树峰、原审被告周家顶名誉权纠纷一案，不服北京市昌平区人民法院（2017）京0114民初2879号民事裁定，向",
          submittime: "1504540800000",
          court: "北京市第一中级人民法院",
          casetype: "民事案件",
          casereason: "名誉权纠纷",
          uuid: "321c2e6d97a911e788a5008cfaf8725a",
          doctype: "民事裁定书",
          url: "http://wenshu.court.gov.cn/content/content?DocID=05e88576-bc9e-44a0-917b-a7e800109151",
          caseno: "（2017）京01民辖终559号"
        },
        {
          id: "40706639",
          title: "北京百度网讯科技有限公司与上海汉涛信息咨询有限公司其他不正当竞争纠纷二审民事判决书",
          abstracts: "上诉人(原审被告)：北京百度网讯科技有限公司，住所地北京市。 法定代表人：梁志祥，经理。 委托诉讼代理人：陈建民，北京罗杰律师事务所律师。 委托诉讼代理人：张永宜，北京市大地律师事务所律师。 被上诉人(原审原告)：上海汉涛信息咨询有限公司，注册地中国(上海)自由贸易试验区。 法定代表人：张涛，经理。 委托诉讼代理人：傅钢，上海市协力律师事务所律师。 委托诉讼代理人：游闽键，上海市协力律师事务所律师。 原审被告：上海杰图软件技术有限公司，住所地中国(上海)自由贸易试验区。 法定代表人：王帅，董事长兼总经理。 委托诉讼代理人：吴向东，上海汉商律师事务所律师。 委托诉讼代理人：马赛，上海汉商律师事务所律师。 上诉人北京百度网讯科技有限公司(以下简称百度公司)因不正当竞争纠纷一案，不服上海市浦东新区人民法院(2015)浦民三(知)初字第528号民事判决，向",
          submittime: "1504022400000",
          court: "上海知识产权法院",
          casetype: "民事案件",
          casereason: "不正当竞争纠纷",
          uuid: "096e256ac1ec11e788a5008cfaf8725a",
          doctype: "民事判决书",
          url: "http://wenshu.court.gov.cn/content/content?DocID=41dbc226-7514-4738-86a6-a7f90124a13c",
          caseno: "（2016）沪73民终242号"
        },
        {
          id: "30163381",
          title: "北京百度网讯科技有限公司与王晓春劳动争议二审民事判决书",
          abstracts: "北京市第一中级人民法院 民 事 判 决 书 (2017)京01民终5811号 上诉人（原审原告、被告）：北京百度网讯科技有限公司，住所地北京市海淀区上地十街10号百度大厦2层。 法定代表人：梁志祥，董事长。 委托诉讼代理人：安芳，女，北京百度网讯科技有限公司人力资源主管。 委托诉讼代理人：藏克兰，北京市中永律师事务所律师。 被上诉人（原审被告、原告）：王晓春，女，1983年2月4日出生，汉族，无业，住西安市临潼区。 委托诉讼代理人：刘纪伟，北京市炜衡律师事务所律师。 委托诉讼代理人：于明玉，北京市炜衡律师事务所实习律师。 上诉人北京百度网讯科技有限公司（以下简称百度网讯公司）因与被上诉人王晓春劳动争议一案，不服北京市海淀区人民法院(2016)京0108民初37799号民事判决，向",
          submittime: "1503849600000",
          court: "北京市第一中级人民法院",
          casetype: "民事案件",
          casereason: "劳动争议",
          uuid: "95a9ff01916811e788a5008cfaf8725a",
          doctype: "民事判决书",
          url: "http://wenshu.court.gov.cn/content/content?DocID=ca3a0f62-36f1-4214-8093-a7e100115e4d",
          caseno: "（2017）京01民终5811号"
        }
      ]
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.data.forEach((item, index) => {
        this.$set(item, 'actionText', '展开')
        this.$set(item, 'isShow', false)
      })
    },
    toogle(event, item) {
      const $currentTarget = event.currentTarget
      if (!item.isShow) {
        addClass($currentTarget, 'active')
      } else {
        removeClass($currentTarget, 'active')
      }
      item.actionText = item.isShow ? '展开' : '收起'
      item.isShow = !item.isShow
    },
    search(){
      console.log(this.searchData)
    }
  }
}

</script>
<style lang='stylus' scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s
.fade-enter, .fade-leave-to
  opacity: 0
.serach-area
  margin-bottom: 15px
.legal-action
  padding-left: 40px
  padding-right: 40px
  .flag-items
    ul
      font-size: 14px
      li
        width: 50%
      .title, .more-info
        width: 100%
</style>