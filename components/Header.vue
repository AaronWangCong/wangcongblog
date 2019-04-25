<template>
  <div class="header-wrap">
    <header class="container w">
        <div class="menu-logo">
            <nuxt-link to="/home"><img src="~/assets/images/header-logo.png" alt="wc-logo"></nuxt-link>
        </div>
        <div class="menu-nav">
            <ul>
                <li class="active-item">
                    <nuxt-link :class="{ 'on': $route.name === 'home' }" to="/home">首页</nuxt-link>
                </li>
                <li>
                    <nuxt-link :class="{ 'on': $route.name === 'blog' }" to="/blog">博客</nuxt-link>
                </li>
                <li>
                    <nuxt-link :class="{ 'on': $route.name === 'timeMachine' }" to="/timeMachine">时光机</nuxt-link>
                </li>
                <li>
                    <nuxt-link :class="{ 'on': $route.name === 'dailyRecord' }" to="/dailyRecord">日志</nuxt-link>
                </li>
                <li>
                    <nuxt-link :class="{ 'on': $route.name === 'personalResume' }" to="/personalResume">站长介绍</nuxt-link>
                </li>
                <li v-if="userInfo">
                    <a href="javascript:;" @click="logout($router)">退出</a>
                </li>
                <li v-else>
                    <nuxt-link :class="{ 'on': $route.name === 'login' }" to="/login">登录</nuxt-link>
                </li>
                <li v-if="userInfo">
                    <nuxt-link :class="{ 'on': $route.name === 'tinymce' }" to="/tinymce">写博客</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="menu-icon" @click="showMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.userLogin.userInfo,
      
      isShow: state => state.common.isShow
    })
  },
  created() {},
  mounted() {
    console.log("this.userInfo", this.userInfo);
  },
  methods: {
    ...mapActions("userLogin", ["logout"]),
    ...mapMutations("common", ["setAsideMenuShow"]),

    showMenu() {
      this.setAsideMenuShow(true)
    }
  }
};
</script>
<style lang="scss">
@import "~assets/scss/header.scss";
</style>