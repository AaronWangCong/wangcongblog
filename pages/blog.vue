<template>
  <div class="blog-wrap">
    <div class="bg-title">
      <img src="~/assets/images/bg-title.png" alt="">
      <div class="w">
        <h2>汪聪的博客</h2>
        <p>一个不断学习的前端工作者，逆行舟，不进退。</p>
      </div>
    </div>
    <div class="w">
      <!-- <v-aside></v-aside>
      <v-main></v-main> -->
    </div>
  </div>
</template>
<script>
  // import Aside from '~/components/blog/Aside.vue'
  // import Main from '~/components/blog/Main.vue'
  export default {
    name: '',
    components: {
      // 'v-aside': Aside,
      // 'v-main': Main,
    },
    layout: 'blog',
    props:{
    },
    data() {
      return {
      }
    },
    head () {
      return {
        title: '汪聪的博客',
        meta: [
          { charset: 'utf-8' },
          { hid: 'description', name: 'description', content: 'Aaron汪聪,前端汪聪,汪聪的个人博客,vue,nuxt,前端,js' },
          { hid: 'keyswords', name: 'keyswords', content: 'Aaron汪聪,前端汪聪,汪聪的个人博客,vue,nuxt,前端,js' }
        ],
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
@import '~assets/scss/blog/blog.scss';
</style>