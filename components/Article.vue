<template>
  <div class="article-post-wrap">
    <div class="post-style-card" v-for="(item,index) in articleInfo" :key="index">
      <nuxt-link class="post-img" :to="{path: item.detail+item.id,params:{title:item.title}}" :style="'background-image: url('+item.imgUrl+')'"></nuxt-link>
      <div class="post-top">
        <div class="post-title">
          <nuxt-link :to="{path: item.detail+item.id,params:{title:item.title}}">{{ item.title }}</nuxt-link>
        </div>
        <div class="post-top-meta">
          <span class="post-tag">
            <i class="fa fa-tag"></i>
            <a href="javascript:;">{{ item.tag }}</a>
          </span>
          <span class="post-time">2018.11.06</span>
        </div>
      </div>
      <div class="p-3">
        <ul class="post-meta-bottom">
          <li class="post-meta-author">
            <a class="d-block" href="javascript:;" target="_blank">
              <img src="~assets/images/3_qq_42578500.jpg" class="avatar avatar-96" height="96" width="96">
              <span class="d-inline-block">Aaron汪聪</span>
            </a>
          </li>
          <li class="post-meta-view pull-right ">
            <i class="czs-eye-l"></i> 158
          </li>
          <li class="post-meta-comments pull-right ">
            <i class="czs-comment-l"></i> 0
          </li>
          <li class="post-meta-like pull-right ">
            <i class="czs-heart-l"></i>
            <span class="count">0</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    props:{
      articleInfo:{
        type:Array,
        rquire:true
      }
    },
    layout:'',
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
.article-post-wrap{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .post-style-card {
    margin-bottom: 30px;
    background-color: #fff;
    width: 350px;
    box-shadow: 0 1px 10px #ccc;
    .post-img{
      height: 0;
      padding-bottom: 60%;
      position: relative;
      display: block;
      overflow: hidden;
      background-image: url(https://www.simcf.cc/wp-content/uploads/2018/11/seoxs.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      text-decoration: none;
      background-color: transparent;
      &::after{
        opacity: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.01) 2%, rgba(0,0,0,0.95));
        transition: opacity .4s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: " ";
        overflow: hidden;
        display: block;
      }
      &:hover{
        &::after{
          opacity: 0.5;
        }
      }
    }
    .post-top{
      padding: 15px 15px 0;
      .post-title a {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
        display: block;
        color: #333;
        text-decoration: none;
      }
      .post-top-meta {
        overflow: hidden;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a,span{
          color: #999;
          font-size: 14px;
          text-decoration: none;
        }
      }
    }
    .p-3 {
      padding: 15px;
      ul{
        padding: 0;
        margin: 0;
        list-style: none;
        li{
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          color: #8a8a8a;
          &:first-child {
            margin-left: 0;
            a{
              color: #404040;
              img{
                width: 22px;
                height: 22px;
                border-radius: 22px;
                top: 0;
                left: 0;
                display: inline-block;
                vertical-align: middle;
              }
              span{
                display: inline-block;
              }
            }
          }
        }
        .pull-right {
          float: right;
        }
      }
    }
    @media screen and (max-width:1100px){
      width: 32%;
      margin-bottom: 20px;
    }
    @media screen and (max-width:660px){
      width: 49%;
      margin-bottom: 10px;
      .post-top{
        padding: 10px 10px 0;
      }
      .post-title a {
        font-size: 16px !important;
      }
      .p-3 {
        padding-top: 0;
        li{
          font-size: 12px;
        }
      }
    }
    @media screen and (max-width:350px){
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>