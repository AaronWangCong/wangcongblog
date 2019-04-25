<template>
  <div class="basicTheory-detail">
    <div class="breadcrumb-wrap">
      <div class="w">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/basicTheory' }">基础理论-要点学习</el-breadcrumb-item>
          <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="basicTheory-detail-content w">
      <h2>嫦娥四号成功发射 开启首次月背之旅</h2>
      <div class="content-title">
        <span class="content-title-date">2018.09.20</span>
        <el-tag type="success">HTML</el-tag>
        <span class="content-title-user">Aaron汪聪</span>
      </div>
      <div class="content-text">
        <p>今天凌晨2时23分，我国在西昌卫星发射中心用长征三号乙运载火箭成功发射嫦娥四号探测器，开启了月球探测的新旅程。嫦娥四号探测器后续将经历地月转移、近月制动、环月飞行，最终实现人类首次月球背面软着陆，开展月球背面就位探测及巡视探测，并通过已在使命轨道运行的“鹊桥”中继星，实现月球背面与地球之间的中继通信。此次发射任务是长征系列运载火箭的第294次发射。</p>
        <p>嫦娥四号任务的工程目标，一是研制发射月球中继通信卫星，实现国际首次地月拉格朗日L2点的测控及中继通信；二是研制发射月球着陆器和巡视器，实现国际首次月球背面软着陆和巡视探测。嫦娥四号的科学任务主要是开展月球背面低频射电天文观测与研究；开展月球背面巡视区形貌、矿物组份及月表浅层结构探测与研究；试验性开展月球背面中子辐射剂量、中性原子等月球环境探测研究。为增进国际交流与合作，扩大开放共享，嫦娥四号任务开展了4项科学载荷方面的国际合作，搭载了3项由国内高校研制的科学技术试验项目。</p>
        <p>2014年，嫦娥三号任务圆满完成后，国防科工局牵头组织开展了嫦娥四号任务实施方案调整的论证工作。综合考虑国际前沿、科学价值、经济和技术可行性等因素，最终确定了月球背面软着陆和巡视探测的总体方案。月球背面具有独特的电磁场环境和地质特征，特别适合开展低频射电探测等空间天文学研究和月球物质成分探测等科学研究，同时，月球背面着陆探测尚属国际空白，有利于增进人类对宇宙未知奥秘的认知。</p>
        <p>嫦娥四号任务于2016年1月经国务院批准正式实施，包括中继星和探测器两次任务。“鹊桥”中继星于2018年5月21日在西昌卫星发射中心由长征四号丙遥二十七运载火箭成功发射，进入环地月拉格朗日L2点使命轨道，目前状态正常。</p>
      </div>
      <div class="content-share">
        <baidu-share></baidu-share>
      </div>
      <div class="content-footer">
        <p><a href="/">上一篇：XXXXXXXXXXXXXX</a></p>
        <p><a href="/">下一篇：XXXXXXXXXXXXXX</a></p>
      </div>
    </div>
  </div>
</template>
<script>
  import BaiduShare from '~/components/BaiduShare.vue'
  export default {
    name: '',
    components: {
      'baidu-share': BaiduShare
    },
    props:{
    },
    layout:'blog',
    data() {
      return {

      }
    },
    computed: {
    },
    created() {
    },
    mounted() {
      
    },
    methods: {
      
    },
  }
</script>
<style lang="scss">
.basicTheory-detail{
  width: 100%;
  .basicTheory-detail-content{
    background-color: #fff;
    padding-top: 20px;
    margin-top: 10px;
    padding-bottom: 20px;
    h2{
      text-align: center;
      font-size: 25px;
      color: #333;
    }
    .content-title{
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #999;
      padding: 10px;
      border-bottom: 1px dashed #ccc;
      .content-title-date{
        margin-right: 50px;
      }
      .el-tag{
        height: 23px;
        line-height: 23px;
        margin-right: 50px;
      }
      .content-title-user{
        color: #666;
      }
    }
    .content-text{
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      p{
        text-indent: 40px;
        font-size: 16px;
        color: #666;
        line-height: 25px;
      }
    }
  }
}
</style>