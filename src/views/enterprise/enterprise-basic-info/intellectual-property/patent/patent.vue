/*
 * FileName: 专利信息
 * Project: yuntu-scf-vue
 * File Created: Saturday, 26th May 2018 2:37:57 pm
 * Author: LiuBing
 */
<template>
  <div class="patent">
    <table class="my-table"
      v-for="(item, index) in data"
      :key="index">
      <tbody>
        <tr>
          <td width="20"
            align="center"
            rowspan="9"
            colspan="1">{{ index + 1 }}</td>
          <td width="100">专利名称：</td>
          <td width="250"
            colspan="3">{{ item.patentName }}</td>
          <!-- <td width="70"> 执行依据文号：</td>
          <td>{{ item.gistid}}</td> -->
        </tr>
        <tr>
          <td>申请号：：</td>
          <td>{{ item.patentNum }}</td>
          <td width="100"> 申请日：</td>
          <td width="200">{{ item.applicationTime }}</td>
        </tr>
        <tr>
          <td>专利类型：</td>
          <td>{{ item.patentType }}</td>
          <td>发明人：</td>
          <td>{{ item.inventor }}</td>
        </tr>
        <tr>
          <td>申请人：</td>
          <td>{{ item.applicantName }}</td>
          <td>全部分类号：</td>
          <td>{{ item.allCatNum }}</td>
        </tr>
        <tr>
          <td>申请公布日：</td>
          <td>{{ item.applicationPublishTime }}</td>
          <td>申请公布号:</td>
          <td>{{ item.applicationPublishNum }}</td>
        </tr>
        <tr>
          <td>代理机构：</td>
          <td>{{ item.agency }}</td>
          <td>代理人：</td>
          <td>{{ item.agent }}</td>
        </tr>
        <tr>
          <td>图片：</td>
          <td colspan="3">{{ item.imgUrl }}</td>
        </tr>
        <tr>
          <td>二维码：</td>
          <td colspan="3">{{ item.uuid }}</td>
        </tr>
        <tr>
          <td>摘要：</td>
          <td colspan="3">{{ item.abstracts }}</td>
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
          mainCatNum: 'G06F3/16(2006.01)I',//主分类号
          applicationPublishNum: 'CN106873937A',//申请公布号
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',//代理机构
          inventor: '苑小军',//发明人
          agent: '王达佐;马晓亚',//代理人
          applicationPublishTime: '2017.06.20',//申请公布日
          patentNum: 'CN201710083638.X',//申请号/专利号
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710083638.X/201710083638.gif',//图片路径
          allCatNum: 'G06F3/16(2006.01)I',//全部分类号
          patentName: '语音输入方法和装置',//专利名称
          abstracts:             //摘要
            '本申请公开了语音输入方法和装置。该方法的一具体实施方式包括：响应于检测到启动语音输入方式的指令，将输入法应用的当前输入方式切换为语音输入方式；识别用户在语音输入方式下输入的语音的音量值；确定所识别出的音量值是否处于预设音量值范围内；若所识别出的音量值不是处于预设音量值范围内，则向用户呈现提示信息以提示用户控制当前输入的语音的音量值；响应于接收到结束语音输入的指令，将用户在语音输入方式下输入的语音以预设方式输出。该实施方式实现了在语音输入方式下对用户输入语音的音量值的有效控制。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',//地址
          applicationTime: '2017.02.16',//申请日
          uuid: 'e8ee37d2633842308586401bf65b97a7',//uuid
          patentType: '发明专利',//专利类型
          applicantName: '北京百度网讯科技有限公司'//申请人
        },
        {
          mainCatNum: 'H04L29/08(2006.01)I',
          applicationPublishNum: 'CN106878389A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '张慕华;孟宪军;应茹',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710005566.7',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710005566.7/201710005566.gif',
          allCatNum: 'H04L29/08(2006.01)I;H04L12/911(2013.01)I',
          patentName: '用于在云系统中进行资源调度的方法和装置',
          abstracts:
            '本发明的目的是提供一种用于在云系统中进行资源调度的方法和装置。根据本发明的方法包括以下步骤：根据云系统中计算资源的稳定性，确定各个计算资源各自的资源优先级；‑在需要进行资源调度时，确定当前作业任务相对应的调度算法；‑基于所述调度算法和当前可用的各个计算资源的资源优先级，进行资源分配。与现有技术相比，本发明具有以下优点：通过对计算资源的优先级进行细分并支持多种调度算法，从而基于多样化的调度算法和资源优先级来进行资源调度，提高了资源调度的灵活性，提升了资源利用率和系统吞吐量。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.04',
          uuid: 'b8357b24c85f44578c701b0df012dbf9',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F3/023(2006.01)I',
          applicationPublishNum: 'CN106873799A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '张东栋;田野;孟可丰',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710083643.0',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710083643.0/201710083643.gif',
          allCatNum: 'G06F3/023(2006.01)I',
          patentName: '输入方法和装置',
          abstracts:
            '本申请公开了输入方法和装置。该方法的一具体实施方式包括：获取用户的输入信息；在预先建立的词库中查询与输入信息匹配的候选词条；根据预定数量的历史周期内用户输入候选词条的次数，调整候选词条的当前词频；根据调整后的词频，确定候选词条的顺序；按照所述顺序，呈现候选词条。该实施方式实现了根据用户习惯的改变调整词频，提供个性化的搜索结果，从而提高了用户输入词条的效率。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.16',
          uuid: 'c60b30f12c054c9eaa9c0f3d195d3200',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06Q50/00(2012.01)I',
          applicationPublishNum: 'CN106875279A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '杨延超',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710083552.7',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710083552.7/201710083552.gif',
          allCatNum:
            'G06Q50/00(2012.01)I;G06F17/30(2006.01)I;H04L29/08(2006.01)I;H04M1/2745(2006.01)I',
          patentName: '信息推送方法和装置',
          abstracts:
            '本申请公开了信息推送方法和装置。该方法的一具体实施方式包括：获取第一用户的第一定位坐标和第一用户需求信息；从至少一个第二用户中选取第二定位坐标与第一定位坐标的距离小于预设距离阈值的第二用户形成候选第二用户集合；获取候选第二用户集合中每个候选第二用户的候选第二用户职业信息；在用于表征用户需求信息与用户职业信息的对应关系的对应关系表中，查询与第一用户需求信息对应的用户职业信息，并在候选第二用户集合中选取候选第二用户职业信息与所查询到的用户职业信息匹配的候选第二用户作为目标第二用户；向第一用户所使用的第一终端推送目标第二用户的联系方式信息。该实施方式实现了富于针对性的信息推送。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.16',
          uuid: '09cdf7c8e5cc4d64afc64d8665787257',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F9/48(2006.01)I',
          applicationPublishNum: 'CN106874084A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '苗科展;孟宪军',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710005620.8',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710005620.8/201710005620.gif',
          allCatNum: 'G06F9/48(2006.01)I;G06F9/50(2006.01)I',
          patentName: '一种分布式工作流调度的方法和装置',
          abstracts:
            '本发明提供了一种分布式工作流调度的方法和装置，获取用户提供的作业执行指令、工作流拓扑关系以及作业间的依赖关系，基于所述工作流拓扑关系和所述作业间的依赖关系查找与所述作业执行指令对应的节点，获取已准备就绪的所述节点，通过资源管理模块确定已准备就绪的所述节点所需要的资源配额，并通过集群资源调度系统调度与所述集群资源配额对应的资源至所述资源管理模块由已获取所述资源的所述资源管理模块通过资源调度代理发送启动指令，以启动远程作业执行模块执行所述作业执行指令。本发明可以基于作业间复杂的依赖关系遍历Flow的拓扑，实现了工作流的分布式化运行，分离了工作流中的调度逻辑与执行逻辑，并分离了工作流的调度与资源管理逻辑。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.04',
          uuid: '4079049f287247bfa9541605c75b59d5',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F3/06(2006.01)I',
          applicationPublishNum: 'CN106873906A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '付万宇',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710005568.6',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710005568.6/201710005568.gif',
          allCatNum: 'G06F3/06(2006.01)I',
          patentName: '用于管理元信息的方法和装置',
          abstracts:
            '本发明的目的是提供一种用于管理元信息的方法和装置。根据本发明的方法包括以下步骤：在目标系统的各个数据块中存储或更新其对应的元信息。与现有技术相比，本发明具有以下优点：通过将元信息存储于数据块中，可避免由于文件损坏而导致大量数据的丢失，提升了数据存储的安全性；并且，根据本发明的方案可创建多个线程以并行的方式加载元信息，从而提升了系统启动速度。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.04',
          uuid: 'f0a0b5c913244a2aa47cdf3bd00d3922',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F11/07(2006.01)I',
          applicationPublishNum: 'CN106874133A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '石然;程怡;张建伟;高伟康',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710035881.4',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710035881.4/201710035881.gif',
          allCatNum: 'G06F11/07(2006.01)I',
          patentName: '流式计算系统中计算节点的故障处理',
          abstracts:
            '本发明的目的是提供一种用于流式计算系统中的故障处理的方法、装置、计算节点和计算机程序产品。其中，在一个计算节点，记录来自上游计算节点的各原始数据的到达顺序；将所述各原始数据按照预定的周期进行持久化操作；当发生故障而重启后，按照所记录的到达顺序从经持久化操作的原始数据和/或所述上游计算节点恢复内存中的待计算数据，并将所恢复的待计算数据按照其之前的到达顺序进行重放和计算；将每条计算完毕的结果数据按照故障前上一持久化操作周期的结果数据的偏移量继续编码并发送至下一节点。与现有技术相比，本发明提供了一种在框架层实现的流式计算输出结果不重不丢的容错机制，可应对各种软硬件故障，保证输出结果的高准确性。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.17',
          uuid: '83a78bb251c54bdd983c25103ea4e9aa',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'H04L29/06(2006.01)I',
          applicationPublishNum: 'CN106878282A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '杨延超',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710020303.3',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710020303.3/201710020303.gif',
          allCatNum: 'H04L29/06(2006.01)I;H04L12/66(2006.01)I',
          patentName: '网关防攻击的方法和装置',
          abstracts:
            '本发明提供了一种网关防攻击的方法和装置。该方法包括：获取网关各接口上的单位时间接收访问请求次数；基于获取的接口上的单位时间接收访问请求次数与接口单位时间接收访问请求次数阈值的比较，确定不安全接口，其中所述接口单位时间接收访问请求次数阈值基于该接口单位时间最大负载访问请求次数、以及统计出的该接口平均负载饱和度占网关所有接口的接口平均负载饱和度之和的比事先确定；基于访问不安全接口的访问者地址单位时间访问该不安全接口的请求次数，在不安全接口上确定不安全访问者地址。本发明在更准确地识别出不安全访问者地址的同时，减少了将正常用户的频繁访问当作攻击的可能性。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.11',
          uuid: 'd59c6a8463574facb691e7c7fb60b616',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F9/46(2006.01)I',
          applicationPublishNum: 'CN103914334B',
          agency: '北京清亦华知识产权代理事务所(普通合伙) 11201',
          inventor: '邱胜科',
          agent: '宋合成',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201210592995.6',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/SQ/20170620/201210592995.6/201210592995.gif',
          allCatNum: 'G06F9/46(2006.01)I;G09B29/00(2006.01)I',
          patentName: '地图的标注方法和系统',
          abstracts:
            '本发明提出一种地图的标注方法和系统。其中该方法包括以下步骤：分布式计算系统获取原始地图数据；任务调度服务器对原始地图数据进行网格切分以获取多个网格地图数据，并将多个网格地图数据分发至多个任务执行服务器；任务执行服务器对网格地图数据进行避让计算，并对网格地图数据中的每个元素进行标注；任务调度服务器根据获取多个任务执行服务器发送的多个标注结果，并根据元素的ID将元素及对应的标注结果分发至多个任务执行服务器；以及任务执行服务器对元素的标注结果进行合并去重以获取原始地图中每个元素的标注结果。根据本发明的实施例，极大提高数据量的吞吐能力和处理速度。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2012.12.31',
          uuid: '0470af060da44b45b986c4704f2516c1',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F3/023(2006.01)I',
          applicationPublishNum: 'CN106873800A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '门文;杨林达;黎蕾',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710089052.4',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710089052.4/201710089052.gif',
          allCatNum:
            'G06F3/023(2006.01)I;G10L25/63(2013.01)I;G10L15/26(2006.01)I',
          patentName: '信息输出方法和装置',
          abstracts:
            '本申请公开了信息输出方法和装置。该方法的一具体实施方式包括：接收用户输入的语音信息；对上述语音信息进行分析，确定上述用户的情绪特征以及与上述语音信息对应的文本信息；基于上述情绪特征，对上述文本信息设置文字效果；将已应用上述文字效果的上述文本信息按照预定格式进行输出。该实施方式实现了多样化的信息输出。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.20',
          uuid: '1f98f808f1464de8baafca7225bb9649',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F11/07(2006.01)I',
          applicationPublishNum: 'CN106874135A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '陈云;王博;郭宣佑',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710089057.7',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710089057.7/201710089057.gif',
          allCatNum: 'G06F11/07(2006.01)I',
          patentName: '用于检测机房故障的方法、装置及设备',
          abstracts:
            '本申请公开了用于检测机房故障的方法、装置及设备。待检测机房包括多个服务器集合，每个服务器集合处理一种类型的数据请求并且该服务器集合响应于所处理的数据请求满足预设条件而生成报警信息，该报警信息包括该服务器集合的服务器集合标识，该方法的一具体实施方式包括：获取预定时间段内待检测机房的报警记录，其中，该报警记录包括该预定时间段内该待检测机房内的服务器集合生成的报警信息；确定第一数量，其中，第一数量为该报警记录中出现的不同服务器集合标识的数量；基于所确定的第一数量，确定该待检测机房是否出现故障。该实施方式提高了确定机房是否出现故障的效率。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.20',
          uuid: '126b189aa801404f99de500673cd6623',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F3/023(2006.01)I',
          applicationPublishNum: 'CN106873798A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '李瑾;胡官钦',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710083540.4',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710083540.4/201710083540.gif',
          allCatNum: 'G06F3/023(2006.01)I',
          patentName: '用于输出信息的方法和装置',
          abstracts:
            '本申请公开了用于输出信息的方法和装置。该方法的一具体实施方式包括：响应于接收到用户输入的字符，输出候选字词集合；响应于接收到用户输入的与字符相关联的语音，对语音进行语音识别得到识别字词集合；将识别字词集合与候选字词集合进行匹配得到匹配字词集合；输出匹配字词集合。该实施方式实现了对通过键盘输入法或手写输入法得到的候选字词进一步使用语音进行筛选，减少了候选字词的数量，从而提高了文字输入速度。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.16',
          uuid: '372204469e4046e283de94f7cffa2e6a',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06Q10/00(2012.01)I',
          applicationPublishNum: 'CN106875018A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '胡志广;张祐;胡达',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710005057.4',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710005057.4/201710005057.gif',
          allCatNum: 'G06Q10/00(2012.01)I',
          patentName: '一种超大规模机器自动化维修的方法和装置',
          abstracts:
            '本发明的目的是提供一种超大规模机器自动化维修的方法和装置。与现有技术相比，本发明收集超大规模机器中的软和/或硬件故障；对所述软和/或硬件故障进行故障分析，获得对应的故障数据；基于所述故障数据，采用维修状态机，对各个状态流转完成对所述超大规模机器的自动化维修，其中，对于需要迁移的数据所对应的机器进行迁移整机维修，对于存储型服务所对应的机器进行在线修盘。对于超大规模机器，本发明可以满足诸如故障检测、服务迁移、环境部署、机器维修状态流转、快速交付等，节约了运维人力、通过提高流转效率节约机器；检测、维修、服务迁移和部署实现全部自动化无需人工接入；机器交付效率高，可以实现小时级和分钟级交付。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.04',
          uuid: 'fbc0df030b734a609b66c97effd54a99',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'H04L29/08(2006.01)I',
          applicationPublishNum: 'CN106878388A',
          agency: '北京汉昊知识产权代理事务所(普通合伙) 11370',
          inventor: '李志文;郭波',
          agent: '罗朋',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710005058.9',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710005058.9/201710005058.gif',
          allCatNum: 'H04L29/08(2006.01)I;G06F3/06(2006.01)I',
          patentName: '对分布式存储系统中慢节点的检测',
          abstracts:
            '本发明的目的是提供一种检测分布式存储系统中的慢节点的方法、设备、系统以及计算机程序产品。其中，当检测到慢节点事件，客户端向所述文件的各副本节点发送异步请求，所述副本节点为存储有所述文件的副本的存储节点；根据所述各副本节点的响应信息，从所述各副本节点中确定慢节点；向所述主节点通知所述慢节点，以由所述主节点将所述慢节点从所述副本节点列表中删除；刷新所述文件的副本节点列表，以重新对其中一个副本节点中的文件副本执行数据写入操作。与现有技术相比，本发明通过对分布式存储系统中慢节点的探测及规避策略，使得分布式存储系统在用户的读写请求的耗时长尾显著减少。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.04',
          uuid: 'afe5b66fefd34e3ebb5225c652498d48',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G05B23/02(2006.01)I',
          applicationPublishNum: 'CN106873572A',
          agency: '北京鸿德海业知识产权代理事务所(普通合伙) 11412',
          inventor: '张博;云朋;佘晓丽',
          agent: '袁媛',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710081535.X',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710081535.X/201710081535.gif',
          allCatNum: 'G05B23/02(2006.01)I',
          patentName: '自动驾驶切断装置以及自动驾驶切断方法和系统',
          abstracts:
            '本发明提供了一种自动驾驶切断装置以及一种自动驾驶切断方法和系统，其中自动驾驶切断装置包括：乘客操作接口、控制开关以及指令过滤器；所述控制开关一端作为输入端用于连接驾驶系统，另一端连接所述指令过滤器；所述指令过滤器中未与控制开关相连接的一端作为输出端用于连接车辆底盘控制单元；所述乘客操作接口，用于被触发后断开所述控制开关；所述指令过滤器，用于若接收到来自驾驶系统的驾驶指令，则通过输出端输出该驾驶指令；否则，通过输出端输出本地存储的安全驾驶指令。本发明所提供的自动驾驶切断装置，用于实现在驾驶系统出现异常时切断驾驶系统所发出的驾驶指令，并能够确保车辆不会失去所有控制，从而提高车辆行驶的安全性。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.15',
          uuid: 'cfdfb8170da5452fb8be0fc1f4033552',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F17/30(2006.01)I',
          applicationPublishNum: 'CN104102638B',
          agency: '北京清亦华知识产权代理事务所(普通合伙) 11201',
          inventor: '林华;罗珺;杜洪先',
          agent: '宋合成',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201310113186.7',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/SQ/20170620/201310113186.7/201310113186.gif',
          allCatNum: 'G06F17/30(2006.01)I',
          patentName: '基于位置信息的推送方法、系统和装置',
          abstracts:
            '本发明提出一种基于位置信息的推送方法，其特征在于，包括以下步骤：推送服务器记录用户经过的多个区域；推送服务器根据用户在多个区域中使用电子地图的频次获得用户的常驻区域；当判断用户从常驻区域进入新区域时，推送服务器根据用户在常驻区域中的兴趣点信息向用户推送与新区域中的兴趣点信息。本发明本方法充分挖掘用户兴趣，进行个性化定制，可以更好的满足并激发用户需求，适用面广泛，易于扩展。本发明还公开了一种基于位置信息的推送系统和推送服务器。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2013.04.02',
          uuid: 'c9dac895850445d6ad085912af29ae02',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F17/30(2006.01)I',
          applicationPublishNum: 'CN106874471A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '蔡泽华',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.20',
          patentNum: 'CN201710083553.1',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170620/201710083553.1/201710083553.gif',
          allCatNum: 'G06F17/30(2006.01)I',
          patentName: '信息推送方法和装置',
          abstracts:
            '本申请公开了信息推送方法和装置。该方法的一具体实施方式包括：接收第一客户端发送的对目标网页的分享请求，其中，该分享请求包括第一用户标识和该目标网页的页面标识；基于该第一用户标识和该页面标识，生成第一标识，并生成用于指示该目标网页的、带有该第一标识的第一网址；响应于接收到第二客户端发送的包含该第一网址的第一网页查询请求，确定第二用户标识，并执行如下映射建立步骤：基于该第二用户标识和该页面标识，生成第二标识；建立该第一标识和该第二标识的映射；向与所建立的映射相关联的各个客户端推送预置信息。该实施方式实现了富于针对性的信息推送。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.16',
          uuid: 'e4590aa4d226408488200b75339ab98d',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'H04L29/08(2006.01)I',
          applicationPublishNum: 'CN106856508A',
          agency: '北京清亦华知识产权代理事务所(普通合伙) 11201',
          inventor: '颜小云;王尊;李孝众;张炳华',
          agent: '宋合成',
          applicationPublishTime: '2017.06.16',
          patentNum: 'CN201710069736.8',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170616/201710069736.8/201710069736.gif',
          allCatNum:
            'H04L29/08(2006.01)I;H04L29/06(2006.01)I;H04L12/24(2006.01)I',
          patentName: '数据中心的云监控方法及云平台',
          abstracts:
            '本发明提出一种数据中心的云监控方法及云平台，其中，方法包括：获取数据中心的基础设施的监控数据，对监控数据进行风险评估，得到基础设施存在风险的风险概率，在风险概率高于或者等于预设的阈值时输出告警信息。本发明中，通过云平台来监控数据中心的基础设施，可以基于采集的基础设施的监控数据，预先对基础设施可能出现风险或者故障的概率进行评估，在概率较大时可以输出告警信息，从而可以实现在故障出现之前向运维人员预先告警，使得运维人员可以尽早发现故障，对其进行排查或者修复，摒弃了现有的故障发生后再报警维修的监控模式，能够尽可能地保证了数据中心的持续稳定地运行。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.02.08',
          uuid: '6eff6082e4c04ff795391c7493f5d542',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F3/06(2006.01)I',
          applicationPublishNum: 'CN106843768A',
          agency: '北京清亦华知识产权代理事务所(普通合伙) 11201',
          inventor: '张利飞;刘星星;王伟;郎凯',
          agent: '宋合成',
          applicationPublishTime: '2017.06.13',
          patentNum: 'CN201710056326.X',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170613/201710056326.X/201710056326.gif',
          allCatNum: 'G06F3/06(2006.01)I',
          patentName: '硬盘数据擦除方法和装置',
          abstracts:
            '本发明提出一种硬盘数据擦除方法和装置，其中，方法包括：通过接收主服务器发送的硬盘擦除工具之后，运行该硬盘擦除工具，从而利用硬盘擦除工具，执行根据所述目标服务器中主机与硬盘的连接类型，采用所述连接类型对应的方式对所述硬盘进行定位得到定位信息，并针对定位信息指示的硬盘，执行数据擦除的步骤，无需拆除硬盘，就可以实现对硬盘数据的擦除，解决了现有技术中硬盘数据擦除成本较高，效率较低的技术问题。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.25',
          uuid: '65ca54cb6ae34186b0c196210fc5ca41',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        },
        {
          mainCatNum: 'G06F9/445(2006.01)I',
          applicationPublishNum: 'CN106843976A',
          agency: '北京英赛嘉华知识产权代理有限责任公司 11204',
          inventor: '郭利军;张宇',
          agent: '王达佐;马晓亚',
          applicationPublishTime: '2017.06.13',
          patentNum: 'CN201710056556.6',
          imgUrl:
            'http://pic.cnipr.com:8080/XmlData/FM/20170613/201710056556.6/201710056556.gif',
          allCatNum: 'G06F9/445(2006.01)I',
          patentName: '用于生成镜像文件的方法和装置',
          abstracts:
            '本申请公开了用于生成镜像文件的方法和装置。该方法的一具体实施方式包括：获取生成镜像文件的需求信息，其中，需求信息包括待生成镜像的文件的标识信息以及与待生成镜像的文件对应的配置信息；根据标识信息，获取待生成镜像的文件的安装文件；在预先创建的虚拟主机上安装该安装文件以生成待生成镜像的文件；从预先存储的定制文件集合中选取出与配置信息匹配的定制文件；基于与配置信息匹配的定制文件更新待生成镜像的文件，生成镜像文件。该实施方式实现了镜像文件的批量制作。',
          address: '100085 北京市海淀区上地十街10号百度大厦2层',
          applicationTime: '2017.01.25',
          uuid: '30569cdcadb845cf9009ea2c0f745496',
          patentType: '发明专利',
          applicantName: '北京百度网讯科技有限公司'
        }
      ]
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>