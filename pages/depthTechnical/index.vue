<template>
  <div class="depthTechnical-wrap">
    <div class="depthTechnical-wrap-banner">
      <img src="~assets/images/basicTheoryBanner.jpg" alt="">
      <div>
        <h2>深入技术-个人解读</h2>
      </div>
    </div>

    <div class="breadcrumb-wrap">
      <div class="w">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>深入技术-个人解读</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="depthTechnical-wrap-article w">
      <article-modal :articleInfo="articleDepthTechnicalInfo"></article-modal>
    </div>
  </div>
</template>
<script>
import ArticleModal from '~/components/Article'
export default {
  name: "",
  components: {
    'article-modal':ArticleModal
  },
  props: {},
  layout: "blog",
  data() {
    return {
      articleDepthTechnicalInfo:[
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/SERP.jpg', title:'Javascrpt深入理解', tag:'JavaScript', detail:'/depthTechnical/', id:'8' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/11/seoxs.png', title:'JavaScript深入浅出', tag:'JavaScript', detail:'/depthTechnical/', id:'9' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/screen-01.jpg', title:'JQuery的运用', tag:'JQuery', detail:'/depthTechnical/', id:'10' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/semantic-search.jpg', title:'面向对象的编程思想', tag:'编程思想', detail:'/depthTechnical/', id:'11' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/08/whyVSye.jpg', title:'数据类型的处理', tag:'数据类型', detail:'/depthTechnical/', id:'12' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/START.jpg', title:'理解原型对象及原型链', tag:'数据类型', detail:'/depthTechnical/', id:'13' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/01/bdsf-1.jpg', title:'函数模式的介绍', tag:'JavaScript', detail:'/depthTechnical/', id:'14' },
      ]
    };
  },
  head() {
    return {
      title: "深入技术-个人解读",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Aaron汪聪,前端汪聪,汪聪的个人博客,vue,nuxt,前端,js,基础理论-要点学习"
        },
        {
          hid: "keyswords",
          name: "keyswords",
          content:
            "Aaron汪聪,前端汪聪,汪聪的个人博客,vue,nuxt,前端,js,基础理论-要点学习"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.depthTechnical-wrap {
  width: 100%;
  .depthTechnical-wrap-banner {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    & > div {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        color: #ccc;
      }
    }
  }
  .depthTechnical-wrap-article{
    padding-top: 20px;
  }
}
</style>