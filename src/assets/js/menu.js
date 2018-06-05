//顶部菜单
const topMenu = [{
    id: '1',
    label: '首页',
    name: 'Home',
    path: '/home',
    icon: 'icon-home',
    children: []
  },
  {
    id: '2',
    label: '系统设置',
    name: '',
    path: '/setting',
    icon: 'icon-setting',
    children: []
  },
  {
    id: '3',
    label: '业务管理',
    name: 'Bank',
    path: '/bank',
    icon: 'icon-business',
    children: [{
        id: '3-1',
        label: '保理',
        path: '/bank/fc',
        type: 'fc'
      },
      {
        id: '3-2',
        label: '反向保理',
        path: '/bank/rfc',
        type: 'rfc'
      },
      {
        id: '3-3',
        label: '保兑仓',
        path: '/bank/cb',
        type: 'cb'
      },
      {
        id: '3-4',
        label: '未来提货权仓库监管',
        path: '/bank/sdw',
        type: 'sdw'
      },
      {
        id: '3-5',
        label: '现货质押融资',
        path: '/bank/spf',
        type: 'spf'
      },
      {
        id: '3-6',
        label: '预付款融资',
        path: '/bank/pf',
        type: 'pf'
      },
      {
        id: '3-7',
        label: '1+N保理',
        path: '/bank/pfc',
        type: 'pfc'
      },
      {
        id: '3-8',
        label: '订单融资',
        path: '/bank/of',
        type: 'of'
      },
      {
        id: '3-9',
        label: '租金贷',
        path: '/bank/rl',
        type: 'rl'
      },
      {
        id: '3-10',
        label: '商户数据贷',
        path: '/bank/mdl',
        type: 'mdl'
      }
    ]
  },
  {
    id: '4',
    label: '统计分析',
    name: '',
    path: '/statistics',
    icon: 'icon-statistics',
    children: []
  },
  {
    id: '5',
    label: '风控引擎',
    name: '',
    path: '/risk',
    icon: 'icon-risk',
    children: []
  }
]

