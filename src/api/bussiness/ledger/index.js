import {
  $get
} from '@/utils/htpp'
/**
 * 获取台帐数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getLedger(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/台账/台账.json'
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