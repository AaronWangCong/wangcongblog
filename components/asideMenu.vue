<template>
  <div class="asideMenu-wrap">
    <div class="asideMenu-user">
      <img src="~assets/images/3_qq_42578500.jpg" alt="">
      <p>一个不断学习的前端工作者，本站主要用于个人技术博文的展示及个人成长的记录。不断成长，努力前行。</p>
      <p>本站除了技术生活展示其他勿扰，最终解释权归站长所有。</p>
      <span>移动及电脑全端体验 By: Aaron 汪聪</span>
      <div v-if="userInfo" class="logout-btn" @click="logout($router)">退出</div>
    </div>
    <ul>
      <li class="active-item">
          <nuxt-link :class="{ 'on': $route.name === 'home' }" to="/home"><span><img src="~assets/images/asideMenu/home.png" alt="">首页</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
      <li>
          <nuxt-link :class="{ 'on': $route.name === 'blog' }" to="/blog"><span><img src="~assets/images/asideMenu/blog.png" alt="">博客</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
      <li>
          <nuxt-link :class="{ 'on': $route.name === 'timeMachine' }" to="/timeMachine"><span><img src="~assets/images/asideMenu/img.png" alt="">时光机</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
      <li>
          <nuxt-link :class="{ 'on': $route.name === 'dailyRecord' }" to="/dailyRecord"><span><img src="~assets/images/asideMenu/book.png" alt="">日志</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
      <li>
          <nuxt-link :class="{ 'on': $route.name === 'personalResume' }" to="/personalResume"><span><img src="~assets/images/asideMenu/school.png" alt="">站长介绍</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
      <li v-if="userInfo">
          <nuxt-link :class="{ 'on': $route.name === 'tinymce' }" to="/tinymce"><span><img src="~assets/images/asideMenu/edit.png" alt="">写博客</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
      <li v-else>
          <nuxt-link :class="{ 'on': $route.name === 'login' }" to="/login"><span><img src="~assets/images/asideMenu/xuanzhang.png" alt="">登录</span><i class="el-icon-arrow-right"></i></nuxt-link>
      </li>
    </ul>
    <p class="copyright">版权所有 © {{ (new Date()).getFullYear() }} Power By Aaron <a href="http://www.miitbeian.gov.cn" target="_blank">鄂ICP备18027009号-1</a></p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapState("userLogin", {
      userInfo: state => state.userInfo
    })
  },
  created() {
    this.getUserInfo()
  },
  mounted() {
    console.log("this.userInfo", this.userInfo);
  },
  methods: {
    ...mapActions("userLogin", ["logout", "getUserInfo"]),
  }
};
</script>
<style lang="scss">
// @import "~assets/scss/header.scss";
.asideMenu-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .logout-btn{
    color: #666;
    font-size: 14px;
    background-color: #fff;
    width: 40px;
    padding: 5px;
    border-radius: 3px;
    display: inline-block;
    line-height: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .asideMenu-user{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    &>img{
      width: 75px;
      height: 75px;
      border-radius: 50%;
      margin-bottom: 30px;
    }
    p{
      text-indent: 20px;
      font-size: 13px;
    }
    &>span{
      font-size: 12px;
      color: rgb(240, 185, 36);
    }
  }
  ul{
    margin: 20px 0 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    li{
      a{
        width: 100%;
        display: inline-block;
        line-height: 20px;
        color: #8799a3;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        img{
          width: 25px;
          height: 25px;
          vertical-align: middle;
          margin-right: 10px;
        }
        i{
          margin-right: 10px;
        }
      }
      &:not(:last-child){
        border-bottom: 1px solid #e8eaeb;
      }
    }
  }
  .copyright{
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    a{
      color: #999;
    }
  }
}
</style>