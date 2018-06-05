import {
  $get
} from '@/utils/htpp'
/**
 * 获取风险监测数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getRiskMonitor(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/贷后管理/全部客户.json'
  let params = {
    status: 0,
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}

/**
 * 获取预计通知数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getWarningNotice(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/贷后管理/全部客户.json'
  let params = {
    status: 0,
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}

/**
 * 获取预计认定数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getWarningCognizance(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/贷后管理/已认定预警.json'
  let params = {
    status: 0,
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}

/**
 * 获取预警解除数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getWarningRelieve(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/贷后管理/已解除预警.json'
  let params = {
    status: 0,
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}
