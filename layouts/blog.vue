<template>
  <div class="layout-wrap" :class="isShow ? 'show' : ''">
    <div class="DrawerPage" :class="isShow ? 'show' : ''">
      <v-head></v-head>
      <div class="layout-wrap-content">
        <nuxt />
      </div>
      <v-footer></v-footer>
    </div>
    <div class="DrawerClose" :class="isShow ? 'show' : ''" @click="closeMenu()">
        <i class="el-icon-arrow-right"></i>
    </div>
    <div class="DrawerWindow" :class="isShow ? 'show' : ''">
      <v-asideMenu></v-asideMenu>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import AsideMenu from "~/components/asideMenu.vue";
import Footer from "~/components/Footer.vue";
import { mapState, mapMutations } from 'vuex';
export default {
  name: "",
  components: {
    "v-head": Header,
    'v-footer': Footer,
    'v-asideMenu': AsideMenu,
  },
  props: {},
  data() {
    return {
      title: "Wangcong.wang",
      routeParams: this.$route.params
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: "utf-8" },
        { hid: "description", name: "description", content: "汪聪,个人博客,vue,nuxt,前端,js" },
        { hid: "keyswords", name: "keyswords", content: "汪聪,个人博客,vue,nuxt,前端,js" }
      ],
      script: [
        { src:'//code.tidio.co/irncccg0ddbkejvx8en2lvgwcuebnssz.js', type: 'text/javascript', charset: 'utf-8'},
      ],
      __dangerouslyDisableSanitizers: ['script']
    };
  },
  computed: {
    ...mapState({
      isShow: state => state.common.isShow
    })
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val.params);
        // Object.assign(this.routeParams, val.params)
        this.setAsideMenuShow(false)
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations("common",["setAsideMenuShow"]),
    showMenu() {
      this.setAsideMenuShow(true)
    },
    closeMenu() {
      this.setAsideMenuShow(false)
    }
  }
};
</script>

<style lang='scss'>
.DrawerPage {
  position:absolute;
  width:100%;
  height:100vh;
  left:0vw;
  bottom: 0;
  background-color:#f1f1f1;
  transition:all 0.6s;
  overflow: visible;
  &.show{
    transform:scale(0.9, 0.9);
    left:75%;
    box-shadow:0 0 30px rgba(0, 0, 0, 0.2);
    transform-origin:0;
  }
}

.DrawerClose{
  position:absolute;
  width:40%;
  height:100vh;
  right:0;
  top:0;
  bottom: 0;
  color:transparent;
  padding-bottom:30px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  background-image:linear-gradient(90deg,rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
  letter-spacing:5px;
  font-size:50px;
  opacity:0;
  pointer-events:none;
  transition:all 0.6s;
  z-index: 1001;
  &.show{
    opacity:1;
    pointer-events:all;
    width:25%;
    color:#fff;
  }
  i{
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 20px;
  }
}

.DrawerWindow{
  position:absolute;
  width:75%;
  left:0;
  top:0;
  bottom: 0;
  transform:scale(0.9, 0.9) translateX(-100%);
  opacity:0;
  pointer-events:none;
  transition:all 0.6s;
  overflow: hidden;
  background: #555;
  &.show{
    transform:scale(1, 1) translateX(0%);
    opacity:1;
    pointer-events:all;
  }
}

.layout-wrap {
  width:100%;
  height: 100vh;
  overflow: visible;
  &.show{
    position: fixed;
    top: 0;
    left: 0;
  }
  .header-btn{
    width: 100%;
    height: 40px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .layout-wrap-content{
    width: 100%;
    min-height: 800px;
    padding-top: 80px;
  }
}
</style>
