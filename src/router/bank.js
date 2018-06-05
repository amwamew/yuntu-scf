/*
 * FileName: 业务管理路由
 * Project: yuntu-scf-vue
 * File Created: Monday, 21st May 2018 4:48:06 pm
 * Author: LiuBing
 */
//总路由
const Index = resolve => {
  import ('@/views/index').then(module => {
    resolve(module)
  })
}

//业务处理首页路由
const BankIndex = resolve => {
  import ('@/views/bank/index').then(module => {
    resolve(module)
  })
}

//客户营销
const CustomerMarketing = resolve => {
  import ('@/views/bank/customer-marketing/customer-marketing').then(module => {
    resolve(module)
  })
}

//客户分配
const ClientManageLoanapply = resolve => {
  import ('@/views/bank/incredit-manage-task/client-manage-loanapply').then(
    module => {
      resolve(module)
    }
  )
}
//授信调查
const IncreditManageTask = resolve => {
  import ('@/views/bank/incredit-manage-task/incredit-manage-task').then(
    module => {
      resolve(module)
    }
  )
}

//审批任务分配
const ClientManageInsidehand = resolve => {
  import ('@/views/bank/client-approval-task/client-manage-insidehand').then(
    module => {
      resolve(module)
    }
  )
}
//授信审批
const ClientApprovalTask = resolve => {
  import ('@/views/bank/client-approval-task/client-approval-task').then(
    module => {
      resolve(module)
    }
  )
}
//审批记录
const RecordApproval = resolve => {
  import ('@/views/bank/client-approval-task/record-approval').then(module => {
    resolve(module)
  })
}

//合同维护
const ContractMainte = resolve => {
  import ('@/views/bank/contract-manage/contract-mainte').then(module => {
    resolve(module)
  })
}
//合同档案
const ContractArchive = resolve => {
  import ('@/views/bank/contract-manage/contract-archive').then(module => {
    resolve(module)
  })
}

//放款审查
const LoanReview = resolve => {
  import ('@/views/bank/lending-manage/loan-review').then(module => {
    resolve(module)
  })
}
//放款登记
const LoanRegister = resolve => {
  import ('@/views/bank/lending-manage/loan-register').then(module => {
    resolve(module)
  })
}

//入库登记
const WareHousingRegister = resolve => {
  import ('@/views/bank/ware-housing-manage/ware-housing-register').then(
    module => {
      resolve(module)
    }
  )
}
//入库记录
const WareHousingRecord = resolve => {
  import ('@/views/bank/ware-housing-manage/ware-housing-record').then(
    module => {
      resolve(module)
    }
  )
}

//风险监测
const RiskMonitor = resolve => {
  import ('@/views/bank/post-loan-manage/risk-monitor').then(module => {
    resolve(module)
  })
}
//预警通知
const WarningNotice = resolve => {
  import ('@/views/bank/post-loan-manage/warning-notice').then(module => {
    resolve(module)
  })
}
//预警认定
const WarningCognizance = resolve => {
  import ('@/views/bank/post-loan-manage/warning-cognizance').then(module => {
    resolve(module)
  })
}
//预警解除
const WarningRelieve = resolve => {
  import ('@/views/bank/post-loan-manage/warning-relieve').then(module => {
    resolve(module)
  })
}
//核价
const Pricing = resolve => {
  import ('@/views/bank/price-manage/pricing').then(module => {
    resolve(module)
  })
}
//盯市管理
const MarkManage = resolve => {
  import ('@/views/bank/price-manage/mark-manage').then(module => {
    resolve(module)
  })
}
//还款管理
const RepayManage = resolve => {
  import ('@/views/bank/repay-manage/repay-manage').then(module => {
    resolve(module)
  })
}
//接货通知
const ReceivingNotice = resolve => {
  import ('@/views/bank/receiving-manage/receiving-notice').then(module => {
    resolve(module)
  })
}
//接货记录
const ReceivingRecord = resolve => {
  import ('@/views/bank/receiving-manage/receiving-record').then(module => {
    resolve(module)
  })
}
//提货审查
const DeliveryReview = resolve => {
  import ('@/views/bank/delivery-manage/delivery-review').then(module => {
    resolve(module)
  })
}
//提货记录
const DeliveryRecord = resolve => {
  import ('@/views/bank/delivery-manage/delivery-record').then(module => {
    resolve(module)
  })
}

