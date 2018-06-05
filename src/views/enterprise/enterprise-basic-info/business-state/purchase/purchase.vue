/*
 * FileName: 购地信息
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:45:28 pm
 * Author: LiuBing
 */
<template>
  <div class="purchase">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="9"
            colspan="1">{{ index + 1 }}</td>
          <td width="100">公司名称：</td>
          <td width="100"
            colspan="3">{{ item. companyName}}</td>
          <!-- <td width="70"> 执行依据文号：</td>
          <td>{{ item.gistid}}</td> -->
        </tr>
        <tr>
          <td>行政区：</td>
          <td width="300">{{ item.adminRegion }}</td>
          <td width="100"> 电子监管号：</td>
          <td width="100">{{ item.elecSupervisorNo }}</td>
        </tr>
        <tr>
          <td>签订日期：</td>
          <td>{{ item.signedDate }}</td>
          <td>供地总面积:</td>
          <td>{{ item.totalArea }}</td>
        </tr>
        <tr>
          <td>宗地位置：</td>
          <td colspan="3">{{ item.location }}</td>
          <!-- <td>全部分类号：</td>
          <td>{{ item.allCatNum }}</td> -->
        </tr>
        <tr>
          <td>受让人：</td>
          <td>{{ item.assignee }}</td>
          <td>上级公司：</td>
          <td>{{ item.parentCompany }}</td>
        </tr>
        <tr>
          <td>土地用途：</td>
          <td>{{ item.purpose }}</td>
          <td>供应方式：</td>
          <td>{{ item.supplyWay }}</td>
        </tr>
        <tr>
          <td>最小容积率：</td>
          <td>{{ item.minVolume }}</td>
          <td>最大容积率：</td>
          <td>{{ item.maxVolume }}</td>
        </tr>
        <tr>
          <td>成交价款：</td>
          <td>{{ item.dealPrice }}</td>
          <td>链接：</td>
          <td>{{ item.linkUrl }}</td>
        </tr>
        <tr>
          <td>约定动工时间：</td>
          <td>{{ item.startTime }}</td>
          <td>约定竣工时间：</td>
          <td>{{ item.endTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { timestampToTime } from '@/utils/utils'
export default {
  data() {
    return {
      data: [
        {
          adminRegion: '浦口区',//行政区
          assignee: '金地集团南京置业发展有限公司',//受让人
          createTime: 1466571606000,//创建时间
          dealPrice: '40500.0000',//成交价款（万元）
          elecSupervisorNo: '3201112014B00587',//电子监管号
          endTime: 1515945600000,//约定竣工时间
          id: 859,//对应表id
          linkUrl:   //链接
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=8D155DAE-D059-4DC7-8C2C-DC27E5F161E2',
          location: '浦口区江浦街道',//宗地位置
          maxVolume: '1.80',//最大容积率
          minVolume: '1.01',//最小容积率
          parentCompany: '金地（集团）股份有限公司',//上级公司
          purpose: '其他普通商品住房用地',//土地用途
          signedDate: 1404662400000,//签订日期
          startTime: 1452787200000,//约定动工时间
          supplyWay: '挂牌出让',//供应方式
          totalArea: '4.451250',//供地总面积(公顷)
          updateTime: 1466571606000 //更新时间
        },
        {
          adminRegion: '吴中区',
          assignee: '金地集团上海房地产发展有限公司',
          createTime: 1466571612000,
          dealPrice: '42678.6433',
          elecSupervisorNo: '3205062014B00082',
          endTime: 1489680000000,
          id: 867,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=CF49168E-F19B-4919-A674-B7CA1E0C1668',
          location: '吴中区宝带路北侧、月浜街西侧',
          maxVolume: '1.80',
          minVolume: '1.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1393257600000,
          startTime: 1426521600000,
          supplyWay: '挂牌出让',
          totalArea: '2.633060',
          updateTime: 1466571612000
        },
        {
          adminRegion: '北京市本级',
          assignee: '北京金地兴业房地产有限公司',
          createTime: 1466570936000,
          dealPrice: '216000.0000',
          elecSupervisorNo: '1101002014B00547',
          endTime: 1517328000000,
          id: 387,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=0E57A645-0FB1-4728-B1DB-78F3A491291C',
          location: '顺义区新城第19街区',
          maxVolume: '1.80',
          minVolume: '1.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1392739200000,
          startTime: 1422633600000,
          supplyWay: '挂牌出让',
          totalArea: '8.466600',
          updateTime: 1466570936000
        },
        {
          adminRegion: '东莞市',
          assignee: '东莞市金地房地产投资有限公司',
          createTime: 1466571055000,
          dealPrice: '42020.0000',
          elecSupervisorNo: '4419002013B00919',
          endTime: 1501776000000,
          id: 522,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=5DE18102-5E61-48A3-B79E-A50B58E235BC',
          location: '塘厦镇林村',
          maxVolume: '2.50',
          minVolume: '1.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1373299200000,
          startTime: 1407081600000,
          supplyWay: '挂牌出让',
          totalArea: '4.932200',
          updateTime: 1466571055000
        },
        {
          adminRegion: '郑州市本级',
          assignee: '金地集团武汉房地产开发有限公司',
          createTime: 1466571030000,
          dealPrice: '24016.0000',
          elecSupervisorNo: '4101002013B04107-1',
          endTime: 1467388800000,
          id: 492,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=BC4C7707-EFF8-4E58-9F65-97A100C2ABF0',
          location: '铁军路东、航海东路北',
          maxVolume: '3.50',
          minVolume: '1.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1372694400000,
          startTime: 1404230400000,
          supplyWay: '挂牌出让',
          totalArea: '4.086600',
          updateTime: 1466571030000
        },
        {
          adminRegion: '扬州市本级',
          assignee: '金地集团上海房地产发展有限公司',
          createTime: 1466572116000,
          dealPrice: '104126.1855',
          elecSupervisorNo: '3210002013B00258',
          endTime: 1473782400000,
          id: 1065,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=AEC3B756-0D00-4E3D-B349-4C99ADD60801',
          location: '站南路西侧、京华城西路南侧',
          maxVolume: '2.20',
          minVolume: '1.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1363104000000,
          startTime: 1410624000000,
          supplyWay: '拍卖出让',
          totalArea: '16.007100',
          updateTime: 1466572116000
        },
        {
          adminRegion: '杭州市本级',
          assignee: '杭州金地自在城房地产发展有限公司',
          createTime: 1466572127000,
          dealPrice: '54746.0000',
          elecSupervisorNo: '3301002013B00794',
          endTime: 1521561600000,
          id: 1074,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=27DCA2BF-98D9-4285-ADE5-9CFAB4B23168',
          location: '江干区(长睦单元R21-07地块)',
          maxVolume: '2.30',
          minVolume: '2.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '中低价位、中小套型普通商品住房用地',
          signedDate: 1363017600000,
          startTime: 1426953600000,
          supplyWay: '挂牌出让',
          totalArea: '5.416500',
          updateTime: 1466572127000
        },
        {
          adminRegion: '杭州市本级',
          assignee: '杭州金地自在城房地产发展有限公司',
          createTime: 1466572108000,
          dealPrice: '63600.0000',
          elecSupervisorNo: '3301002013B00936',
          endTime: 1520438400000,
          id: 1058,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=5243783D-4F80-48DD-A093-83191AED6A11',
          location: '拱墅区(浙江科技学院祥符GS10-R21-02地块)',
          maxVolume: '2.30',
          minVolume: '2.30',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '中低价位、中小套型普通商品住房用地',
          signedDate: 1361894400000,
          startTime: 1425830400000,
          supplyWay: '挂牌出让',
          totalArea: '4.056200',
          updateTime: 1466572108000
        },
        {
          adminRegion: '金华市本级',
          assignee: '杭州金地自在城房地产发展有限公司',
          createTime: 1466570709000,
          dealPrice: '20428.5910',
          elecSupervisorNo: '3307002012B00737',
          endTime: 1469808000000,
          id: 155,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=1D96252D-D890-4BDB-BECF-FE951F0D76A8',
          location: '八一南街以西、兰溪街以东、31号路以北',
          maxVolume: '1.50',
          minVolume: '1.20',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '中低价位、中小套型普通商品住房用地',
          signedDate: 1356883200000,
          startTime: 1406649600000,
          supplyWay: '挂牌出让',
          totalArea: '3.399100',
          updateTime: 1466570709000
        },
        {
          adminRegion: '大连市本级',
          assignee: '大连天意房地产开发有限公司',
          createTime: 1466570770000,
          dealPrice: '45810.0000',
          elecSupervisorNo: '2102002011B05947-1',
          endTime: 1453996800000,
          id: 209,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=EEB36BDD-177E-4A7F-8D26-5C738DE49F0A',
          location: '大连市甘井子区大连湾街道前关村',
          maxVolume: '1.93',
          minVolume: '1.93',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1319126400000,
          startTime: 1359475200000,
          supplyWay: '挂牌出让',
          totalArea: '10.927940',
          updateTime: 1466570770000
        },
        {
          adminRegion: '大连市本级',
          assignee: '大连天意房地产开发有限公司',
          createTime: 1466570454000,
          dealPrice: '53183.0000',
          elecSupervisorNo: '2102002011B05926-1',
          endTime: 1414512000000,
          id: 9,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=3475C3BA-A0FB-480B-A8F1-0771149745D7',
          location: '大连市甘井子区大连湾街道前关村',
          maxVolume: '1.34',
          minVolume: '1.34',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1319126400000,
          startTime: 1351526400000,
          supplyWay: '挂牌出让',
          totalArea: '18.553400',
          updateTime: 1466570454000
        },
        {
          adminRegion: '铁西区',
          assignee: '沈阳金地全胜房地产开发有限公司',
          createTime: 1466571169000,
          dealPrice: '50689.2121',
          elecSupervisorNo: '2101062011B07385',
          endTime: 1409414400000,
          id: 649,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=CC48DD22-896F-4A23-8A93-A913BD18120E',
          location: '沈阳市铁西区北二中路18号',
          maxVolume: '2.20',
          minVolume: '0.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1314633600000,
          startTime: 1314806400000,
          supplyWay: '挂牌出让',
          totalArea: '9.585700',
          updateTime: 1466571169000
        },
        {
          adminRegion: '武汉市本级',
          assignee: '武汉金地慧谷置业有限公司',
          createTime: 1466571097000,
          dealPrice: '85200.0000',
          elecSupervisorNo: '4201002011B04540',
          endTime: 1428940800000,
          id: 573,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=851A86A0-6D94-464D-BA1A-878477B58F80',
          location: '高新五路以北，东园西路以东',
          maxVolume: '2.20',
          minVolume: '0.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1302710400000,
          startTime: 1334332800000,
          supplyWay: '挂牌出让',
          totalArea: '17.718300',
          updateTime: 1466571097000
        },
        {
          adminRegion: '新北区',
          assignee: '常州金玖房地产开发有限公司',
          createTime: 1466571933000,
          dealPrice: '67600.0000',
          elecSupervisorNo: '3204112011B00275',
          endTime: 1412006400000,
          id: 975,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=3BC69C71-D126-450F-A59A-D05F726E850C',
          location: '常州市新北区飞龙南路北侧、天山路东侧、飞龙中路南侧',
          maxVolume: '2.30',
          minVolume: '2.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1299600000000,
          startTime: 1317312000000,
          supplyWay: '挂牌出让',
          totalArea: '6.978900',
          updateTime: 1466571933000
        },
        {
          adminRegion: '新北区',
          assignee: '常州金坤房地产开发有限公司',
          createTime: 1466571954000,
          dealPrice: '87000.0000',
          elecSupervisorNo: '3204112011B00260',
          endTime: 1412006400000,
          id: 1034,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=FE676E4B-7DBB-43DC-8FFE-3961D39E557E',
          location: '常州市新北区飞龙南路南侧、天山路西侧、沪宁城际铁路北侧',
          maxVolume: '2.30',
          minVolume: '1.80',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1299600000000,
          startTime: 1317312000000,
          supplyWay: '挂牌出让',
          totalArea: '10.251500',
          updateTime: 1466571954000
        },
        {
          adminRegion: '武汉市本级',
          assignee: '武汉金地伟盛房地产开发有限公司',
          createTime: 1466571955000,
          dealPrice: '61685.0000',
          elecSupervisorNo: '4201002010B04238',
          endTime: 1412006400000,
          id: 1036,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=81684475-A66A-44DC-9C17-80EC78F7B4D3',
          location: '汉阳区四新地区J8地块',
          maxVolume: '2.20',
          minVolume: '0.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1293638400000,
          startTime: 1317312000000,
          supplyWay: '挂牌出让',
          totalArea: '12.714000',
          updateTime: 1466571955000
        },
        {
          adminRegion: '望城县',
          assignee: '湖南金麓房地产开发有限公司',
          createTime: 1466570589000,
          dealPrice: '12312.0000',
          elecSupervisorNo: '4301222010B00763',
          endTime: 1404057600000,
          id: 60,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=E817E705-F43A-445A-B796-2AC594E7641E',
          location: '望城县黄金乡金山桥社区',
          maxVolume: '1.20',
          minVolume: '1.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1287504000000,
          startTime: 1309363200000,
          supplyWay: '招标出让',
          totalArea: '11.220800',
          updateTime: 1466570589000
        },
        {
          adminRegion: '慈溪市',
          assignee: '慈溪金启房地产开发有限公司',
          createTime: 1466571909000,
          dealPrice: '136000.0000',
          elecSupervisorNo: '3302822010B01981-4',
          endTime: 1404057600000,
          id: 930,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=22B56429-167A-4FFC-B3B4-FBD242CE0E12',
          location: '慈溪市古塘街道',
          maxVolume: '2.00',
          minVolume: '1.30',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '中低价位、中小套型普通商品住房用地',
          signedDate: 1282233600000,
          startTime: 1312819200000,
          supplyWay: '拍卖出让',
          totalArea: '8.007000',
          updateTime: 1466571909000
        },
        {
          adminRegion: '铁西区',
          assignee: '沈阳金地全胜房地产开发有限公司',
          createTime: 1466570796000,
          dealPrice: '50237.4062',
          elecSupervisorNo: '2101062010B02957',
          endTime: 1377964800000,
          id: 236,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=AC5AE162-4706-48CC-A64F-C56C9FBA5B05',
          location: '沈阳市铁西区保工北街1号',
          maxVolume: '2.20',
          minVolume: '0.00',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1281542400000,
          startTime: 1283356800000,
          supplyWay: '挂牌出让',
          totalArea: '9.635100',
          updateTime: 1466570796000
        },
        {
          adminRegion: '武汉市本级',
          assignee: '武汉金地伟盛房地产开发有限公司',
          createTime: 1466570803000,
          dealPrice: '66615.0000',
          elecSupervisorNo: '4201002010B05225',
          endTime: 1367337600000,
          id: 241,
          linkUrl:
            'http://www.landchina.com/default.aspx?tabid=386&comname=default&wmguid=c0db3f36-f533-404a-87d9-8165f6efa9bb&recorderguid=8ABBA4C3-A54A-450D-80AA-CCAC685B4ED0',
          location: '汉阳区四新地区',
          maxVolume: '',
          minVolume: '1.50',
          parentCompany: '金地（集团）股份有限公司',
          purpose: '其他普通商品住房用地',
          signedDate: 1280678400000,
          startTime: 1304179200000,
          supplyWay: '挂牌出让',
          totalArea: '17.941000',
          updateTime: 1466570803000
        }
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>