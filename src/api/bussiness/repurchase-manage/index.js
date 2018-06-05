import {
  $get
} from '@/utils/htpp'
/**
 * 获取回购管理数据
 * 
 * @export
 * @param {Object} paramsObject 参数数据
 */
export function getRepurchaseManage(paramsObject) {
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