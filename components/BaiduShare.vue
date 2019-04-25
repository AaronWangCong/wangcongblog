<template>
  <div class="entry-share">
    <div class="share-box">
      <ul class="bdsharebuttonbox">
        <li class="share-pu">分享到：</li>
        <li><a title="分享到新浪微博" class="fa fa-weibo" data-cmd="tsina" onclick="return false;" href="#"></a></li>
        <li><a title="分享到微信" class="fa fa-wechat" data-cmd="weixin" onclick="return false;" href="#"></a></li>
        <li><a title="分享到人人网" class="fa fa-renren" data-cmd="renren" onclick="return false;" href="#"></a></li>
        <li><a title="分享到QQ空间" class="fa fa-qq" data-cmd="qzone" onclick="return false;" href="#"></a></li>
        <li><a title="分享到Facebook" class="fa fa-facebook" data-cmd="fbook" onclick="return false;" href="#"></a></li>
        <li><a title="分享到Twitter" class="fa fa-twitter" data-cmd="twi" onclick="return false;" href="#"></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    props:{
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
      this.baiduShare()
    },
    methods: {
      baiduShare(){
        window._bd_share_config = {
          "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdDesc": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "1",
            "bdSize": "16"
            },
            "share": {
              "bdSize": 16
              }
          };
          (document.getElementsByTagName('head')[0] || body).appendChild(document.createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~ ( - new Date() / 36e5);
      }
    },
  }
</script>
<style lang="scss">
/** 分享样式 **/
 
.entry-share {
	font-size: 14px;
	text-align: center;
	display: flex;
  margin-bottom: 10px;
	}
.entry-share .share-pu {
	float: left;
	color: #4d4d4d;
	font-weight: 700;
	line-height: 40px;
	}
	.entry-share ul {
		margin: 0;
	}
.entry-share ul li {
	list-style: none;
	margin: 0;
	}
.entry-share li {
	float: left;
	}
.entry-share .share-box {
	display: inline-block;
	overflow: hidden;
	}
.entry-share a {
	float: left;
	color: #666;
	font-size: 16px !important;
	border-radius: 40px;
	margin-right: 10px;
	border: 1px solid #666;
	}
.entry-share .bdsharebuttonbox a:hover {
	text-decoration: none;
	color: #fff;
	}
.entry-share .bds_more {
	color: #666 !important;
	}
.entry-share .bds_more:hover {
	color: #fff !important;
	}
	/** 图标大小 **/
.entry-share a {
	background: transparent !important;
	width: 30px !important;
	height: 30px !important;
	padding: 0 !important;
	margin: 5px !important;
	float: none !important;
	font-size: 16px !important;
	display: block !important;
	text-align: center !important;
	line-height: 30px !important;
	}
	/** 不同图标悬停背景颜色 **/
	.entry-share a:hover.fa-weibo {
	background: #e74c3c !important;
	border-color: #e74c3c;
	}
	.entry-share a:hover.fa-wechat {
	background: #2ecc71 !important;
	border-color: #2ecc71;
	}
	.entry-share a:hover.fa-renren {
	background: #4760a5 !important;
	border-color: #4760a5;
	}
	.entry-share a:hover.fa-qq {
	background: #50abf1 !important;
	border-color: #50abf1;
	}
	.entry-share a:hover.fa-facebook {
	background: #3777be !important;
	border-color: #3777be;
	}
.entry-share a:hover.fa-twitter {
	background: #2174c3 !important;
	border-color: #2174c3;
	}
.bdsharebuttonbox a:hover.fa-plus-circle {
	background: #2174c3 !important;
	border-color: #2174c3;
}
</style>