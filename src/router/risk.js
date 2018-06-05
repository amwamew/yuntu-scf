/*
 * FileName: 风控引擎路由
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 5:00:32 pm
 * Author: LiuBing
 */
//总路由
const Index = resolve => {
  import ('@/views/index').then(module => {
    resolve(module)
  })
}

//风控引擎路由
const RiskIndex = resolve => {
  import ('@/views/risk/index').then(module => {
    resolve(module)
  })
}

//规则设置
const RuleSetting = resolve => {
  import ('@/views/risk/rule-setting/rule-setting').then(module => {
    resolve(module)
  })
}

//数据管理
const DataManage = resolve => {
  import ('@/views/risk/data-manage/data-manage').then(module => {
    resolve(module)
  })
}

//贷前风控
const RiskControlBefore = resolve => {
  import ('@/views/risk/risk-control/risk-control-before').then(module => {
    resolve(module)
  })
}

//贷中风控
const RiskControlMiddle = resolve => {
  import ('@/views/risk/risk-control/risk-control-middle').then(module => {
    resolve(module)
  })
}

//贷后风控
const RiskControlAfter = resolve => {
  import ('@/views/risk/risk-control/risk-control-after').then(module => {
    resolve(module)
  })
}

//核心企业监测
const EnterpriseMonitoring = resolve => {
  import ('@/views/risk/enterprise-monitoring/enterprise-monitoring').then(module => {
    resolve(module)
  })
}

//上市公司数据库
const CompanyDatabase = resolve => {
  import ('@/views/risk/company-database/company-database').then(module => {
    resolve(module)
  })
}

export default [{
  path: '/risk',
  name: 'Risk',
  component: Index,
  children: [{
    path: ':type',
    component: RiskIndex,
    children: [{
        path: 'rule-setting',
        name: 'RuleSetting', //规则设置
        component: RuleSetting
      },
      {
        path: 'data-manage',
        name: 'DataManage', //数据管理
        component: DataManage
      },
      {
        path: 'risk-control-before',
        name: 'RiskControlBefore', //贷前风控
        component: RiskControlBefore
      },
      {
        path: 'risk-control-middle',
        name: 'RiskControlMiddle', //贷中风控
        component: RiskControlMiddle
      },
      {
        path: 'risk-control-after',
        name: 'RiskControlAfter', //贷中风控
        component: RiskControlAfter
      },
      {
        path: 'enterprise-monitoring',
        name: 'EnterpriseMonitoring', //核心企业监测
        component: EnterpriseMonitoring
      },
      {
        path: 'company-database',
        name: 'CompanyDatabase', //上市公司数据库
        component: CompanyDatabase
      }
    ]
  }]
}]
