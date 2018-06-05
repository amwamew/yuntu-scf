import {
  $get
} from '@/utils/htpp'

/**
 * 获取审批任务分配数据
 * 
 * @export
 * @param {Object} paramsObject 参数，默认见params
 * @returns 
 */
export function getClientManageInsidehand(paramsObject) {
  const url = 'https://scf.yuntucredit.com/scf/授信审批/审批任务分配.json'
  let params = {
    type: 'fl', //默认类型，保理
    status: 0, //0全部,1待分配,已分配
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then(res => {
    return res
  })
}

/**
 * 获取授信审批数据
 * 
 * @export
 * @param {Object} paramsObject 参数，默认见params
 * @returns 
 */
export function getClientApprovalTask(paramsObject) {
  const url = 'https://scf.yuntucredit.com/scf/授信审批/授信审批.json'
  let params = {
    type: 'fl', //默认类型，保理
    status: 0, //0全部,1待分配,已分配
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then(res => {
    return res
  })
}

/**
 * 获取审批记录数据
 * 
 * @export
 * @param {Object} paramsObject 参数，默认见params
 * @returns 
 */
export function getRecordApproval(paramsObject) {
  const url = 'https://scf.yuntucredit.com/scf/放款管理/放款记录.json'
  let params = {
    type: 'fl', //默认类型，保理
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then(res => {
    return res
  })
}