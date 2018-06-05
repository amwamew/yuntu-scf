import {
  $get
} from '@/utils/htpp'
/**
 * 获取贷前中后风控数据
 * 
 * @export
 * @param {Object} paramsObject 参数对象
 */
// export function getRiskControl(paramsObject) {
//   const url = 'https://scf.yuntucredit.com//scf/授信调查/客户分配.json'
//   let params = {
//     type: 'fl', //默认类型，保理
//     page: 1
//   }
//   Object.assign(params, paramsObject)
//   return $get(url, params).then((res) => {
//     return res
//   })
// }