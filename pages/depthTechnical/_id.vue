<template>
  <div class="depthTechnical-detail">
    <div class="breadcrumb-wrap">
      <div class="w">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/basicTheory' }">深入技术-个人解读</el-breadcrumb-item>
          <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="depthTechnical-detail-content w">
      <h2>中国空军歼16大机群震撼编队飞行 首次9机同框</h2>
      <div class="content-title">
        <span class="content-title-date">2018.09.20</span>
        <el-tag type="info">JavaScript</el-tag>
        <span class="content-title-user">Aaron汪聪</span>
      </div>
      <div class="content-text">
        <p>[首次9机“同框”！歼16大机群震撼来袭 现场画面超燃]近日军方媒体报道了三夺“金头盔”的中国空军航空兵某旅，其中多次出现了该部新换装的歼-16战机多机大型编队飞行的画面。</p>
        <p>此前这个旅的歼-16战机在军营开放活动上，也曾展示过发射红外干扰弹、多机低空编队等飞行动作，场面壮观。歼-16战机频繁以多机编队形式在各种场合亮相，不断创造编队飞机数量的“新高”。</p>
        <p>2014年，嫦娥三号任务圆满完成后，国防科工局牵头组织开展了嫦娥四号任务实施方案调整的论证工作。综合考虑国际前沿、科学价值、经济和技术可行性等因素，最终确定了月球背面软着陆和巡视探测的总体方案。月球背面具有独特的电磁场环境和地质特征，特别适合开展低频射电探测等空间天文学研究和月球物质成分探测等科学研究，同时，月球背面着陆探测尚属国际空白，有利于增进人类对宇宙未知奥秘的认知。</p>
        <p>此前这个旅的歼-16战机在军营开放活动上，也曾展示过发射红外干扰弹、多机低空编队等飞行动作，场面壮观。歼-16战机频繁以多机编队形式在各种场合亮相，不断创造编队飞机数量的“新高”。</p>
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
.depthTechnical-detail{
  width: 100%;
  .depthTechnical-detail-content{
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