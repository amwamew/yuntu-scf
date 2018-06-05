import {
  $get
} from '@/utils/htpp'

/**
 * 获取客户营销数据
 * 
 * @export
 * @param {Object} paramsObject 参数，默认见params
 * @returns 
 */
export function getCustomerMarketing(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/客户营销/客户营销.json'
  let params = {
    type: 'fl', //默认类型，保理
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then(res => {
    return res
  })
}
