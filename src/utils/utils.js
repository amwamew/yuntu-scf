const getObjectFirst = data => {
  for (var key in data) return data[key]
}

/**
 * 用于动态计算元素应有的高度
 *
 * @param {Array} elementsId 元素id集合
 * @param {Number} other 其他数值，默认0
 * @returns
 */
const calculateElementHeight = (elementsId, other = 0) => {
  const documengHeight = document.documentElement.clientHeight
  let elementsHeight = 0
  elementsId.forEach(element => {
    let eleId = document.getElementById(element)
    if (eleId) {
      elementsHeight += eleId.clientHeight
    }
  })
  return documengHeight - elementsHeight - other
}

/**
 * 时间戳转日期
 * 
 * @param {any} timestamp 时间戳
 */
const timestampToTime = timestamp => {
  const length = timestamp.toString().length
  var date = new Date(length === 10 ? timestamp * 1000 : timestamp * 1), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-',
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
    D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return Y + M + D
}

export {
  getObjectFirst,
  calculateElementHeight,
  timestampToTime
}
