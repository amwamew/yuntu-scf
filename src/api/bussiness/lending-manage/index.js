import {
  $get
} from '@/utils/htpp'
/**
 * 获取放款登记数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getLoanRegister(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/放款管理/当前工作.json'
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
 * 获取放款审查数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getLoanReview(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/放款管理/放款记录.json'
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