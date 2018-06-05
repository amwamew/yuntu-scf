/*
 * FileName: 数据管理模拟数据
 * Project: yuntu-scf-vue
 * File Created: Thursday, 24th May 2018 1:50:46 pm
 * Author: LiuBing
 */

const dataManage = {
  "note": "审批结论(creditApprove)：0-建议否决，1-建议通过; 进入贷后设置(conf):1-是，0-否; 按钮状态(btn): 1-上传业务报告，2-查看风控报告",
  "pageIndex": 1,
  "pageSize": 20,
  "totalCount": 8,
  "totalPageCount": 1,
  "data": [{
    "submitDt": "HRYB00001",
    "pname": "阜南县金宇食品商贸有限公司",
    "name": "石亮",
    "creditSubmit": "未推荐",
    "creditData":"0",
    "loanData":"0"
  }, {
    "submitDt": "HRYB00001",
    "pname": "谯城区佳兴食品经营部",
    "name": "贾春堂",
    "creditSubmit": "未推荐",
    "creditData":"0",
    "loanData":"0"
  }, {
    "submitDt": "HRYB00001",
    "name": "杨波",
    "pname": "涡阳县博洋食品经营部",
    "creditSubmit": "已推荐",
    "creditData":"1",
    "loanData":"1"
  }, {
    "submitDt": "HRYB00001",
    "name": "刘甲",
    "pname": "太和县双利食品有限公司",
    "creditSubmit": "已推荐",
    "creditData":"1",
    "loanData":"1"
  }, {
    "submitDt": "HRYB00001",
    "name": "杨文军",
    "pname": "颍上华意辰帅商贸有限责任公司",
    "creditSubmit": "已推荐",
    "creditData":"1",
    "loanData":"1"
  }],
  "success": true,
  "msg": null,
  "errorCode": null
}
export default dataManage