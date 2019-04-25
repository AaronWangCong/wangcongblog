<template>
  <div class="basicTheory-wrap">
    <div class="basicTheory-wrap-banner">
      <img src="~assets/images/basicTheoryBanner.jpg" alt="">
      <div>
        <h2>基础理论-要点学习</h2>
      </div>
    </div>

    <div class="breadcrumb-wrap">
      <div class="w">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>基础理论-要点学习</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="basicTheory-wrap-article w">
      <article-modal :articleInfo="articleBasicTheoryInfo"></article-modal>
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
      articleBasicTheoryInfo:[
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/SERP.jpg', title:'网站的布局', tag:'HTML', detail:'/basicTheory/', id:'1' },
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/11/seoxs.png', title:'LESS,SASS,SCSS', tag:'CSS', detail:'/basicTheory/', id:'2' },
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/screen-01.jpg', title:'Flex布局', tag:'CSS', detail:'/basicTheory/', id:'3' },
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/semantic-search.jpg', title:'粒子特效', tag:'H5C3', detail:'/basicTheory/', id:'4' },
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/08/whyVSye.jpg', title:'网页的编码格式', tag:'HTML', detail:'/basicTheory/', id:'5' },
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/09/START.jpg', title:'JavaScript基础理论', tag:'JS', detail:'/basicTheory/', id:'6' },
          { imgUrl:'https://www.simcf.cc/wp-content/uploads/2018/01/bdsf-1.jpg', title:'JavaScript交互体验', tag:'JS', detail:'/basicTheory/', id:'7' },
        ]
    };
  },
  head() {
    return {
      title: "基础理论-要点学习",
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
.basicTheory-wrap {
  width: 100%;
  .basicTheory-wrap-banner {
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
  .basicTheory-wrap-article{
    padding-top: 20px;
  }
}
</style>