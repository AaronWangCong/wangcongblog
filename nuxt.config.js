// const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: '前端葱葱-葱葱前端|汪聪js|汪聪VUE|汪聪个人网站|汪聪全栈',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyswords', name: 'keyswords', content: '前端葱葱,葱葱前端,汪聪个人网站,汪聪vue,汪聪nuxt,汪聪全栈,汪聪js' },
      { hid: 'description', name: 'description', content: '前端葱葱，葱葱前端是一个个人门户网站，吃最好吃的技术，做最纯净的网站。我是前端葱葱，也是葱葱前端。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://at.alicdn.com/t/font_956898_h2itfzwued7.css' }
    ],
    script: [
      { src:'https://hm.baidu.com/hm.js?4669ca31a1d80c8746d9397110bbd0db', type: 'text/javascript', charset: 'utf-8'}
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  loading: { color: '#07A9E4' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/scss/reset.scss',
    '~assets/scss/main.scss',
  ],
  plugins: [
    { src: "@/plugins/element-ui", ssr: true },
    { src: "@/plugins/baiduTongji.js", ssr: false },
    { src: "@/plugins/baidutuisong.js", ssr: false },
    { src: "@/plugins/consoleInfo.js", ssr: false },
    { src: "@/plugins/tinymce-vue.js", ssr: false },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/oa', { target: 'http://127.0.0.1:8080/' }],
  ],
  build: {
    vendor: ['axios'],
    extractCSS: { allChunks: true },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