//业务管理系统左侧菜单
const bankMenu = {
  //保理菜单
  fc: [{
      label: '客户营销',
      name: '',
      path: '/bank/fc/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/fc/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
        label: '授信调查',
        name: '',
        path: '/bank/fc/incredit-manage-task',
        icon: ''
      }]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/fc/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/fc/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/fc/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/fc/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/fc/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/fc/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/fc/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/fc/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/fc/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/fc/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/fc/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/fc/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/fc/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/fc/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/fc/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '回购管理',
      name: '',
      path: '/bank/fc/repurchase-manage',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/fc/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //反向保理菜单
  rfc: [{
      label: '客户营销',
      name: '',
      path: '/bank/rfc/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/rfc/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/rfc/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/rfc/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/rfc/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/rfc/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/rfc/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/rfc/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/rfc/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/rfc/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/rfc/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/rfc/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/rfc/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/rfc/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/rfc/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/rfc/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/rfc/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/rfc/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/rfc/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '回购管理',
      name: '',
      path: '/bank/rfc/repurchase-manage',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/rfc/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //保兑仓菜单
  cb: [{
      label: '客户营销',
      name: '',
      path: '/bank/cb/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/cb/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/cb/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/cb/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/cb/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/cb/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/cb/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/cb/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/cb/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/cb/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/cb/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/cb/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/cb/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/cb/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '提货管理',
      name: '',
      path: '/bank/cb/delivery-review',
      icon: 'icon-undertake',
      children: [{
          label: '提货审查',
          name: '',
          path: '/bank/cb/delivery-review',
          icon: ''
        },
        {
          label: '提货记录',
          name: '',
          path: '/bank/cb/delivery-record',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/cb/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/cb/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/cb/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/cb/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/cb/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '退款管理',
      name: '',
      path: '/bank/cb/refund-manage',
      icon: 'icon-refund',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/cb/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //未来提货权仓库监管菜单
  sdw: [{
      label: '客户营销',
      name: '',
      path: '/bank/sdw/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/sdw/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/sdw/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/sdw/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/sdw/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/sdw/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/sdw/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/sdw/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/sdw/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/sdw/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/sdw/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/sdw/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/sdw/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/sdw/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '接货管理',
      name: '',
      path: '/bank/sdw/receiving-notice',
      icon: 'icon-undertake',
      children: [{
          label: '接货通知',
          name: '',
          path: '/bank/sdw/receiving-notice',
          icon: ''
        },
        {
          label: '接货记录',
          name: '',
          path: '/bank/sdw/receiving-record',
          icon: ''
        }
      ]
    },
    {
      label: '提货管理',
      name: '',
      path: '/bank/sdw/delivery-review',
      icon: 'icon-undertake',
      children: [{
          label: '提货审查',
          name: '',
          path: '/bank/sdw/delivery-review',
          icon: ''
        },
        {
          label: '提货记录',
          name: '',
          path: '/bank/sdw/delivery-record',
          icon: ''
        }
      ]
    },
    {
      label: '价格管理',
      name: '',
      path: '/bank/sdw/pricing',
      icon: 'icon-price',
      children: [{
          label: '核价',
          name: '',
          path: '/bank/sdw/pricing',
          icon: ''
        },
        {
          label: '盯市管理',
          name: '',
          path: '/bank/sdw/mark-manage',
          icon: ''
        }
      ]
    },
    {
      label: '核库',
      name: '',
      path: '/bank/sdw/verify-ware-house',
      icon: 'icon-price',
      children: []
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/sdw/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/sdw/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/sdw/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/sdw/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/sdw/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '退款管理',
      name: '',
      path: '/bank/sdw/refund-manage',
      icon: 'icon-refund',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/sdw/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //现货质押融资菜单
  spf: [{
      label: '客户营销',
      name: '',
      path: '/bank/spf/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/spf/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/spf/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/spf/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/spf/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/spf/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/spf/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/spf/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/spf/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/spf/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/spf/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '入库管理',
      name: '',
      icon: 'icon-undertake',
      path: '/bank/spf/ware-housing-register',
      children: [{
          label: '入库登记',
          name: 'ContractMainte',
          path: '/bank/spf/ware-housing-register',
          icon: ''
        },
        {
          label: '入库记录',
          name: '',
          path: '/bank/spf/ware-housing-record',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/spf/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/spf/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/spf/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '提货管理',
      name: '',
      path: '/bank/spf/delivery-review',
      icon: 'icon-undertake',
      children: [{
          label: '提货审查',
          name: '',
          path: '/bank/spf/delivery-review',
          icon: ''
        },
        {
          label: '提货记录',
          name: '',
          path: '/bank/spf/delivery-record',
          icon: ''
        }
      ]
    },
    {
      label: '价格管理',
      name: '',
      path: '/bank/spf/pricing',
      icon: 'icon-price',
      children: [{
          label: '核价',
          name: '',
          path: '/bank/spf/pricing',
          icon: ''
        },
        {
          label: '盯市管理',
          name: '',
          path: '/bank/spf/mark-manage',
          icon: ''
        }
      ]
    },
    {
      label: '核库',
      name: '',
      path: '/bank/spf/verify-ware-house',
      icon: 'icon-price',
      children: []
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/spf/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/spf/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/spf/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/spf/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/spf/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/spf/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //预付款融资菜单
  pf: [{
      label: '客户营销',
      name: '',
      path: '/bank/pf/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/pf/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/pf/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/pf/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/pf/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/pf/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/pf/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/pf/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/pf/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/pf/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/pf/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/pf/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/pf/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/pf/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/pf/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/pf/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/pf/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/pf/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/pf/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/pf/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //1+N保理菜单
  pfc: [{
      label: '客户营销',
      name: '',
      path: '/bank/pfc/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/pfc/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/pfc/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/pfc/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/pfc/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/pfc/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/pfc/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/pfc/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/pfc/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/pfc/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/pfc/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/pfc/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/pfc/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/pfc/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/pfc/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/pfc/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/pfc/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/pfc/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/pfc/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '回购管理',
      name: '',
      path: '/bank/pfc/repurchase-manage',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/pfc/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //订单融资菜单
  of: [{
      label: '授信调查',
      name: '',
      path: '/bank/of/incredit-manage-task',
      icon: 'icon-authorize',
      children: [{
        label: '授信调查',
        name: '',
        path: '/bank/of/incredit-manage-task',
        icon: ''
      }]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/of/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/of/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/of/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/of/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/of/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/of/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/of/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/of/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/of/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/of/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/of/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/of/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/of/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/of/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/of/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/of/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //租金贷菜单
  rl: [{
      label: '客户营销',
      name: '',
      path: '/bank/rl/customer-marketing',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '授信调查',
      name: '',
      path: '/bank/rl/client-manage-loanapply',
      icon: 'icon-authorize',
      children: [{
          label: '客户分配',
          name: '',
          path: '/bank/rl/client-manage-loanapply',
          icon: ''
        },
        {
          label: '授信调查',
          name: '',
          path: '/bank/rl/incredit-manage-task',
          icon: ''
        }
      ]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/rl/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/rl/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/rl/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/rl/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/rl/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/rl/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/rl/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/rl/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/rl/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/rl/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/rl/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/rl/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/rl/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/rl/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/rl/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '回购管理',
      name: '',
      path: '/bank/rl/repurchase-manage',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/rl/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //商户数据贷菜单
  mdl: [{
      label: '授信调查',
      name: '',
      path: '/bank/mdl/incredit-manage-task',
      icon: 'icon-authorize',
      children: [{
        label: '授信调查',
        name: '',
        path: '/bank/mdl/incredit-manage-task',
        icon: ''
      }]
    },
    {
      label: '授信审批',
      name: '',
      path: '/bank/mdl/client-manage-insidehand',
      icon: 'icon-credit',
      children: [{
          label: '审批任务分配',
          name: '',
          path: '/bank/mdl/client-manage-insidehand',
          icon: ''
        },
        {
          label: '授信审批',
          name: '',
          path: '/bank/mdl/client-approval-task',
          icon: ''
        },
        {
          label: '审批记录',
          name: '',
          path: '/bank/mdl/record-approval',
          icon: ''
        }
      ]
    },
    {
      label: '合同管理',
      name: '',
      icon: 'icon-contract',
      path: '/bank/mdl/contract-mainte',
      children: [{
          label: '合同维护',
          name: 'ContractMainte',
          path: '/bank/mdl/contract-mainte',
          icon: ''
        },
        {
          label: '合同档案',
          name: '',
          path: '/bank/mdl/contract-archive',
          icon: ''
        }
      ]
    },
    {
      label: '放款管理',
      name: '',
      path: '/bank/mdl/loan-review',
      icon: 'icon-loan',
      children: [{
          label: '放款审查',
          name: '',
          path: '/bank/mdl/loan-review',
          icon: ''
        },
        {
          label: '放款登记',
          name: '',
          path: '/bank/mdl/loan-register',
          icon: ''
        }
      ]
    },
    {
      label: '贷后管理',
      name: '',
      path: '/bank/mdl/risk-monitor',
      icon: 'icon-post-lending',
      children: [{
          label: '风险监测',
          name: '',
          path: '/bank/mdl/risk-monitor',
          icon: ''
        },
        {
          label: '预警通知',
          name: '',
          path: '/bank/mdl/warning-notice',
          icon: ''
        },
        {
          label: '预警认定',
          name: '',
          path: '/bank/mdl/warning-cognizance',
          icon: ''
        },
        {
          label: '预警解除',
          name: '',
          path: '/bank/mdl/warning-relieve',
          icon: ''
        }
      ]
    },
    {
      label: '还款管理',
      name: '',
      path: '/bank/fc/repay-manage',
      icon: 'icon-repay',
      children: []
    },
    {
      label: '台帐',
      name: '',
      path: '/bank/mdl/ledger',
      icon: 'icon-ledger',
      children: []
    }
  ]
}

const riskMenu = {
  //保理菜单
  fc: [{
      label: '规则设置',
      name: '',
      path: '/risk/fc/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/fc/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/fc/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/fc/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/fc/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/fc/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/fc/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //反向保理菜单
  rfc: [{
      label: '规则设置',
      name: '',
      path: '/risk/rfc/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/rfc/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/rfc/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/rfc/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/rfc/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/rfc/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/rfc/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //保兑仓菜单
  cb: [{
      label: '规则设置',
      name: '',
      path: '/risk/cb/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/cb/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/cb/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/cb/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/cb/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/cb/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/cb/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //未来提货权仓库监管菜单
  sdw: [{
      label: '规则设置',
      name: '',
      path: '/risk/sdw/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/sdw/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/sdw/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/sdw/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/sdw/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/sdw/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/sdw/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //现货质押融资菜单
  spf: [{
      label: '规则设置',
      name: '',
      path: '/risk/spf/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/spf/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/spf/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/spf/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/spf/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/spf/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/spf/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //预付款融资菜单
  pf: [{
      label: '规则设置',
      name: '',
      path: '/risk/pf/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/pf/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/pf/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/pf/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/pf/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/pf/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/pf/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //1+N保理菜单
  pfc: [{
      label: '规则设置',
      name: '',
      path: '/risk/pfc/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/pfc/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/pfc/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/pfc/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/pfc/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/pfc/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/pfc/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //订单融资菜单
  of: [{
      label: '规则设置',
      name: '',
      path: '/risk/of/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/of/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/of/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/of/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/of/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/of/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/of/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //租金贷菜单
  rl: [{
      label: '规则设置',
      name: '',
      path: '/risk/rl/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/rl/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/rl/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/rl/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/rl/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/rl/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/rl/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ],
  //商户数据贷菜单
  mdl: [{
      label: '规则设置',
      name: '',
      path: '/risk/mdl/rule-setting',
      icon: 'icon-authorize',
      children: []
    },
    {
      label: '数据管理',
      name: '',
      icon: 'icon-contract',
      path: '/risk/mdl/data-manage'
    },
    {
      label: '贷前风控',
      name: '',
      path: '/risk/mdl/risk-control-before',
      icon: 'icon-loan'
    },
    {
      label: '贷中风控',
      name: '',
      path: '/risk/mdl/risk-control-middle',
      icon: 'icon-post-lending'
    },
    {
      label: '贷后风控',
      name: '',
      path: '/risk/mdl/risk-control-after',
      icon: 'icon-repay'
    },
    {
      label: '核心企业检测',
      name: '',
      path: '/risk/mdl/enterprise-monitoring',
      icon: 'icon-buy-back',
      children: []
    },
    {
      label: '上市公司数据库',
      name: '',
      path: '/risk/mdl/company-database',
      icon: 'icon-ledger',
      children: []
    }
  ]
}
export {
  topMenu,
  bankMenu,
  riskMenu
}
