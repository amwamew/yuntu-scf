/*
 * FileName: 工商基本信息
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 1:56:21 pm
 * Author: LiuBing
 */
<template>
  <div class="info">
    <el-collapse v-model="actives">
      <el-collapse-item title="注册信息"
        name="1">
        <table class="my-table">
          <tbody>
            <tr>
              <td width="10%">企业名称</td>
              <td>{{ basicInfo.name }}</td>
              <td width="10%">工商注册号</td>
              <td>{{ basicInfo.regNumber }}</td>
            </tr>
            <tr>
              <td width="10%">注册时间</td>
              <td>{{ basicInfo.registerTime }}</td>
              <td width="10%">法人姓名</td>
              <td>{{ basicInfo.legalPersonName }}</td>
            </tr>
            <tr>
              <td width="10%">注册资金</td>
              <td>{{ basicInfo.regCapital }}</td>
              <td width="10%">企业状态</td>
              <td>{{ basicInfo.regStatus }}</td>
            </tr>
            <tr>
              <td width="10%">注册地址</td>
              <td>{{ basicInfo.regLocation }}</td>
              <td width="10%">公司类型</td>
              <td>{{ basicInfo.companyOrgType }}</td>
            </tr>
            <tr>
              <td width="10%">统一社会信用代码</td>
              <td>{{ basicInfo.creditCode }}</td>
              <td width="10%">组织机构代码</td>
              <td>{{ basicInfo.orgNumber }}</td>
            </tr>
            <tr>
              <td width="10%">核准机关</td>
              <td>{{ basicInfo.orgApprovedInstitute }}</td>
              <td width="10%">核准日期</td>
              <td>{{ basicInfo.approvedTime }}</td>
            </tr>
            <tr>
              <td width="10%">电话</td>
              <td>{{ basicInfo.phoneNumber }}</td>
              <td width="10%">邮箱</td>
              <td>{{ basicInfo.email }}</td>
            </tr>
            <tr>
              <td width="10%">行业</td>
              <td>{{ basicInfo.industry }}</td>
              <td width="10%">公司网站</td>
              <td>{{ basicInfo.websiteList }}</td>
            </tr>
            <tr>
              <td width="10%">经营范围</td>
              <td colspan="3">
                {{ basicInfo.businessScope }}
              </td>
            </tr>
          </tbody>
        </table>
      </el-collapse-item>

      <el-collapse-item :title="collapseTitle('股东信息',2)"
        name="2">
        <el-table :data="holder"
          border
          style="width: 100%">
          <el-table-column prop="name"
            label="股东姓名">
          </el-table-column>
          <el-table-column prop="type"
            label="股东类型">
          </el-table-column>
          <el-table-column prop="amount"
            label="出资额">
          </el-table-column>
          <el-table-column prop="persent"
            label="出资比例">
          </el-table-column>
        </el-table>
      </el-collapse-item>

      <el-collapse-item :title="collapseTitle('主要人员',3)"
        name="3">
        <el-table :data="staff"
          border
          style="width: 100%">
          <el-table-column prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column prop="typeJoin"
            label="职位">
          </el-table-column>
        </el-table>
      </el-collapse-item>

      <el-collapse-item :title="collapseTitle('对外投资企业',4)"
        name="4">
        <Invest :data="invest"></Invest>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import Invest from '../../components/invest'
import { mapGetters } from 'vuex'
import { timestampToTime } from '@/utils/utils'
export default {
  components: {
    Invest
  },
  data() {
    return {
      actives: ['1', '2', '3', '4'],
      //股东信息
      holder: [
        {
          name: '石亮',
          type: '自然人股东',
          amount: '290.00万元',
          persent: '96.67%'
        },
        {
          name: '辛园园',
          type: '自然人股东',
          amount: '10.00万元',
          persent: '3.33%'
        }
      ],
      //主要人员
      staff: [
        {
          typeJoin: ['执行董事'],
          name: '石亮'
        },
        {
          typeJoin: ['监事'],
          name: '辛园园'
        }
      ],
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
      //分支机构
      branch: [
        {
          id: 491013854, //公司id
          category: '662', //行业code
          regCapital: '0万元', //注册资金
          name: '银行股份有限公司深圳宝安赛格社区支行', //分支名称
          base: 'gd', //省份简称
          estiblishTime: 1414425600000, //开业时间
          regStatus: '存续（在营、开业、在册）', //经营状态
          legalPersonName: '刘培东', //法人
          type: 1, //1-公司 2-人
          pencertileScore: 3779 //评分
        },
        {
          id: 861453224,
          category: '662',
          regCapital: '0万元',
          name: '银行股份有限公司深圳笋岗工艺城社区支行',
          base: 'gd',
          estiblishTime: 1414339200000,
          regStatus: '存续（在营、开业、在册）',
          legalPersonName: '梅石',
          type: 1,
          pencertileScore: 3430
        },
        {
          id: 1024165819,
          category: '662',
          regCapital: '(人民币)0.0000万元',
          name: '发展银行深圳中心支行',
          base: 'gd',
          estiblishTime: 912009600000,
          regStatus: '已注销',
          legalPersonName: '熊元军',
          type: 1,
          pencertileScore: 2985
        },
        {
          id: 1109900876,
          category: '662',
          regCapital: '(人民币)0.0000万元',
          name: '发展银行股份有限公司总行营业部',
          base: 'gd',
          estiblishTime: 883065600000,
          regStatus: '已注销',
          legalPersonName: '杨志红',
          type: 1,
          pencertileScore: 3313
        },
        {
          id: 1109901467,
          category: '662',
          regCapital: '(人民币)0.0000万元',
          name: '发展银行股份有限公司深圳香蜜支行',
          base: 'gd',
          estiblishTime: 968083200000,
          regStatus: '已注销',
          legalPersonName: '温鹏飞',
          type: 1,
          pencertileScore: 3177
        }
      ]
    }
  },
  created() {
    this._getEnterpriseBasicInfo()
    this.formatHolder()
  },
  computed: {
    ...mapGetters(['enterpriseBasicInfo'])
  },
  methods: {
    formatHolder() {
      this.staff.forEach(item => {
        item.typeJoin = item.typeJoin.join(',')
      })
    },
    formatBranch() {
      this.invest.forEach(item => {
        item.estiblishTime = timestampToTime(item.estiblishTime)
        item.type = item.type === 1 ? '公司' : '个人'
        item.personType = item.personType === 1 ? '公司' : '个人'
        item.amount = item.amount + '万元'
      })
    },
    collapseTitle(text, name) {
      let length = ''
      switch (name) {
        case 2:
          length = this.holder.length
          break
        case 3:
          length = this.staff.length
          break
        case 4:
          length = this.invest.length
          break
      }
      return `${text}(${length})`
    },
    _getEnterpriseBasicInfo() {
      this.basicInfo = this.enterpriseBasicInfo
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  .my-table
    td,th
      padding: 10px
</style>