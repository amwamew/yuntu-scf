import {
  $get
} from '@/utils/htpp'
/**
 * 获取接货通知数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getReceivingNotice(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/接货管理/接货通知.json'
  let params = {
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}

/**
 * 获取接货记录数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getReceivingRecord(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/接货管理/接货记录.json'
  let params = {
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}