//回购管理
const RepurchaseManage = resolve => {
  import ('@/views/bank/repurchase-manage/repurchase-manage').then(module => {
    resolve(module)
  })
}

//核库
const VerifyWareHouse = resolve => {
  import ('@/views/bank/verify-ware-house/verify-ware-house').then(module => {
    resolve(module)
  })
}
//退款管理
const RefundManage = resolve => {
  import ('@/views/bank/refund-manage/refund-manage').then(module => {
    resolve(module)
  })
}
//台帐
const Ledger = resolve => {
  import ('@/views/bank/ledger/ledger').then(module => {
    resolve(module)
  })
}

export default [{
  path: '/bank',
  name: 'Bank',
  component: Index,
  meta: {
    title: '业务管理'
  },
  children: [{
    path: ':type',
    name: 'Bank',
    component: BankIndex,
    children: [{
        path: 'customer-marketing', //客户营销
        name: 'CustomerMarketing',
        component: CustomerMarketing,
        meta: {
          title: '客户营销',
        }
      },
      {
        path: 'client-manage-loanapply', //客户分配
        name: 'ClientManageLoanapply',
        component: ClientManageLoanapply,
        meta: {
          title: '客户分配',
        }
      },
      {
        path: 'incredit-manage-task', //授信调查
        name: 'IncreditManageTask',
        component: IncreditManageTask,
        meta: {
          title: '授信调查',
          parentTitle: '授信调查'
        }
      },
      {
        path: 'client-manage-insidehand', //审批任务分配
        name: 'ClientManageInsidehand',
        component: ClientManageInsidehand
      },
      {
        path: 'client-approval-task', //授信审批
        name: 'ClientApprovalTask',
        component: ClientApprovalTask
      },
      {
        path: 'record-approval', //审批记录
        name: 'RecordApproval',
        component: RecordApproval
      },
      {
        path: 'contract-mainte', //合同维护
        name: 'ContractMainte',
        component: ContractMainte
      },
      {
        path: 'contract-archive', //合同档案
        name: 'ContractArchive',
        component: ContractArchive
      },
      {
        path: 'loan-review', //放款审查
        name: 'LoanReview',
        component: LoanReview
      },
      {
        path: 'loan-register', //放款登记
        name: 'LoanRegister',
        component: LoanRegister
      },
      {
        path: 'ware-housing-register', //入库登记
        name: 'WareHousingRegister',
        component: WareHousingRegister
      },
      {
        path: 'ware-housing-record', //入库记录
        name: 'WareHousingRecord',
        component: WareHousingRecord
      },
      {
        path: 'risk-monitor', //风险监测
        name: 'RiskMonitor',
        component: RiskMonitor
      },
      {
        path: 'warning-notice', //预警通知
        name: 'WarningNotice',
        component: WarningNotice
      },
      {
        path: 'warning-cognizance', //预警认定
        name: 'WarningCognizance',
        component: WarningCognizance
      },
      {
        path: 'warning-relieve', //预警解除
        name: 'WarningRelieve',
        component: WarningRelieve
      },
      {
        path: 'pricing', //核价
        name: 'Pricing',
        component: Pricing
      },
      {
        path: 'mark-manage', //盯市管理
        name: 'MarkManage',
        component: MarkManage
      },
      {
        path: 'repay-manage', //还款管理
        name: 'RepayManage',
        component: RepayManage
      },
      {
        path: 'receiving-notice', //接货通知
        name: 'ReceivingNotice',
        component: ReceivingNotice
      },
      {
        path: 'receiving-record', //接货记录
        name: 'ReceivingRecord',
        component: ReceivingRecord
      },
      {
        path: 'delivery-review', //提货审查
        name: 'DeliveryReview',
        component: DeliveryReview
      },
      {
        path: 'delivery-record', //提货记录
        name: 'DeliveryRecord',
        component: DeliveryRecord
      },
      {
        path: 'repurchase-manage', //回购管理
        name: 'RepurchaseManage',
        component: RepurchaseManage
      },
      {
        path: 'verify-ware-house', //核库
        name: 'VerifyWareHouse',
        component: VerifyWareHouse
      },
      {
        path: 'refund-manage', //退款管理
        name: 'RefundManage',
        component: RefundManage
      },
      {
        path: 'ledger', //台帐
        name: 'Ledger',
        component: Ledger
      }
    ]
  }]
}]
