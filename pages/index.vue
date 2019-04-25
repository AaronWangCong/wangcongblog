<template>
  <section class="container-index">
    <div>
      <h2 class="title">
        葱葱前端
      </h2>
      <div class="index-content">
        <p :class="!centerDialogVisible?'p2':''">落在一个人一生中的雪，我们不能全部看见。每个人都在自己的生命中孤独地过冬。我们帮不了谁。</p>
        <p :class="!centerDialogVisible?'p3':''">其实你们不知道，只要有一个人睡着了，在梦里认真想念另一个人，天上就会亮起一颗星。所以后半夜应该会有那么壮阔璀璨的星河。</p>
        <p :class="!centerDialogVisible?'p4':''">指间漫漫轨迹，如此繁复，静书笔端流年，相思腕底，有一种，即使是在梦里也无法躲开的疼痛缭绕着。</p>
        <p :class="!centerDialogVisible?'p5':''">一身覆雪，雪洗风尘。凝视旷野，雪落无言，心灵沉静如冬。</p>
        <p :class="!centerDialogVisible?'p6':''">当你在高处的时候，你的朋友知道你是谁;当你坠落的时候，你才知道你的朋友是谁。</p>
        <p :class="!centerDialogVisible?'p7':''">突然在某一刻，你有没有很想回到某年某月的某天。</p>
        <p :class="!centerDialogVisible?'p8':''">纷飞，枉自凝眸枉自愁，你到底遗落在红尘的什么地方?惹尘世纷飞，在脑海里不断浮浮沉沉的穿青衫的身影折叠万千次。</p>
        <p :class="!centerDialogVisible?'p9':''">在我的世界里，有一种旋律，它已有了经年的灵性，让我痴迷忘返，光阴穿过林间的叶隙，我以为我就是你的天使。</p>
        <p :class="!centerDialogVisible?'p10':''">不要总是估量自己在别人心中的地位，活在别人的眼神里，就等于失去了自我。</p>
        <p :class="!centerDialogVisible?'p11':''">年轻的时候，多忙活点，是好事，不管是徒劳的还是有用的，这都促使你成熟。</p>
      </div>
      <div class="links-box" v-if="linksShow">
        <div class="links-text" :class="!centerDialogVisible?'links-text-animate':''">
          <span v-for="el in msgKu" :key="el.id" class="fly" :style="{top:el.top + 'px',animation: 'go 10s '+el.time+'s linear infinite'}"><span :style="'color:'+el.random_color">{{ el.create_time }} {{ el.name }}:{{ el.msg }}</span></span>
        </div>
        <div class="links-messegs" :class="!centerDialogVisible?'links-messegs-animate':''">
          <el-input type="text" v-model="messegsForm.msg" autocomplete="off" placeholder="年轻人，你想说点啥？" @keyup.enter="postMessegs()"></el-input>
          <span class="submit-btn" :class="!canClick?'submit-btn-disable':''" @click="postMessegs()">{{ btncontent }}</span>
        </div>
        <div class="links-btn">
          <nuxt-link to="/home" class="button--green">Go Home</nuxt-link>
          <a href="https://github.com/AaronWangCong/wangcongblog.git" class="button--grey">GitHub</a>
        </div>
      </div>
    </div>

    <el-dialog
      title="温馨提示"
      :visible.sync="centerDialogVisible"
      :close-on-click-modal="false"
      center
      >
      <p class="p1">答案很长，我准备用一生的时间来回答。你准备要听了吗？</p>
      <p class="red">网站建设中....</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="tipsShow()">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import { mapActions,mapState, mapMutations } from 'vuex'
import card1 from 'assets/images/banner/banner01.png'

