import {
  $get
} from '@/utils/htpp'
/**
 * 获取入库登记数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getWareHousingRegister(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/提货管理/提货审查.json'
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
 * 获取入库记录数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getWareHousingRecord(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/提货管理/提货审查.json'
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