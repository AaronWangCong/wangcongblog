import Vue from 'vue'
import tinymce from 'tinymce/tinymce' //配置富文本
import 'tinymce/themes/silver/theme'  //引入富文本的主要脚本
import 'tinymce/themes/mobile/theme'  //引入富文本的主要脚本移动端
import lang from '@/static/tinymce/zh_CN.js'; //引用中文语言
import '@/static/tinymce/skins/ui/oxide/skin.min.css'; //富文本样式
import '@/static/tinymce/skins/ui/oxide/skin.mobile.min.css'; //富文本样式移动端
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'

import 'tinymce/plugins/paste'
import 'tinymce/plugins/importcss'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/media'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/preview'
 
Vue.use(tinymce)