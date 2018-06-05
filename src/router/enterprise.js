/*
 * FileName: 企业公司相关路由
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 5:57:27 pm
 * Author: LiuBing
 */
//总路由
const Index = resolve => {
  import ('@/views/index').then(module => {
    resolve(module)
  })
}
//企业公司路由
const EnterpriseIndex = resolve => {
  import ('@/views/enterprise/index').then(module => {
    resolve(module)
  })
}
//企业基本信息
const EnterpriseBasicInfo = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/enterprise-basic-info').then(module => {
    resolve(module)
  })
}
//基本信息
const BasicInfo = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/basic-info/basic-info').then(module => {
    resolve(module)
  })
}
//工商基本信息
const Info = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/basic-info/info/info').then(module => {
    resolve(module)
  })
}
//工商变更
const Modify = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/basic-info/modify/modify').then(module => {
    resolve(module)
  })
}
// ------------------------------------------ //
//关联企业
const AffiliatedEnterprise = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/affiliated-enterprise/affiliated-enterprise').then(module => {
    resolve(module)
  })
}
//股权结构图
const EquityStructure = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/affiliated-enterprise/equity-structure/equity-structure').then(module => {
    resolve(module)
  })
}
//企业对外投资
const Invest = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/affiliated-enterprise/invest/invest').then(module => {
    resolve(module)
  })
}
//法人投资任职
const CorporateInvest = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/affiliated-enterprise/corporate-invest/corporate-invest').then(module => {
    resolve(module)
  })
}
//董监高投资任职
const DjgInvest = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/affiliated-enterprise/djg-invest/djg-invest').then(module => {
    resolve(module)
  })
}
//股东投资任职
const ShInvest = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/affiliated-enterprise/sh-invest/sh-invest').then(module => {
    resolve(module)
  })
}

// ------------------------------------------ //

//风险信息
const RiskInfo = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/risk-info').then(module => {
    resolve(module)
  })
}
//法律诉讼
const LegalAction = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/legal-action/legal-action').then(module => {
    resolve(module)
  })
}
//开庭公告
const OpeningNotice = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/opening-notice/opening-notice').then(module => {
    resolve(module)
  })
}
//法院公告
const CourtNotice = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/court-notice/court-notice').then(module => {
    resolve(module)
  })
}
//被执行人
const Executor = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/executor/executor').then(module => {
    resolve(module)
  })
}
//失信人
const Unbelievers = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/unbelievers/unbelievers').then(module => {
    resolve(module)
  })
}
//司法拍卖
const JudicialAuction = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/judicial-auction/judicial-auction').then(module => {
    resolve(module)
  })
}
//欠税公告
const TaxArrearsNotice = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/tax-arrears-notice/tax-arrears-notice').then(module => {
    resolve(module)
  })
}
//工商经营异常
const AbnormalOperation = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/abnormal-operation/abnormal-operation').then(module => {
    resolve(module)
  })
}
//工商抽查检查
const Inspect = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/inspect/inspect').then(module => {
    resolve(module)
  })
}
//工商违法记录
const IllegalRecord = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/illegal-record/illegal-record').then(module => {
    resolve(module)
  })
}
//行政处罚
const Sanction = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/risk-info/sanction/sanction').then(module => {
    resolve(module)
  })
}


// ------------------------------------------ //

//资产信息
const AssetInfo = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/asset-info/asset-info').then(module => {
    resolve(module)
  })
}
//股权出质
const EquityPledge = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/asset-info/equity-pledge/equity-pledge').then(module => {
    resolve(module)
  })
}
//动产抵押
const ChattelMortgage = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/asset-info/chattel-mortgage/chattel-mortgage').then(module => {
    resolve(module)
  })
}

// ------------------------------------------ //

//知识产权
const IntellectualProperty = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/intellectual-property').then(module => {
    resolve(module)
  })
}
//商标信息
const Trademark = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/trademark/trademark').then(module => {
    resolve(module)
  })
}
//专利信息
const Patent = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/patent/patent').then(module => {
    resolve(module)
  })
}
//软件著作权
const SoftwareCopyright = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/software-copyright/software-copyright').then(module => {
    resolve(module)
  })
}
//作品著作权
const WorksCopyright = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/works-copyright/works-copyright').then(module => {
    resolve(module)
  })
}
//网站备案
const WebsiteRecord = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/website-record/website-record').then(module => {
    resolve(module)
  })
}
//微信公众号
const Wechat = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/intellectual-property/wechat/wechat').then(module => {
    resolve(module)
  })
}

// ------------------------------------------ //

