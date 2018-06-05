/*
 * FileName: 行政处罚
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:33:21 pm
 * Author: LiuBing
 */
<template>
  <div class="sanction">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="5"
            colspan="1">{{ index + 1 }}</td>
          <td>行政处罚决定书文号 </td>
          <td>{{ item.punishNumber }}</td>
          <td>注册号</td>
          <td>{{ item.regNum }}</td>
        </tr>
        <tr>
          <td>公司名称</td>
          <td>{{ item.name }}</td>
          <td>法定代表人</td>
          <td>{{ item.legalPersonName }}</td>
        </tr>
        <tr>
          <td>违法行为类型</td>
          <td></td>
          <td>违法行为</td>
          <td>{{ item.type }}</td>
        </tr>
        <tr>
          <td>做出行政处罚决定机关名称</td>
          <td>{{ item.departmentName }}</td>
          <td>做出行政处罚决定日期</td>
          <td>{{ item.publishDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          content: '罚款0.1万元，没收违法所得和非法财物',//行政处罚内容
          punishNumber: '德工商处字(2015)303 号',//行政处罚决定书文号
          regNum: '350526600032666',//注册号
          description: null,//描述
          name: '德化县孙壁电器商店',//公司名称
          base: 'fj',//省份简称
          decisionDate: '2015-10-14',//作出行政处罚决定日期
          legalPersonName: '余孙壁',//法定代表人（负责人）姓名
          type: '违反,对擅自销售卫星地面接收设施的行政处罚',//违法行为类型
          departmentName: '福建省德化县工商行政管理局',//作出行政处罚决定机关名称
          publishDate: '2015-11-17'//公示日期
        }
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
.sanction
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>