import {
  $get
} from '@/utils/htpp'
/**
 * 获取客户分配数据
 * 
 * @export
 * @param {Object} paramsObject 参数对象
 */
export function getClientManageLoanapply(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/授信调查/客户分配.json'
  let params = {
    status: 0, //处理状态，0全部、1待处理、2待提交
    type: 'fl', //默认类型，保理
    page: 1
  }
  Object.assign(params, paramsObject)
  return $get(url, params).then((res) => {
    return res
  })
}
