/*
 * FileName: 企业对外投资
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:03:08 pm
 * Author: LiuBing
 */
<template>
  <div class="invest">
    <invest :data="invest"></invest>
  </div>
</template>

<script>
import Invest from '../../components/invest'
export default {
  components: {
    Invest
  },
  data() {
    return {
      //对外投资
      invest: [
        {
          orgType: '其他有限责任公司', //公司类型
          //经营范围
          business_scope:
            '计算机系统、网络系统的技术开发、技术服务、技术咨询；计算机系统服务；基础软件服务；应用软件服务；设计、制作、代理、发布广告；组织文化艺术交流活动（不含营业性演出）；企业策划；影视策划；公共关系服务；教育咨询；文化咨询；承办展览展示活动；会议服务；版权转让；版权代理；市场调查；经济贸易咨询；销售家用电器、机械设备、电子产品、文化用品、照相器材、计算机、软件及辅助设备、化妆品、体育用品、针纺织品、服装、鞋帽、日用杂货、首饰、工艺品、钟表、眼镜、玩具、汽车及摩托车配件、通讯设备；货物进出口、技术进出口、代理进出口；从事互联网文化活动。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）',
          percent: '53.35%', //投资占比
          regStatus: '开业', //经营状态
          estiblishTime: 1459440000000, //开业时间
          legalPersonName: '胡浩', //法人
          type: 1, //1-公司 2-人
          pencertileScore: 9241, //评分
          legalPersonId: 2127300139, //法人id
          amount: 276.5283, //投资金额
          id: 2350111935, //公司id
          category: '科技推广和应用服务业', //行业
          regCapital: '518.3251 万元', //注册资本
          name: '北京互娱科技有限公司', //被投资公司名
          base: 'bj', //省份简称
          creditCode: '91110108MA004HKR33', //统一社会信用代码
          personType: 1 //1 人 2 公司
        },
        {
          orgType: '有限责任公司(自然人投资或控股)',
          business_scope:
            '技术推广服务；计算机系统服务；设计、制作、代理、发布广告；经济信息咨询。（依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动。）',
          percent: '40.87%',
          regStatus: '开业',
          estiblishTime: 1317312000000,
          legalPersonName: '黄修源',
          type: 1,
          pencertileScore: 5598,
          legalPersonId: 2295273700,
          amount: 58.75,
          id: 33978180,
          category: '科技推广和应用服务业',
          regCapital: '143.75 万元 人民币',
          name: '北京科技有限公司',
          base: 'bj',
          creditCode: '91110101584477119R',
          personType: 1
        },
        {
          orgType: '有限责任公司(自然人投资或控股)',
          business_scope:
            '移动电话机、移动终端的研发、生产（仅限分支机构经营）；技术推广服务；销售计算机、软件及辅助设备、电子产品、通讯设备；产品设计；维修手机、电话；会议及展览服务；经济贸易咨询；设计、代理、发布广告；软件设计。 移动电话机、移动终端的研发、生产（仅限分支机构经营）。（依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）',
          percent: '12.01%',
          regStatus: '开业',
          estiblishTime: 1354550400000,
          legalPersonName: '张伟华',
          type: 1,
          pencertileScore: 9217,
          legalPersonId: 1920914416,
          amount: 301.5,
          id: 24644208,
          category: '科技推广和应用服务业',
          regCapital: '2509.9865 万元 人民币',
          name: '北京科技有限公司',
          base: 'bj',
          creditCode: '91110106059289814B',
          personType: 1
        },
        {
          orgType: '有限责任公司',
          business_scope: '计算机软件的设计、研发、销售。；从事广告业务。；',
          percent: '3.00%',
          regStatus: '存续（在营、开业、在册）',
          estiblishTime: 1418659200000,
          legalPersonName: '李柯',
          type: 1,
          pencertileScore: 5900,
          legalPersonId: 1986424252,
          amount: 4.8077,
          id: 1284552427,
          category: '软件和信息技术服务业',
          regCapital: '(人民币)160.2563万元',
          name: '深圳科技有限公司',
          base: 'gd',
          creditCode: '91440300319757355B',
          personType: 1
        },
        {
          orgType: '其他有限责任公司',
          business_scope:
            '组织文化艺术交流活动（不含演出）；文艺创作；资料编辑；会议服务；承办展览展示活动；从事文化经纪业务；设计、制作、代理、发布广告；电脑动画设计；软件开发；技术推广服务；销售工艺品、橡胶制品、塑料制品、钟表、眼镜（不含隐形眼镜）、玩具、体育用品、针纺织品、服装、日用品、化妆品、五金交电（不从事实体店铺经营）、电子产品、文具用品、照相器材；从事文化经纪业务；演出经纪；从事互联网文化活动。（企业依法自主选择经营项目，开展经营活动；演出经纪以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）',
          estiblishTime: 1409155200000,
          regStatus: '开业',
          type: 1,
          legalPersonName: '钱实穆',
          pencertileScore: 9840,
          legalPersonId: 2235722430,
          id: 934605,
          amount: 0,
          category: '文化艺术业',
          regCapital: '3454.3907 万元',
          name: '北京音乐文化发展有限公司',
          base: 'bj',
          creditCode: '911101053067230171',
          personType: 1
        }
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>