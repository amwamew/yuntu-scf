import { $get } from '@/utils/htpp'

/**
 * 获取首页头部统计数据
 *
 * @export
 * @returns
 */
export function getTopData() {
  const url = '/home/top'
  return $get(url).then(res => {
    return res
  })
}

/**
 * 获取待办事项
 *
 * @export
 * @param {String} type 待办事项类型
 * @returns
 */
export function getToDoList(type) {
  const url = '/home/todo'
  return $get(url, {
    type
  }).then(res => {
    return res
  })
}

/**
 * 获取预警数据
 *
 * @export
 * @param {String} company 公司
 * @param {String} level   预警等级
 * @returns
 */
export function getWaringList(company, level) {
  const url = '/home/risk-waring'
  return $get(url, {
    company,
    level
  }).then(res => {
    return res
  })
}
