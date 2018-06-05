/*
 * FileName: 法院公告
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:18:00 pm
 * Author: LiuBing
 */
<template>
    <div class="court-notice">
        <table class="my-table"
            v-for="(item, index) in data"
            :key="index">
            <tbody>
                <tr>
                    <td width="20"
                        align="center"
                        rowspan="5"
                        colspan="1">{{ index + 1 }}</td>
                    <td width="70">本案身份:</td>
                    <td width="250">{{item.bltntypename}}</td>
                    <td width="100"> 公告类型名称：</td>
                    <td>{{ item.bltntypename}}</td>
                </tr>
                <tr>
                    <td>原告:</td>
                    <td>{{ item.party1 }}</td>
                    <td>当事人：</td>
                    <td>{{ item.party2}}</td>
                </tr>
                <tr>
                    <td>法院名:</td>
                    <td>{{ item.courtcode }}</td>
                    <td>法官：</td>
                    <td>{{ item.judge }}</td>
                </tr>
                <tr>
                    <td>案件内容：</td>
                    <td colspan="3">{{ item.content }}</td>
                </tr>
                <tr>
                    <td>刊登日期：</td>
                    <td colspan="3">{{ item.publishdate }}</td>
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
          id: 1705872,//对应表id
          announce_id: 6117873,//公告id
          bltnno: '1017111601252',//公告号
          bltnstate: '1050',//公告状态号
          bltntype: '132',//公告类型
          bltntypename: '起诉状副本及开庭传票',//公告类型名称
          caseno: null,//案件号
          content://案件内容
            '杨炳炎：本院受理原告强薇诉被告北京百度网讯科技有限公司、杨炳炎侵害名誉权纠纷一案，原告请求法院判令：1、被告一在百家号首页置顶位置及全国公开发行的报纸向原告公开赔礼道歉，致歉内容应包含本案民事判决书的主要内容，致歉时间持续时间不少于90日；2、被告二在其百家号“扒皮说娱”主页置顶位置及全国公开发行的报纸向原告公开赔礼道歉，致歉内容应包含本案民事判决书的主要内容，致歉时间持续时间不少于90日；3、二被告向原告赔偿精神损害抚慰金人民币100000元整及原告因维权而支付的包含调查取证费、律师费、差旅费等合理开支共计人民币60000元整，以上各项共计人民币160000元整；4、被告承担本案全部诉讼费用。现依法向你公告送达起诉书副本、应诉通知书、举证通知书、证据材料、开庭传票、合议庭组成成员告知书。自本公告之日起经过六十日即视为送达。提交答辩状的期限为公告送达期满后十五日内，举证期限为公告送达期满后三十日内。本院定于举证期满后第三日（遇节假日顺延）下午14时在北京市海淀区新海大厦七层海淀法院中关村法庭第一法庭公开开庭审理此案，被告逾期不到庭依法缺席审判。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',//法院名
          customno: null,
          dealgrade: '7',//处理等级
          dealgradename: '普通',//处理等级名称
          judge: '中关村法庭张江洲',//法官
          judgephone: '62697814',//法官电话
          mobilephone: null,//手机号
          party1: '原告强薇',//原告
          party2: '杨炳炎',//当事人
          companyList: [],//公司列表
          party1Str: '原告强薇',//无用
          party2Str: '杨炳炎',//无用
          province: '北京',//省份
          publishdate: '2017-11-23',//刊登日期
          publishpage: 'G05',//刊登版面
          reason: null,//原因
          showtxtdate: null,//无用
          tmpsaversn: null//无用
        },
        {
          id: 1646960,
          announce_id: 6064061,
          bltnno: '2217102600066',
          bltnstate: '1050',
          bltntype: '60',
          bltntypename: '起诉状、上诉状副本',
          caseno: null,
          content:
            '山西海内科技有限公司：本院受理（2016）冀0108民初2384号原告刘志新诉被告北京百度网讯科技有限公司、北京新浪互联信息服务有限公司、山西海内科技有限公司网络侵权责任纠纷一案，现已审理终结。因被告北京百度网讯科技有限公司不服本判决提起上诉，现依法向你送达上诉状。自本公告发出之日起经过60日即视为送达，限你自公告期满后3日内来本院民一庭领取上诉状，逾期则视为送达。',
          courtflag: null,
          courtcode: '石家庄市裕华区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '陈慧   ',
          judgephone: ' 0311-88706001',
          mobilephone: null,
          party1: '刘志新',
          party2: '山西海内科技有限公司',
          companyList: [
            {
              id: '404139068',
              name: '山西海内科技有限公司'
            }
          ],
          party1Str: '刘志新',
          party2Str:
            "<a href='http://www.tianyancha.com/company/404139068' target='_blank'>山西海内科技有限公司</a>",
          province: '河北',
          publishdate: '2017-10-31',
          publishpage: 'G22G23中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1641267,
          announce_id: 6057178,
          bltnno: '1017102401415',
          bltnstate: '1050',
          bltntype: '62',
          bltntypename: '裁判文书',
          caseno: null,
          content:
            '被告金华徹思餐饮管理有限公司、姜建洪：本院受理原告北京百度网讯科技有限公司诉你们合同纠纷一案，已审理终结。现依法向你们公告送达（2016）京0108民初26848号民事判决书，判决如下：一、被告金华徹思餐饮管理有限公司于本判决生效之日起七日内返还原告北京百度网讯科技有限公司合同预付款290 780元；二、被告姜建洪与被告金华徹思餐饮管理有限公司对向原告北京百度网讯科技有限公司返还第一项合同预付款承担连带保证责任。如果被告金华徹思餐饮管理有限公司、被告姜建洪未按本判决指定的期间履行给付金钱义务，应当依照《中华人民共和国民事诉讼法》第二百五十三条之规定，加倍支付迟延履行期间的债务利息。案件受理费5800元（原告已预交），由被告金华徹思餐饮管理有限公司、被告姜建洪负担。公告费520元（原告已预交），由被告金华徹思餐饮管理有限公司、被告姜建洪负担。自公告之日起60日内来本院中关村法庭第七法庭领取民事判决书，逾期则视为送达。如不服本判决，可在公告期满后15日内，向本院递交上诉状及副本，上诉于北京市第一中级人民法院。逾期未上诉的，本判决即发生法律效力。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '姜琨琨',
          judgephone: '62697812',
          mobilephone: null,
          party1: '原告北京百度网讯科技有限公司',
          party2: '被告金华徹思餐饮管理有限公司、姜建洪',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            },
            {
              id: '2568083717',
              name: '金华徹思餐饮管理有限公司'
            }
          ],
          party1Str:
            "原告<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>",
          party2Str:
            "被告<a href='http://www.tianyancha.com/company/2568083717' target='_blank'>金华徹思餐饮管理有限公司</a>、姜建洪",
          province: '北京',
          publishdate: '2017-10-29',
          publishpage: 'G48',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1639011,
          announce_id: 6056740,
          bltnno: '1017102401309',
          bltnstate: '1050',
          bltntype: '62',
          bltntypename: '裁判文书',
          caseno: null,
          content:
            '被告郫县红光镇德庄火锅店：本院受理原告北京百度网讯科技有限公司诉你合同纠纷一案，已审理终结。现依法向你公告送达（2016）京0108民初26851号民事判决书，判决如下：被告郫县红光镇德庄火锅店于本判决生效之日起七日内返还原告北京百度网讯科技有限公司合同预付款6万元。如被告郫县红光镇德庄火锅店未按本判决指定的期间履行给付金钱义务，应当依照《中华人民共和国民事诉讼法》第二百五十三条之规定，加倍支付迟延履行期间的债务利息。案件受理费1300元（原告已预交），由被告郫县红光镇德庄火锅店负担。公告费520元（原告已预交），由被告郫县红光镇德庄火锅店负担。自公告之日起60日内来本院中关村法庭第七法庭领取民事判决书，逾期则视为送达。如不服本判决，可在公告期满后15日内，向本院递交上诉状及副本，上诉于北京市第一中级人民法院。逾期未上诉的，本判决即发生法律效力。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '姜琨琨',
          judgephone: '62697812',
          mobilephone: null,
          party1: '原告北京百度网讯科技有限公司',
          party2: '被告郫县红光镇德庄火锅店',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            }
          ],
          party1Str:
            "原告<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>",
          party2Str: '被告郫县红光镇德庄火锅店',
          province: '北京',
          publishdate: '2017-10-29',
          publishpage: 'G49',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1640232,
          announce_id: 6056594,
          bltnno: '1017102401225',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '上海联端信息科技有限公司、杨林宝： 本院受理原告北京百度网讯科技有限公司诉你们技术服务合同纠纷一案，现依法向你们公告送达起诉书副本、应诉通知书、举证通知书、权利义务须知、开庭传票、合议庭组成人员通知书及廉政监督卡。原告诉讼请求为：1、判令被告一上海联端信息科技有限公司立即向原告返还预付款179 038.23元，以及相应违约金（以本金179 038.23元为基数，按每日3%计算违约金，自2017年1月7日起至实际支付之日止；2、判令被告二杨林宝对上述第1项诉讼请求承担连带保证责任；3、判令二被告共同承担本案诉讼费。自公告之日起，经过60日，即视为送达。提出答辩状和举证的期限分别为公告期满后的15日内和30日内。并定于举证期满后的第一日上午九时三十分（遇法定节假日顺延）在北京市海淀区人民法院中关村法庭第九法庭开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '中关村法庭刘君婕',
          judgephone: '62697821',
          mobilephone: null,
          party1: '原告北京百度网讯科技有限公司',
          party2: '上海联端信息科技有限公司、杨林宝',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            },
            {
              id: '2328645602',
              name: '上海联端信息科技有限公司'
            }
          ],
          party1Str:
            "原告<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/2328645602' target='_blank'>上海联端信息科技有限公司</a>、杨林宝",
          province: '北京',
          publishdate: '2017-10-29',
          publishpage: 'G22G23中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1620825,
          announce_id: 6022526,
          bltnno: '1017101101363',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '上海玫瑰医疗美容医院有限公司：本院受理原告北京田永成医美企业管理股份有限公司、北京善德尔医学技术有限公司、田永成起诉你公司及被告二北京百度网讯科技有限公司不正当竞争纠纷一案，三原告诉请本院依法判令：1.你公司立即停止“田永成”注册商标、名称及姓名等不正当竞争行为，判令被告二北京百度网讯科技有限公司停止帮助侵权行为；2.二被告在全国公开发行的报纸上刊登声明，消除影响；3.二被告赔偿原告经济损失10万元；4.二被告赔偿原告律师代理费、证据保全费等合理维权成本费用暂计人民币6万元；5.本案的诉讼费用由被告承担。现依法向你公司公告送达应诉通知书、开庭传票、起诉状及证据。自本公告之日起经过六十日即视为送达。提出答辩状的期限为公告送达期满后十五日内，举证期限为公告送达期满后三十日内。本院定于举证期满后第三日（遇节假日顺延至第一个工作日）上午九时三十分在本院中关村法庭第九法庭公开开庭审理此案，逾期不到庭本院将依法缺席判决。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '立案庭',
          judgephone: null,
          mobilephone: null,
          party1:
            '原告北京田永成医美企业管理股份有限公司、北京善德尔医学技术有限公司、田永成',
          party2: '上海玫瑰医疗美容医院有限公司',
          companyList: [
            {
              id: '2357899356',
              name: '北京田永成医美企业管理股份有限公司'
            },
            {
              id: '27816686',
              name: '北京善德尔医学技术有限公司'
            },
            {
              id: '23981663',
              name: '上海玫瑰医疗美容医院有限公司'
            }
          ],
          party1Str:
            "原告<a href='http://www.tianyancha.com/company/2357899356' target='_blank'>北京田永成医美企业管理股份有限公司</a>、<a href='http://www.tianyancha.com/company/27816686' target='_blank'>北京善德尔医学技术有限公司</a>、田永成",
          party2Str:
            "<a href='http://www.tianyancha.com/company/23981663' target='_blank'>上海玫瑰医疗美容医院有限公司</a>",
          province: '北京',
          publishdate: '2017-10-17',
          publishpage: 'G26',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1458078,
          announce_id: 5769386,
          bltnno: '1017081400839',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '北京摩云文创文化传播有限公司： 本院受理原告北京百度网讯科技有限公司、百度在线网络技术（北京）有限公司诉你公司名誉权纠纷一案，原告诉讼请求：1.判决被告立即全面删除涉案信息。2.判决被告在其入驻的腾讯微信、一点资讯、知乎、UC头条、今日头条、新浪微博、搜狐新闻等平台上的“花儿街参考”公众号中连续30天置顶刊登赔礼道歉的声明。3.判决被告赔偿公证费、律师费等合理维权支出和相应损失共计50万元。4.本案诉讼费由被告承担。现依法向你公司公告送达起诉书副本、证据材料、应诉通知书、权利义务须知、举证通知书及开庭传票。自公告之日起经过六十日，即视为送达。提出答辩状和举证的期限分别为公告期满后的十五日和三十日内。并定于举证期满后的第三日上午九时（遇法定节假日顺延）在北京市海淀区人民法院中关村法庭第一法庭开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '中关村  陈昶屹',
          judgephone: '010-62697803',
          mobilephone: null,
          party1: '北京百度网讯科技有限公司、百度在线网络技术（北京）有限公司',
          party2: '北京摩云文创文化传播有限公司',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            },
            {
              id: '23289175',
              name: '百度在线网络技术（北京）有限公司'
            },
            {
              id: '103633423',
              name: '北京摩云文创文化传播有限公司'
            }
          ],
          party1Str:
            "<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>、<a href='http://www.tianyancha.com/company/23289175' target='_blank'>百度在线网络技术（北京）有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/103633423' target='_blank'>北京摩云文创文化传播有限公司</a>",
          province: '北京',
          publishdate: '2017-08-17',
          publishpage: 'G87',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1474949,
          announce_id: 5682819,
          bltnno: null,
          bltnstate: null,
          bltntype: null,
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '陈凤：本院受理原告北京巨皓知识产权代理有限公司诉被告北京百度网讯科技有限公司、陈凤名誉权纠纷一案,原告诉讼请求如下: 1、判令被告北京百度网讯科技有限公司删除http://koubei.baidu.com/t/19350这个网页链接的帖子；2、判令两被告在百度口碑上公开道歉，消除影响；3、判令两被告赔偿因侵权所致证据保全费1030元及经济损失100000元；4、判令被告陈凤支付给原告商标注册费999元；5、判令两被告共同承担本案件全部诉讼费；6、判令两被告承担连带责任。现本院依法向你公告送达起诉书、证据、应诉通知书、举证通知书，自公告之日起六十日即视为送达，提出答辩状的期限和举证期限均为公告期届满的十五日内。本院定于举证期满后的次日上午九时三十分（遇节假日顺延）在中关村第一法庭开庭审理，逾期则依法缺席判决。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: null,
          dealgradename: null,
          judge: null,
          judgephone: null,
          mobilephone: null,
          party1: null,
          party2: '陈凤',
          companyList: [],
          party1Str: null,
          party2Str: '陈凤',
          province: '北京',
          publishdate: '2017-07-23',
          publishpage: 'G12',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1365901,
          announce_id: 5649022,
          bltnno: '1017070600495',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '盐城诚膳餐饮管理有限公司：本院受理的原告唐玉杰诉盐城诚膳餐饮管理有限公司、北京百度网讯科技有限公司侵害商标权纠纷一案，现依法向你公告送达民事裁定书、举证通知书、开庭传票等诉讼材料。自公告之日起经过60日，即视为送达。提出答辩状和举证的期限均为公告期满后的15日内。本案定于举证期满后的第三日上午9时(遇法定节假日顺延)在本院第十三审判庭开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '常熟市人民法院',
          customno: null,
          dealgrade: '8',
          dealgradename: '加急',
          judge: '知识产权庭李军',
          judgephone: null,
          mobilephone: null,
          party1: '唐玉杰',
          party2: '盐城诚膳餐饮管理有限公司',
          companyList: [
            {
              id: '2350388544',
              name: '盐城诚膳餐饮管理有限公司'
            }
          ],
          party1Str: '唐玉杰',
          party2Str:
            "<a href='http://www.tianyancha.com/company/2350388544' target='_blank'>盐城诚膳餐饮管理有限公司</a>",
          province: '江苏',
          publishdate: '2017-07-11',
          publishpage: 'G44',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1350167,
          announce_id: 5634026,
          bltnno: '1717063000055',
          bltnstate: '1050',
          bltntype: '61',
          bltntypename: '开庭传票',
          caseno: null,
          content:
            '广州市番禺区老大众搬运服务部、谢金珍：本院受理原告广州市大众搬屋运输有限公司诉你们、北京百度网讯科技有限公司、百度（中国）有限公司广州分公司、百度（中国）有限公司侵害商标权纠纷一案，依法向你们公告送达开庭传票。自公告之日起，经过60日即视为送达。举证期限为公告期满后15日内，并定于2017年9月27日上午9时30分在本院第二法庭开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '广州市南沙区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '知识产权庭张法官、书记员',
          judgephone: null,
          mobilephone: null,
          party1: '广州市大众搬屋运输有限公司',
          party2: '广州市番禺区老大众搬运服务部、谢金珍',
          companyList: [
            {
              id: '1398880457',
              name: '广州市大众搬屋运输有限公司'
            },
            {
              id: '2320605352',
              name: '广州市番禺区老大众搬运服务部'
            }
          ],
          party1Str:
            "<a href='http://www.tianyancha.com/company/1398880457' target='_blank'>广州市大众搬屋运输有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/2320605352' target='_blank'>广州市番禺区老大众搬运服务部</a>、谢金珍",
          province: '广东',
          publishdate: '2017-07-06',
          publishpage: 'G9G12中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1345138,
          announce_id: 5627705,
          bltnno: '1017062801462',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '正泰东毅（天津）矿产资源经营有限公司：本院受理原告深圳东方创银互联网金融服务有限公司诉被告北京百度网讯科技有限公司、正泰东毅（天津）矿产资源经营有限公司不正当竞争纠纷一案，案号（2016）粤0391民初2131号。现依法向你公司公告送达起诉状、证据副本、应诉通知书、举证通知书、合议庭组成人员通知书、诉讼权利义务告知书、民事裁定书及开庭传票等。自公告之日起，经过60日即视为送达。提出答辩状的期限为公告送达期满后的15日，举证期限为公告期满后的15日。本院定于2017年9月28日上午9时30分在本院第二审判庭开庭，请依时出庭，逾期将依法裁判。',
          courtflag: null,
          courtcode: '深圳前海合作区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '立案庭',
          judgephone: null,
          mobilephone: null,
          party1: '原告深圳东方创银互联网金融服务有限公司',
          party2: '正泰东毅（天津）矿产资源经营有限公司',
          companyList: [
            {
              id: '2329854479',
              name: '深圳东方创银互联网金融服务有限公司'
            },
            {
              id: '2315241307',
              name: '正泰东毅（天津）矿产资源经营有限公司'
            }
          ],
          party1Str:
            "原告<a href='http://www.tianyancha.com/company/2329854479' target='_blank'>深圳东方创银互联网金融服务有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/2315241307' target='_blank'>正泰东毅（天津）矿产资源经营有限公司</a>",
          province: '广东',
          publishdate: '2017-07-04',
          publishpage: 'G27',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1123519,
          announce_id: 5395967,
          bltnno: '2517040100102',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: '(2015)古民初字第489号',
          content:
            '杨伟：本院受理原告李盛彬诉你及北京百度网讯科技有限公司买卖合同纠纷一案，现依法向你公告送达起诉状副本、应诉通知书、举证通知书、告知合议庭组成人员通知书及开庭传票。自发出公告之日起，经过60日即视为送达。提出答辩状和举证的期限分别为公告期满后15日和30日内。并定于举证期满后第3日上午9时0分(遇法定假日顺延)在本院民事审判第一庭公开开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '古丈县人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '立案庭 罗来红',
          judgephone: '07434726752',
          mobilephone: '13973098862',
          party1: '李盛彬',
          party2: '杨伟',
          companyList: [],
          party1Str: '李盛彬',
          party2Str: '杨伟',
          province: '湖南',
          publishdate: '2017-04-09',
          publishpage: 'G50',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1114792,
          announce_id: 5389017,
          bltnno: '1017033000147',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '盐城诚膳餐饮管理有限公司：本院受理的原告唐玉杰诉盐城诚膳餐饮管理有限公司、北京百度网讯科技有限公司侵害商标权纠纷一案，原告起诉要求你立即停止侵权、赔偿经济损失24万元、合理费用16000元并承担诉讼费，并由被告北京百度网讯科技有限公司对上述赔偿承担连带责任，因你下落不明，本院现依法向你公告送达起诉状副本、证据副本、管辖异议副本等应诉材料。自公告之日起经过60日，即视为送达。提出答辩状和举证的期限均为公告期满后的15日内。',
          courtflag: null,
          courtcode: '常熟市人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '知识产权庭李军',
          judgephone: null,
          mobilephone: null,
          party1: '唐玉杰',
          party2: '盐城诚膳餐饮管理有限公司：',
          companyList: [
            {
              id: '2350388544',
              name: '盐城诚膳餐饮管理有限公司'
            }
          ],
          party1Str: '唐玉杰',
          party2Str:
            "<a href='http://www.tianyancha.com/company/2350388544' target='_blank'>盐城诚膳餐饮管理有限公司</a>：",
          province: '江苏',
          publishdate: '2017-04-06',
          publishpage: 'G41',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1098697,
          announce_id: 5367267,
          bltnno: '1017032201226',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '北京百度网讯科技有限公司上海分公司：本院受理原告上海佳臻广告有限公司诉你公司合同纠纷一案，原告上海佳臻广告有限公司要求：1、判令解除与北京百度网讯科技有限公司上海分公司间的《百度品牌专区产品投放合作协议》，并退还扣除北京百度网讯科技有限公司上海分公司实际履行天数的费用后的全部付款总额人民币620529.53元的付款；2、判令由北京百度网讯科技有限公司上海分公司承担本案诉讼费用。现依法向你公司公告送达应诉通知书、起诉状副本、证据材料、合议庭组成人员通知书及开庭传票。自公告之日起经过60日，即视为送达。提出答辩状的期限为公告期满后的15日内。并定于答辩期满后第3日上午9时30分（遇法定节假日顺延）在本院第45法庭开庭审理。逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '温泉法庭邵小辉',
          judgephone: '010-62697682',
          mobilephone: null,
          party1: '原告上海佳臻广告有限公司',
          party2: '北京百度网讯科技有限公司上海分公司',
          companyList: [
            {
              id: '548096006',
              name: '上海佳臻广告有限公司'
            },
            {
              id: '711249800',
              name: '北京百度网讯科技有限公司上海分公司'
            }
          ],
          party1Str:
            "原告<a href='http://www.tianyancha.com/company/548096006' target='_blank'>上海佳臻广告有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/711249800' target='_blank'>北京百度网讯科技有限公司上海分公司</a>",
          province: '北京',
          publishdate: '2017-03-28',
          publishpage: 'G02',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1078229,
          announce_id: 5350827,
          bltnno: '2217031600017',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '山西海内科技有限公司：本院受理原告刘志新诉北京百度网讯科技有限公司、北京新浪互联信息服务有限公司与你公司网络侵权责任纠纷一案，现依法向你公司公告送达起诉状副本、应诉通知书、举证通知书、开庭传票、合议庭组成人员通知、民事裁定书。自发出公告之日起，经过60日即视为送达。提出答辩状和举证期限均为公告期满后的15日内。并定于举证期满后第三日上午9时（遇法定假日顺延）在本院第一审判庭（214室）开庭审理，逾期将依法缺席判决。',
          courtflag: null,
          courtcode: '石家庄市裕华区人民法院',
          customno: null,
          dealgrade: '8',
          dealgradename: '加急',
          judge: '民一庭 陈 慧',
          judgephone: null,
          mobilephone: null,
          party1: '刘志新',
          party2: '山西海内科技有限公司',
          companyList: [
            {
              id: '404139068',
              name: '山西海内科技有限公司'
            }
          ],
          party1Str: '刘志新',
          party2Str:
            "<a href='http://www.tianyancha.com/company/404139068' target='_blank'>山西海内科技有限公司</a>",
          province: '河北',
          publishdate: '2017-03-21',
          publishpage: 'G66',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 1062209,
          announce_id: 5336272,
          bltnno: '1717031100124',
          bltnstate: '1050',
          bltntype: '60',
          bltntypename: '起诉状、上诉状副本',
          caseno: null,
          content:
            '东莞市凯悦商贸有限公司：本院受理原告惠州市第二妇幼保健院与被告惠州伊丽莎白妇产医院、百度（中国）有限公司、北京百度网讯科技有限公司、百度时代网络技术（北京）有限公司、百度在线网络技术（北京）有限公司、惠州伊丽莎白医院投资管理有限公司、东莞市凯悦商贸有限公司网络侵权责任纠纷一案，现依法向你公告送达上诉状副本及上诉须知。自公告之日起，经过60日即视为送达。提出答辩状的期限为公告期满后15日内，逾期将依法审理。',
          courtflag: null,
          courtcode: '惠州市惠城区人民法院',
          customno: null,
          dealgrade: '7',
          dealgradename: '普通',
          judge: '民二庭杨立',
          judgephone: null,
          mobilephone: null,
          party1: '惠州市第二妇幼保健院',
          party2: '东莞市凯悦商贸有限公司',
          companyList: [
            {
              id: '2320027107',
              name: '东莞市凯悦商贸有限公司'
            }
          ],
          party1Str: '惠州市第二妇幼保健院',
          party2Str:
            "<a href='http://www.tianyancha.com/company/2320027107' target='_blank'>东莞市凯悦商贸有限公司</a>",
          province: '广东',
          publishdate: '2017-03-16',
          publishpage: 'G18G19中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 998438,
          announce_id: 5271548,
          bltnno: '1017021500390',
          bltnstate: '1050',
          bltntype: '132',
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '王晓：本院受理原告苏州市万豪因私出入境服务有限公司诉被告北京豆网科技有限公司、天涯社区网络科技股份有限公司、北京百度网讯科技有限公司、王晓侵权责任纠纷一案，现依法向你公告送达起诉状副本，应诉通知书、举证通知书、权利义务告知书、合议庭成员告知书、民事裁定书及开庭传票。自公告之日起经过60日，即视为送达。提出答辩状的期限和举证期限均为公告期满后的15日内。并定于公告期满后第3日9时30分(遇法定节假日顺延)在本院第五法庭开庭审理此案，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '苏州市吴中区人民法院',
          customno: null,
          dealgrade: '8',
          dealgradename: '加急',
          judge: '民一庭瞿忠奎',
          judgephone: null,
          mobilephone: null,
          party1: '苏州市万豪因私出入境服务有限公司',
          party2: '王晓',
          companyList: [
            {
              id: '2355388792',
              name: '苏州市万豪因私出入境服务有限公司'
            }
          ],
          party1Str:
            "<a href='http://www.tianyancha.com/company/2355388792' target='_blank'>苏州市万豪因私出入境服务有限公司</a>",
          party2Str: '王晓',
          province: '江苏',
          publishdate: '2017-02-19',
          publishpage: 'G49G52中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 987986,
          announce_id: 5251067,
          bltnno: null,
          bltnstate: null,
          bltntype: null,
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '金八文化传媒（北京）有限公司：本院受理原告北京百度网讯科技有限公司、百度在线网络技术（北京）有限公司诉你方名誉权纠纷一案，原告北京百度网讯科技有限公司、百度在线网络技术（北京）有限公司诉请本院依法判令：1.你方立即全面删除涉案信息；2.你方在腾讯、新浪网站首页；微信、微博平台首页；“金融八卦女”微信公众号、微博公众号首页及移动APP端；连续30天置顶刊登赔礼道歉的声明；3.你方赔偿公证费、律师费等合理维权支出和相应损失共计50万元，本案诉讼费用由你方承担。现依法向你方公告送达应诉通知书、开庭传票、起诉状及证据。自本公告之日起经过六十日即视为送达。提出答辩状的期限为公告送达期满后十五日内，举证期限为公告送达期满后三十日内。本院定于举证期满后第三日（遇节假日顺延至第一个工作日）上午九点三十分在本院中关村法庭第七法庭公开开庭审理此案，逾期不到庭本院将依法缺席判决。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: null,
          dealgradename: null,
          judge: null,
          judgephone: null,
          mobilephone: null,
          party1: '北京百度网讯科技有限公司、百度在线网络技术（北京）有限公司',
          party2: '金八文化传媒（北京）有限公司',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            },
            {
              id: '23289175',
              name: '百度在线网络技术（北京）有限公司'
            },
            {
              id: '2352962990',
              name: '金八文化传媒（北京）有限公司'
            }
          ],
          party1Str:
            "<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>、<a href='http://www.tianyancha.com/company/23289175' target='_blank'>百度在线网络技术（北京）有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/2352962990' target='_blank'>金八文化传媒（北京）有限公司</a>",
          province: '北京',
          publishdate: '2017-02-07',
          publishpage: 'G5G8中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 919871,
          announce_id: 5251064,
          bltnno: null,
          bltnstate: null,
          bltntype: null,
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '郫县红光镇德庄火锅店：本院受理原告北京百度网讯科技有限公司诉你合同纠纷一案，原告诉讼请求为：1、原告要求被告返还合同预付款60000元；2、被告承担诉讼费。现依法向你方公告送达起诉书副本、应诉通知书、举证通知书、权利义务须知及开庭传票。自公告之日起经过60日，即视为送达。提出答辩状和举证的期限分别为公告期满后的15日和30日内。并定于举证期满后的第三日上午九时（遇法定节假日顺延）在北京市海淀区人民法院中关村法庭第七法庭开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: null,
          dealgradename: null,
          judge: null,
          judgephone: null,
          mobilephone: null,
          party1: '北京百度网讯科技有限公司',
          party2: '郫县红光镇德庄火锅店',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            }
          ],
          party1Str:
            "<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>",
          party2Str: '郫县红光镇德庄火锅店',
          province: '北京',
          publishdate: '2017-02-07',
          publishpage: 'G5G8中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        },
        {
          id: 978930,
          announce_id: 5251063,
          bltnno: null,
          bltnstate: null,
          bltntype: null,
          bltntypename: '起诉状副本及开庭传票',
          caseno: null,
          content:
            '金华徹思餐饮管理有限公司、姜建洪：本院受理原告北京百度网讯科技有限公司诉你二被告合同纠纷一案，原告诉讼请求为：1、原告要求被告金华徹思餐饮管理有限公司返还合同预付款290 780元；2、被告姜建洪与被告金华徹思餐饮管理有限公司对返还290 780元合同预付款承担连带责任；3、二被告承担诉讼费。现依法向你二被告公告送达起诉书副本、应诉通知书、举证通知书、权利义务须知及开庭传票。自公告之日起经过60日，即视为送达。提出答辩状和举证的期限分别为公告期满后的15日和30日内。并定于举证期满后的第三日上午九时（遇法定节假日顺延）在北京市海淀区人民法院中关村法庭第七法庭开庭审理，逾期将依法缺席裁判。',
          courtflag: null,
          courtcode: '北京市海淀区人民法院',
          customno: null,
          dealgrade: null,
          dealgradename: null,
          judge: null,
          judgephone: null,
          mobilephone: null,
          party1: '北京百度网讯科技有限公司',
          party2: '金华徹思餐饮管理有限公司、姜建洪',
          companyList: [
            {
              id: '22822',
              name: '北京百度网讯科技有限公司'
            },
            {
              id: '2568083717',
              name: '金华徹思餐饮管理有限公司'
            }
          ],
          party1Str:
            "<a href='http://www.tianyancha.com/company/22822' target='_blank'>北京百度网讯科技有限公司</a>",
          party2Str:
            "<a href='http://www.tianyancha.com/company/2568083717' target='_blank'>金华徹思餐饮管理有限公司</a>、姜建洪",
          province: '北京',
          publishdate: '2017-02-07',
          publishpage: 'G5G8中缝',
          reason: null,
          showtxtdate: null,
          tmpsaversn: null
        }
      ]
    }
  },
  methods: {
    formatArr(arr) {
      if (!arr || !arr.length) {
        return ''
      } else {
        return arr.map(e => e.name).join('，')
      }

    },
    formatTime(time){
      return timestampToTime(time)
    }
  }
}
</script>
<style lang='stylus' scoped>
.court-notice
  padding: 0 40px
  .my-table
    margin-bottom: 20px
</style>