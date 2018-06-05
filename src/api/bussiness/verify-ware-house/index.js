import {
  $get
} from '@/utils/htpp'
/**
 * 获取核库数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getVerifyWareHouse(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/核库/核库.json'
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