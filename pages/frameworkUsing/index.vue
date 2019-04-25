<template>
  <div class="frameworkUsing-wrap">
    <div class="frameworkUsing-wrap-banner">
      <img src="~assets/images/basicTheoryBanner.jpg" alt="">
      <div>
        <h2>框架运用-学以致用</h2>
      </div>
    </div>

    <div class="breadcrumb-wrap">
      <div class="w">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>框架运用-学以致用</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="frameworkUsing-wrap-article w">
      <article-modal :articleInfo="articleFrameworkUsingInfo"></article-modal>
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
      articleFrameworkUsingInfo:[
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/SERP.jpg', title:'运用bootstrap制作任何网站', tag:'Bootstrap', detail:'/frameworkUsing/', id:'15' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/11/seoxs.png', title:'NodeJS搭建服务器', tag:'NodeJS', detail:'/frameworkUsing/', id:'16' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/screen-01.jpg', title:'Vue框架单页面开发', tag:'VUE', detail:'/frameworkUsing/', id:'17' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/semantic-search.jpg', title:'Vuex实现状态管理', tag:'VUE', detail:'/frameworkUsing/', id:'18' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/08/whyVSye.jpg', title:'Nuxt.js实现服务端渲染', tag:'Nuxt', detail:'/frameworkUsing/', id:'19' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/START.jpg', title:'elementUI框架进行快速开发', tag:'ElementUI', detail:'/frameworkUsing/', id:'20' },
        { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/01/bdsf-1.jpg', title:'Mui移动端开发', tag:'Mui', detail:'/frameworkUsing/', id:'21' },
      ]
    };
  },
  head() {
    return {
      title: "框架运用-学以致用",
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
.frameworkUsing-wrap {
  width: 100%;
  .frameworkUsing-wrap-banner {
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
  .frameworkUsing-wrap-article{
    padding-top: 20px;
  }
}
</style>