//经营状况
const BusinessState = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/business-state').then(module => {
    resolve(module)
  })
}
//招标信息
const Tendering = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/tendering/tendering').then(module => {
    resolve(module)
  })
}
//购地信息
const Purchase = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/purchase/purchase').then(module => {
    resolve(module)
  })
}
//债券信息
const Bond = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/bond/bond').then(module => {
    resolve(module)
  })
}
//税务评级
const TaxRating = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/tax-rating/tax-rating').then(module => {
    resolve(module)
  })
}
//产品信息
const Product = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/product/product').then(module => {
    resolve(module)
  })
}
//资质证书
const Certifications = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/certifications/certifications').then(module => {
    resolve(module)
  })
}
//进出口信用
const Credit = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/credit/credit').then(module => {
    resolve(module)
  })
}
//招聘信息
const Recruit = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/recruit/recruit').then(module => {
    resolve(module)
  })
}
//新闻信息
const News = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/business-state/news/news').then(module => {
    resolve(module)
  })
}

// ------------------------------------------ //

//上市信息
const ListedInfo = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/listed-info').then(module => {
    resolve(module)
  })
}
//股票行情
const StockMarket = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/stock-market/stock-market').then(module => {
    resolve(module)
  })
}
//企业简介
const Introduction = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/introduction/introduction').then(module => {
    resolve(module)
  })
}
//参股控股
const TakingHolding = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/taking-holding/taking-holding').then(module => {
    resolve(module)
  })
}
//股本结构
const CapitalStructure = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/capital-structure/capital-structure').then(module => {
    resolve(module)
  })
}
//上市公告
const ListNotice = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/list-notice/list-notice').then(module => {
    resolve(module)
  })
}
//分红情况
const Bonus = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/bonus/bonus').then(module => {
    resolve(module)
  })
}
//配股情况
const Allotment = resolve => {
  import ('@/views/enterprise/enterprise-basic-info/listed-info/allotment/allotment').then(module => {
    resolve(module)
  })
}

// ------------------------------------------ //

//企业关联图谱
const AssociationMap = resolve => {
  import ('@/views/enterprise/association-map/association-map').then(module => {
    resolve(module)
  })
}

//不良信息扫描
const BadInfoScan = resolve => {
  import ('@/views/enterprise/bad-info-scan/bad-info-scan').then(module => {
    resolve(module)
  })
}

//经营分析
const BusinessAnalysis = resolve => {
  import ('@/views/enterprise/business-analysis/business-analysis').then(module => {
    resolve(module)
  })
}

//财务分析
const FinancialAnalysis = resolve => {
  import ('@/views/enterprise/financial-analysis/financial-analysis').then(module => {
    resolve(module)
  })
}

//财务分析
const Monitor = resolve => {
  import ('@/views/enterprise/monitor/monitor').then(module => {
    resolve(module)
  })
}

