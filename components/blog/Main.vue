<template>
  <div class="blog-main">
    <main>
        <div class="filter-box">
            <dl class="filter-sort-box">
                <dt>排序：</dt>
                <dd>
                    <a href="javascript:void(0);" class="btn-filter-sort active" target="_self">默认</a>
                </dd>
                <dd>
                    <a href="https://blog.csdn.net/qq_42578500?orderby=UpdateTime" class="btn-filter-sort " target="_self">按更新时间</a>
                </dd>
                <dd>
                    <a href="https://blog.csdn.net/qq_42578500?orderby=ViewCount" class="btn-filter-sort " target="_self">按访问量</a>
                </dd>
            </dl>
        </div>

        <div class="article-list">
          <div class="article-item-box" v-for="(article,index) in articleInfo" :key="index">
              <h4 class="">
                  <a :href="article.url" target="_blank">
                      <span class="article-type">{{ article.type }} </span>
                      {{ article.title }} </a>
              </h4>
              <p class="content">
                  <a :href="article.url" target="_blank">
                      {{ article.content }}
                      </a>
              </p>
              <div class="info-box">
                  <p>
                      <span class="date">{{ article.createTime }}</span>
                  </p>
                  <p>
                      <span class="read-num">阅读数：{{ article.readNum }}</span>
                  </p>
                  <p>
                      <span class="read-num">评论数：{{ article.commentNum }}</span>
                  </p>
              </div>
          </div>
          <div class="article-item-box" data-articleid="83114584">
              <h4 class="">
                  <a href="https://blog.csdn.net/qq_42578500/article/details/83114584" target="_blank">
                      <span class="article-type type-4">
                          vue </span>
                      vue前端国际化 ——vue-i18n插件 安装与使用 </a>
              </h4>
              <p class="content">
                  <a href="https://blog.csdn.net/qq_42578500/article/details/83114584" target="_blank">
                      一、前言   趁着10月的最后一天，来写一篇关于前端国际化的实践型博客。国际化应该都不陌生，就是一个网站、应用可以实现语言的切换。   在这就不谈原理，只说说如何实现中英文的切换。做技术的总得先把 demo 做出来嘛。 二、demo 场景需求分析
                      需求很简单，左上角 ‘’网易云音... </a>
              </p>
              <div class="info-box d-flex align-content-center">
                  <p>
                      <span class="date">2018-10-17 18:05:20</span>
                  </p>
                  <p>
                      <span class="read-num">阅读数：24</span>
                  </p>
                  <p>
                      <span class="read-num">评论数：0</span>
                  </p>
              </div>
          </div>
          <div class="article-item-box" data-articleid="83036095">
              <h4 class="">
                  <a href="https://blog.csdn.net/qq_42578500/article/details/83036095" target="_blank">
                      <span class="article-type type-1">
                          sass </span>
                      sass(scss）的安装与使用 </a>
              </h4>
              <p class="content">
                  <a href="https://blog.csdn.net/qq_42578500/article/details/83036095" target="_blank">

                      CSS预编译器有 SASS LESS Stylus等等，SCSS是SASS3引入的新语法。那为什么要选择SCSS呢？那我只能说我喜欢啊！不管SASS也好，LESS也罢，还是Stylus都只是一种工具，各有各的优缺点，选择自己喜欢的用着舒服的就是了。没必要纠结这么多。
                      目录 准备工作（注意：... </a>
              </p>
              <div class="info-box d-flex align-content-center">
                  <p>
                      <span class="date">2018-10-13 10:35:48</span>
                  </p>
                  <p>
                      <span class="read-num">阅读数：5</span>
                  </p>
                  <p>
                      <span class="read-num">评论数：0</span>
                  </p>
              </div>
          </div>
          <div class="article-item-box" data-articleid="80863872">
              <h4 class="">
                  <a href="https://blog.csdn.net/qq_42578500/article/details/80863872" target="_blank">
                      <span class="article-type type-1">
                          原 </span>
                      JS去除字符串空格方法 </a>
              </h4>
              <p class="content">
                  <a href="https://blog.csdn.net/qq_42578500/article/details/80863872" target="_blank">
                      方法一：使用replace正则匹配的方法 去除所有空格: str = str.replace(/\s*/g,&amp;quot;&amp;quot;);       去除两头空格: str = str.replace(/^\s*|\s*$/g,&amp;quot;&amp;quot;);
                      去... </a>
              </p>
              <div class="info-box d-flex align-content-center">
                  <p>
                      <span class="date">2018-06-30 09:12:16</span>
                  </p>
                  <p>
                      <span class="read-num">阅读数：23</span>
                  </p>
                  <p>
                      <span class="read-num">评论数：0</span>
                  </p>
              </div>
          </div>
        </div>
    </main>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    props:{
    },
    data() {
      return {
        articleInfo:[
          { 
            url:'https://blog.csdn.net/qq_42578500/article/details/83035893',
            type:'vue', 
            title:'vue基于element-ui的三级CheckBox复选框', 
            content:'最近vue项目需要用到三级CheckBox复选框，需要实现全选反选不确定三种状态。但是element-ui table只支持多选行，并不能支持三级及以上的多选，所以写了这篇技术博文供以后学习使用。 效果图预览：   首先是页面布局，当然也可以使用框架自带的table布局，这里博主自',
            createTime:'2018-10-13 10:20:00',
            readNum:'23568',
            commentNum:'132' 
          },
          { 
            url:'https://blog.csdn.net/qq_42578500/article/details/83305048',
            type:'nodeJs', 
            title:'快速搭建nodejs本地服务器运行测试html/js', 
            content:'做前端的都知道，公司的项目在自己的电脑上搭建环境是挺麻烦的一件事情 首先：一般个人电脑没公司的配置性能好， 其次：搭建公司项目在自己电脑涉及很多缓存环境，资源环境包，数据库等的限制，加起来够搞一天了（熟悉公司搭建的环境除外） 就我自身公司而言情况是这样，我作为前端工程师',
            createTime:'2018-10-13 10:20:00',
            readNum:'23568',
            commentNum:'132' 
          },
          { 
            url:'https://blog.csdn.net/qq_42578500/article/details/83303427',
            type:'H5C3', 
            title:'H5C3粒子动画特效---7款', 
            content:'最近vue项目需要用到三级CheckBox复选框，需要实现全选反选不确定三种状态。但是element-ui table只支持多选行，并不能支持三级及以上的多选，所以写了这篇技术博文供以后学习使用。 效果图预览：   首先是页面布局，当然也可以使用框架自带的table布局，这里博主自',
            createTime:'2018-10-13 10:20:00',
            readNum:'23568',
            commentNum:'132' 
          },
          { 
            url:'https://blog.csdn.net/qq_42578500/article/details/83115321',
            type:'JavaScript', 
            title:'JavaScript substr() 方法：从字符串中提取字符', 
            content:'最近vue项目需要用到三级CheckBox复选框，需要实现全选反选不确定三种状态。但是element-ui table只支持多选行，并不能支持三级及以上的多选，所以写了这篇技术博文供以后学习使用。 效果图预览：   首先是页面布局，当然也可以使用框架自带的table布局，这里博主自',
            createTime:'2018-10-13 10:20:00',
            readNum:'23568',
            commentNum:'132' 
          },
          { 
            url:'https://blog.csdn.net/qq_42578500/article/details/83115247',
            type:'Jquery', 
            title:'Jquery判断数组是否包含此元素：$.inArray()的用法', 
            content:'最近vue项目需要用到三级CheckBox复选框，需要实现全选反选不确定三种状态。但是element-ui table只支持多选行，并不能支持三级及以上的多选，所以写了这篇技术博文供以后学习使用。 效果图预览：   首先是页面布局，当然也可以使用框架自带的table布局，这里博主自',
            createTime:'2018-10-13 10:20:00',
            readNum:'23568',
            commentNum:'132' 
          },
        ]
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
@import '~assets/scss/blog/blog-main.scss';
</style>