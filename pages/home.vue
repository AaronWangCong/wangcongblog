<template>
  <div class="home-wrap">
    <div class="home-banner">
      <el-carousel :interval="3000" :height="bannerHeight+'px'">
        <el-carousel-item v-for="(item,index) in imgInfo" :key="index">
          <div class="slide-img">
            <img :src="item.url" alt="" ref="image" @load="imageLoaded()">
            <div class="slide-img-bg"></div>
            <div class="slide-img-text">
              <h2>{{ item.title }}</h2>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="home-slogan">
      <div class="w">
        <div class="blue">通知</div>
        <message-carousel :data-list="messageList">
          <template slot-scope="{ row }">
            <nuxt-link :to="{ path: '/',params: { tabIndex: 1 } }" tag="div" class="message-box ellipsis">
              <span class="message-date">{{ row.date }}</span>&nbsp;&nbsp;&nbsp;&nbsp;{{ row.content }}
            </nuxt-link>
          </template>
        </message-carousel>
      </div>
    </div>

    <div class="home-card">
      <div class="w">
        <div class="card-item card-item1" @click="goCardDetail('基础理论')">
          <div class="card-item-bg"></div>
          <div class="card-item-text">
            <p>125篇</p>
            <h2>基础理论-要点学习</h2>
            <span>HTML、CSS、JS</span>
          </div>
        </div>
        <div class="card-item card-item2" @click="goCardDetail('深入技术')">
          <div class="card-item-bg"></div>
          <div class="card-item-text">
            <p>125篇</p>
            <h2>深入技术-个人解读</h2>
            <span>JavaScript高级</span>
          </div>
        </div>
        <div class="card-item card-item3" @click="goCardDetail('框架运用')">
          <div class="card-item-bg"></div>
          <div class="card-item-text">
            <p>125篇</p>
            <h2>框架运用-学以致用</h2>
            <span>VUE、Nuxt、Node</span>
          </div>
        </div>
      </div>
    </div>

    <div class="home-article">
      <div class="w">
        <div class="left-article">
          <div class="article-item" v-for="(item,index) in articleInfo" :key="index">
            <h2 class="article-item-title">VUE3.0首发，不能不看的船新版本</h2>
            <a class="article-item-label">VUE、Nuxt、Node<span> · 4天前</span></a>
            <div class="article-item-img"><img :src="item.url" alt=""><span class="card-item-bg"></span></div>
            <p class="article-item-content">近日，Vue的作者尤雨溪在Medium上宣布正式发布Vue CLI 3.0，它也将为很多开发者带来期待已久的新特性...</p>
            <span class="article-item-user"><i><img src="~assets/images/3_qq_42578500.jpg" alt=""></i>Aaron汪聪</span>
          </div>
        </div>

        <div class="right-bar">
          <div class="right-bar-about">
            <h2>关于站长</h2>
            <p>一个不断学习的前端工作者，本站主要用于个人技术博文的展示及个人成长的记录。不断成长，努力前行。</p>
            <p>本站除了技术交流其他勿扰，最终解释权归站长所有。</p>
          </div>

          <div class="right-bar-tag">
            <el-tag>Vue</el-tag>
            <el-tag type="success">HTML</el-tag>
            <el-tag type="info">JavaScript</el-tag>
            <el-tag type="warning">Nuxt</el-tag>
            <el-tag type="danger">NodeJS</el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import banner1 from '~/assets/images/banner/banner01.png'
  import banner2 from '~/assets/images/banner/banner02.jpg'
  import banner3 from '~/assets/images/banner/banner03.png'
  import banner4 from '~/assets/images/banner/banner04.jpg'
  import AutoCarousel from '~/components/autoCarousel.vue'
  import {myNote,departuresAndDestinations} from '../lib/api.js'
  import axios from 'axios'

  export default {
    name: '',
    components: {
      'message-carousel': AutoCarousel
    },
    props:{
    },
    layout:'blog',
    data() {
      return {
        imgInfo:[
          { title: '前端技术', url: banner1, content:'美化网页布局，增加网站实用性。'},
          { title: 'nodeJS', url: banner2, content:'搭建node后台，让数据飞起来。'},
          { title: '框架运用', url: banner3, content:'学最好的框架，用最新的技术。'},
          { title: 'SEO技术', url: banner4, content:'进行网站SEO优化，扩展网站流量。'},
        ],
        bannerHeight:'',
        count:0,
        articleInfo:[
          { title: '', url: banner1 },
          { title: '', url: banner2 },
          { title: '', url: banner3 },
          { title: '', url: banner4 },
        ],
        messageList: [
          { id: 1,date: '12-03',content: '欢迎来到Aaron汪聪的个人网站！' },
          { id: 2,date: '12-05',content: '微博知乎占头条谁与争锋，桌面移动待前端一统江湖!' },
          { id: 3,date: '12-20',content: '圣诞来临，元旦即到，新春不远，你获得了什么！' }
        ],
      }
    },
    head () {
      return {
          title: '前端葱葱-葱葱前端|汪聪js|汪聪VUE|汪聪个人网站|汪聪全栈',
          meta: [
            { charset: 'utf-8' },
            { hid: 'keyswords', name: 'keyswords', content: '前端葱葱,葱葱前端,汪聪个人网站,汪聪vue,汪聪nuxt,汪聪全栈,汪聪js' },
            { hid: 'description', name: 'description', content: '前端葱葱，葱葱前端是一个个人门户网站，吃最好吃的技术，做最纯净的网站。我是前端葱葱，也是葱葱前端。' }
          ],
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
      window.addEventListener('resize', () => {
        if(this.$refs.image[0]){
          this.bannerHeight = this.$refs.image[0].height
        }
      }, false)
    },
    methods: {
      imageLoaded(){
        this.count ++
        if(this.count === 1){
          this.$nextTick(() => {
            this.bannerHeight = this.$refs.image[0].height
          })
        }
      },
      goCardDetail(val){
        if(val == '基础理论'){
          this.$router.push('/basicTheory')
        }else if(val == '深入技术'){
          this.$router.push('/depthTechnical')
        }else{
          this.$router.push('/frameworkUsing')
        }
      }
    },
  }
</script>
<style lang="scss">
@import '~/assets/scss/home.scss';
</style>