import {
  $get
} from '@/utils/htpp'
/**
 * 获取提货审查数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getDeliveryReview(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/提货管理/提货审查.json'
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
 * 获取提货记录数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getDeliveryRecord(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/提货管理/提货记录.json'
  let params = {
    type: 'fl',
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}