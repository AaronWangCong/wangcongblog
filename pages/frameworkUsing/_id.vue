<template>
  <div class="frameworkUsing-detail">
    <div class="breadcrumb-wrap">
      <div class="w">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/frameworkUsing' }">框架运用-学以致用</el-breadcrumb-item>
          <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="frameworkUsing-detail-content w">
      <h2>崔天凯:挫败欲将中美关系45年心血毁于一旦的企图</h2>
      <div class="content-title">
        <span class="content-title-date">2018.09.20</span>
        <el-tag type="warning">Nuxt</el-tag>
        <span class="content-title-user">Aaron汪聪</span>
      </div>
      <div class="content-text">
        <p>祝贺美中贸委会成立45周年。你们的辛勤工作和卓著成就体现了美中贸委会和美国工商界致力于发展中美关系的愿景和决心。请允许我向美中贸委会所有成员以及历届董事会和主席致敬。我也想借此机会祝贺希尔斯大使，您为中美关系做出了杰出贡献，获得2018年度嘉奖之无愧。</p>
        <p>每逢重大纪念日，我们都会想到中美关系的先驱者。今天上午我在国家大教堂参加老布什前总统的葬礼，共同缅怀他精彩的一生与成就。老布什前总统因为参与构建现代中美关系而在中国享负盛名。最近，中国互联网流传一张老照片，是老布什前总统先生与夫人芭芭拉在天安门前骑自行车。这张照片拍摄于1974年，正是美中贸委会成立的后一年。老布什前总统对中国人来说之所以地位特殊，不仅因为他与中国渊源深厚，更重要的是他任总统期间曾与中国领导人一道共同引领中美关系成功走过艰难时期。他始终从两国长远利益出发，致力于促进两国人民之间的建设性接触和友谊。</p>
        <p>正是由于老布什前总统和在座诸位等有识之士的长期努力，中美关系在过去几十年取得长足发展，给两国人民带来了实实在在的利益。可以说，诸位的努力照亮了中美关系一路前行。</p>
        <p>然而，过去一年间，两国许多人都在为中美关系近况感到担忧。有人企图让中美脱钩，企图开启所谓的“新冷战”，企图以所谓的“百年马拉松”之名进行战略对抗。他们对我们多年来为之艰苦努力、来之不易的成就提出质疑，挑战我们的合作成果，给中美关系的未来带来巨大风险。包括美中贸委会以及工商界在内的诸多人士、机构都对此感到担忧和关切。</p>
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
.frameworkUsing-detail{
  width: 100%;
  .frameworkUsing-detail-content{
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