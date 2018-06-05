import numeral from 'numeral'

/**
 * 格式化金额
 * 如123456->123,456
 * Doc:http://numeraljs.com/#settings
 * @export
 * @param {any} money 需要格式化的金额
 * @returns
 */
export function numeralMoney(money) {
  return numeral(money).format('0,0')
}