export default {
  components: {
    // Logo
  },
  head () {
    return {
      title: '前端葱葱-葱葱前端|汪聪js|汪聪VUE|汪聪个人网站|汪聪全栈',
      meta: [
        { charset: 'utf-8' },
        { hid: 'keyswords', name: 'keyswords', content: '前端葱葱,葱葱前端,汪聪个人网站,汪聪vue,汪聪nuxt,汪聪全栈,汪聪js' },
        { hid: 'description', name: 'description', content: '前端葱葱，葱葱前端是一个个人门户网站，吃最好吃的技术，做最纯净的网站。我是前端葱葱，也是葱葱前端。' }
      ]
    }
  },
  data() {
    return {
      centerDialogVisible:true,
      settings:{
          image: card1, // image path
          dropRadius: 3,   // radius of the source ripple
          width: 800,        // width
          height: 500,       // height
          delay: 3,          // the time between auto disturb
          auto: 1            // true means auto disturb
      },
      messegsForm:{
        msg:''
      },
      btncontent: '派遣信鸽',
      totalTime: 10,
      canClick: true, //添加canClick
      linksShow:false,
    }
  },
  computed: {
        ...mapState({
            'msgKu': state=>state.userLogin.msgKu,
        })
    },
  mounted(){
    // var element = document.getElementById('holder');
    // this.WaterRipple(element, this.settings)
    this.getMsg()
  },
  methods:{
    ...mapActions(
        'userLogin',['postMsg','getMsg']
        ),
    WaterRipple(element, settings) {
      // 默认设置
      var defaults = {
          image: "../assets/images/card1.png",
          dropRadius: 3,  // 波源半径大小
          width: 400,
          height: 400,
          delay: 1,
          attenuation: 5,
          maxAmplitude: 1024,
          sourceAmplitude: 512, // 震源振幅
          auto: !0
      };
      // 合并设置
      for (var item in defaults) {
          if (!settings.hasOwnProperty(item)) {
              settings[item] = defaults[item]
          }
      }

      // 检测背景图
      if (!settings.image.length) {
          return false;
      }

      var width = settings.width,
          height = settings.height,
          dropRadius = settings.dropRadius,
          delay = settings.delay * 1000,
          attenuation = settings.attenuation,  // 衰减级别
          maxAmplitude = settings.maxAmplitude,  // 最大振幅
          sourceAmplitude = settings.sourceAmplitude,
          half_width = width >> 1,
          half_height = height >> 1,
          amplitude_size = width * (height + 2) * 2,
          old_index = width,
          new_index = width * (height + 3),
          map_index,  // 振幅数组索引
          texture,   // 原始图像像素信息
          ripple,    // 参数波纹的图像像素信息
          image,  // Image对象
          autoRepeat, // 自动产生波源的重复事件
          ripple_map = [],
          last_map = [];

      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      element.appendChild(canvas);

      var ctx = canvas.getContext('2d');
      ctx.fillStyle = settings.bgColor;
      ctx.fillRect(0, 0, width, height);

      window.requestAnimationFrame = (function(){
          return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function (callback) {
                  window.setTimeout(callback, 1000 / 60);
              };
      })();

      // 加载图片
      function loadImage() {
          image = new Image();
          image.src = settings.image;
          image.crossOrigin = 'anonymous';
          image.onload = function() {
              init();
          }
      }

      // 保存图像的所有像素信息
      function saveImageData() {
          // 在canvas中绘制图形
          ctx.drawImage(image, 0, 0);
          // 图像的ImageData对象
          texture = ctx.getImageData(0, 0, width, height);
          ripple = ctx.getImageData(0, 0, width, height);
      }

      function init() {
          saveImageData();
          // 波幅数组初始化为0
          for (var i = 0; i < amplitude_size; i++) {
              ripple_map[i] = last_map[i] = 0;
          }

          animate();
          // 如果设置了自动产生波源，则随机参数波源
          if (settings.auto) {
              autoRepeat = setInterval(function() {
                  disturb(Math.random() * width, Math.random() * height);
              }, delay);
              disturb(Math.random() * width, Math.random() * height);
          }

      }

      // 动画主循环
      function animate() {
          requestAnimationFrame(animate);
          renderRipple();
      }

      // 在指定地点产生波源
      function disturb(circleX, circleY) {
          // 将值向下取整
          circleX <<= 0;
          circleY <<= 0;
          var maxDistanceX = circleX + dropRadius,
              maxDistanceY = circleY + dropRadius;
          for (var y = circleY - dropRadius; y < maxDistanceY; y++) {
              for (var x = circleX - dropRadius; x < maxDistanceX; x++) {
                  ripple_map[old_index + y * width + x] += sourceAmplitude;
              }
          }
      }

      // 渲染下一帧
      function renderRipple() {
          var i = old_index,
              deviation_x,  // x水平方向偏移
              deviation_y,  // y竖直方向偏移
              pixel_deviation, // 偏移后的ImageData对象像素索引
              pixel_source;  // 原始ImageData对象像素索引

          // 交互索引 old_index, new_index
          old_index = new_index;
          new_index = i;

          // 设置像素索引和振幅索引
          i = 0;
          map_index = old_index;

          // 使用局部变量优化全局作用域查询
          var _map_index = map_index,
              _width = width,
              _height = height,
              _half_width = half_width,
              _half_height = half_height,
              _ripple_map = ripple_map,
              _last_map = last_map,
              _ripple_data = ripple.data,  // 引用修改
              _texture_data = texture.data, // 引用修改
              _new_index = new_index,
              _attenuation = attenuation,
              _maxAmplitude = maxAmplitude;


          // 渲染所有像素点
          for (var y = 0; y < height; y++) {
              for (var x = 0; x < _width; x++) {
                  var x_boundary = 0, judge = _map_index % _width;
                  if (judge == 0) {
                      x_boundary = 1; // 左边边界
                  }else if (judge == _width - 1) {
                      x_boundary = 2; // 右边边界
                  }
                  var top = _ripple_map[_map_index - _width],// 上边的相邻点
                      bottom = _ripple_map[_map_index + _width],// 下边的相邻点
                      left = x_boundary != 1 ? _ripple_map[_map_index - 1] : 0,// 左边的相邻点
                      right = x_boundary != 2 ? _ripple_map[_map_index + 1] : 0;// 右边的相邻点
                  // 计算当前像素点下一时刻的振幅
                  var amplitude = (top + bottom + left + right) >> 1;
                  amplitude -= _ripple_map[_new_index + i];
                  amplitude -= amplitude >> _attenuation;  // 计算衰减

                  // 更新振幅数组
                  _ripple_map[_new_index + i] = amplitude;

                  amplitude = _maxAmplitude - amplitude;
                  var old_amplitude = _last_map[i];
                  _last_map[i] = amplitude;

                  if (old_amplitude != amplitude) {
                      deviation_x = (((x - _half_width) * amplitude / _maxAmplitude) << 0) + _half_width;
                      deviation_y = (((y - _half_height) * amplitude / _maxAmplitude) << 0) + _half_height;

                      // 检查边界
                      if (deviation_x > _width) {
                          deviation_x = _width - 1;
                      }
                      if (deviation_x < 0) {
                          deviation_x = 0;
                      }
                      if (deviation_y > _height) {
                          deviation_y = _height - 1;
                      }
                      if (deviation_y < 0) {
                          deviation_y = 0;
                      }

                      pixel_source = i * 4;
                      pixel_deviation = (deviation_x + (deviation_y * width)) * 4;

                      // 移动像素的RGBA信息
                      _ripple_data[pixel_source] = _texture_data[pixel_deviation];
                      _ripple_data[pixel_source + 1] = _texture_data[pixel_deviation + 1];
                      _ripple_data[pixel_source + 2] = _texture_data[pixel_deviation + 2];
                  //ripple.data[pixel_source + 3] = texture.data[pixel_deviation + 3];
                  }
                  ++i;
                  ++_map_index;
              }
          }

          map_index = _map_index;
          ctx.putImageData(ripple, 0, 0);
      }

      function calculAmplitude(index, old_amplitude) {
          var x_boundary = 0, judge = map_index % width;
          if (judge == 0) {
              x_boundary = 1; // 左边边界
          }else if (judge == width - 1) {
              x_boundary = 2; // 右边边界
          }
          var top = ripple_map[index - width],// 上边的相邻点
              bottom = ripple_map[index + width],// 下边的相邻点
              left = x_boundary != 1 ? ripple_map[index - 1] : 0,// 左边的相邻点
              right = x_boundary != 2 ? ripple_map[index + 1] : 0;// 右边的相邻点
          // 计算当前像素点下一时刻的振幅
          var amplitude = top + bottom + left + right;
          amplitude >>= 1;
          amplitude -= old_amplitude;
          amplitude -= amplitude >> attenuation;  // 计算衰减
          return amplitude;
      }

      // this.disturb = function(a, b) {
      //     disturb(a, b);
      // };
      disturb(100, 100);
      loadImage();
      return this;
    },
    tipsShow(){
      this.centerDialogVisible = false
    this.linksShow = true
    },
    postMessegs(){
      if(this.messegsForm.msg){
        this.$message({
          message: '恭喜你，你的鸽子安全到达！',
          type: 'success'
        });
        this.postMsg(this.messegsForm)
        this.countDown()
      }else{
        this.$message({
          message: '对不起，因为没有携带信息，您的鸽子中途被吃掉了！',
          type: 'warning'
        });
      }
    },
    countDown () {
      if (!this.canClick) return  //改动的是这两行代码
      this.canClick = false
      this.btncontent = this.totalTime + 's后派遣'
      let clock = window.setInterval(() => {
        this.totalTime--
        this.btncontent = this.totalTime + 's后派遣'
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.btncontent = '派遣信鸽'
          this.totalTime = 10
          this.canClick = true  //这里重新开启
        }
      },1000)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/index.scss';
</style>
