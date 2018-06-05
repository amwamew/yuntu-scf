import {
  $get
} from '@/utils/htpp'
/**
 * 获取核价数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getPricing(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/价格管理/核价.json'
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
 * 获取盯市管理数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getMarkManage(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/价格管理/盯市预警.json'
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