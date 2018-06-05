/**
 * 判断是否含有某个class
 * 
 * @export
 * @param {any} ele 元素
 * @param {any} cls class名
 * @returns 
 */
export function hasClass(ele, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ')
}
/**
 * 添加class
 * 
 * @export
 * @param {any} ele 元素
 * @param {any} cls 需要添加的class名
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className = ele.className == '' ? cls : ele.className + ' ' + cls
  }
}
/**
 * 移出class
 * 
 * @export
 * @param {any} ele 元素
 * @param {any} cls 需要移除的class名
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' '
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ')
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}