export default [{
  path: '/enterprise',
  name: 'Enterprise',
  component: Index,
  redirect: '/home',
  children: [{
    path: ':id',
    component: EnterpriseIndex,
    redirect:'/enterprise/:id/enterprise-basic-info/basic-info/info',
    children: [{
        path: 'enterprise-basic-info', //企业基本信息
        name: 'enterpriseBasicInfo',
        component: EnterpriseBasicInfo,
        redirect:'/enterprise/:id/enterprise-basic-info/basic-info/info',
        children: [{
            path: 'basic-info', //基本信息
            name: 'basicInfo',
            component: BasicInfo,
            redirect:'/enterprise/:id/enterprise-basic-info/basic-info/info',
            children: [
              {
                path: 'info', //工商基本信息
                name: 'info',
                component: Info,
              },
              {
                path: 'modify', //工商变更
                name: 'modify',
                component: Modify,
              }
            ]
          }, {
            path: 'affiliated-enterprise', //关联企业
            name: 'affiliatedEnterprise',
            component: AffiliatedEnterprise,
            redirect:'/enterprise/:id/enterprise-basic-info/affiliated-enterprise/equity-structure',          
            children: [
              {
                path: 'equity-structure', //股权结构图
                name: 'equityStructure',
                component: EquityStructure,
              },
              {
                path: 'invest', //企业对外投资
                name: 'invest',
                component: Invest,
              },
              {
                path: 'corporate-invest', //法人投资任职
                name: 'corporateInvest',
                component: CorporateInvest,
              },
              {
                path: 'djg-invest', //董监高投资任职
                name: 'djgInvest',
                component: DjgInvest,
              },
              {
                path: 'sh-invest', //股东投资任职
                name: 'shInvest',
                component: ShInvest,
              }
            ]
          }, {
            path: 'risk-info', //风险信息
            name: 'riskInfo',
            component: RiskInfo,
            redirect:'/enterprise/:id/enterprise-basic-info/risk-info/legal-action', 
            children: [
              {
                path: 'legal-action', //法律诉讼
                name: 'legalAction',
                component: LegalAction
              },
              {
                path: 'opening-notice', //开庭公告
                name: 'openingNotice',
                component: OpeningNotice
              },
              {
                path: 'court-notice', //法院公告
                name: 'courtNotice',
                component: CourtNotice
              },
              {
                path: 'executor', //被执行人
                name: 'executor',
                component: Executor
              },
              {
                path: 'unbelievers', //失信人
                name: 'unbelievers',
                component: Unbelievers
              },
              {
                path: 'judicial-auction', //司法拍卖
                name: 'judicialAuction',
                component: JudicialAuction
              },
              {
                path: 'tax-arrears-notice', //欠税公告
                name: 'taxArrearsNotice',
                component: TaxArrearsNotice
              },
              {
                path: 'abnormal-operation', //工商经营异常
                name: 'abnormalOperation',
                component: AbnormalOperation
              },
              {
                path: 'inspect', //工商抽查检查
                name: 'inspect',
                component: Inspect
              },
              {
                path: 'illegal-record', //工商违法记录
                name: 'illegalRecord',
                component: IllegalRecord
              },
              {
                path: 'sanction', //行政处罚
                name: 'sanction',
                component: Sanction
              }
            ]
          },
          {
            path: 'asset-info', //资产信息
            name: 'assetInfo',
            component: AssetInfo,
            redirect:'/enterprise/:id/enterprise-basic-info/asset-info/equity-pledge', 
            children: [
              {
                path: 'equity-pledge', //股权出质
                name: 'equityPledge',
                component: EquityPledge
              },
              {
                path: 'chattel-mortgage', //动产抵押
                name: 'chattelMortgage',
                component: ChattelMortgage
              }
            ]
          },
          {
            path: 'intellectual-property', //知识产权
            name: 'intellectualProperty',
            component: IntellectualProperty,
            redirect:'/enterprise/:id/enterprise-basic-info/intellectual-property/trademark', 
            children: [
              {
                path: 'trademark', //商标信息
                name: 'trademark',
                component: Trademark
              },
              {
                path: 'patent', //专利信息
                name: 'patent',
                component: Patent
              },
              {
                path: 'software-copyright', //软件著作权
                name: 'softwareCopyright',
                component: SoftwareCopyright
              },
              {
                path: 'works-copyright', //作品著作权
                name: 'worksCopyright',
                component: WorksCopyright
              },
              {
                path: 'website-record', //网站备案
                name: 'websiteRecord',
                component: WebsiteRecord
              },
              {
                path: 'wechat', //微信公众号
                name: 'wechat',
                component: Wechat
              }
            ]
          },
          {
            path: 'business-state', //经营状况
            name: 'businessState',
            component: BusinessState,
            redirect:'/enterprise/:id/enterprise-basic-info/business-state/tendering',
            children: [
              {
                path: 'tendering', //招标信息
                name: 'tendering',
                component: Tendering
              },
              {
                path: 'purchase', //购地信息
                name: 'purchase',
                component: Purchase
              },
              {
                path: 'bond', //债券信息
                name: 'bond',
                component: Bond
              },
              {
                path: 'tax-rating', //税务评级
                name: 'taxRating',
                component: TaxRating
              },
              {
                path: 'product', //产品信息
                name: 'product',
                component: Product
              },
              {
                path: 'certifications', //资质证书
                name: 'certifications',
                component: Certifications
              },
              {
                path: 'credit', //进出口信用
                name: 'credit',
                component: Credit
              },
              {
                path: 'recruit', //招聘信息
                name: 'recruit',
                component: Recruit
              },
              {
                path: 'news', //新闻信息
                name: 'news',
                component: News
              }
            ]
          },
          {
            path: 'listed-info', //上市信息
            name: 'listedInfo',
            component: ListedInfo,
            redirect:'/enterprise/:id/enterprise-basic-info/listed-info/stock-market',
            children: [
              {
                path: 'stock-market', //股票行情
                name: 'stockMarket',
                component: StockMarket
              },
              {
                path: 'introduction', //企业简介
                name: 'introduction',
                component: Introduction
              },
              {
                path: 'taking-holding', //参股控股
                name: 'takingHolding',
                component: TakingHolding
              },
              {
                path: 'capital-structure', //股本结构
                name: 'capitalStructure',
                component: CapitalStructure
              },
              {
                path: 'list-notice', //上市公告
                name: 'listNotice',
                component: ListNotice
              },
              {
                path: 'bonus', //分红情况
                name: 'bonus',
                component: Bonus
              },
              {
                path: 'allotment', //配股情况
                name: 'allotment',
                component: Allotment
              }
            ]
          }
        ]
      },
      {
        path: 'association-map', //企业关联图谱
        name: 'associationMap',
        component: AssociationMap
      },
      {
        path: 'bad-info-scan', //不良信息扫描
        name: 'badInfoScan',
        component: BadInfoScan
      },
      {
        path: 'business-analysis', //经营分析
        name: 'businessAnalysis',
        component: BusinessAnalysis
      },
      {
        path: 'financial-analysis', //财务分析
        name: 'financialAnalysis',
        component: FinancialAnalysis
      },
      {
        path: 'monitor', //贷后监控
        name: 'monitor',
        component: Monitor
      }
    ]
  }]
}]
