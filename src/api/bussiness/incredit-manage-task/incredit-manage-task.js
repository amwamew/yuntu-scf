import {
  $get
} from '@/utils/htpp'
/**
 * 获取授信调查数据
 * 
 * @export
 * @param {string} [type='fc'] 业务类型，默认保理
 * @param {number} [status=0] 处理状态，默认0全部，1待处理，2待提交
 * @param {string} [value=''] 输入框输入的值
 */
export function getIncreditManageTask(paramsObject) {
  const url = 'https://scf.yuntucredit.com//scf/授信调查/授信调查.json'
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
