<template>
    <div class="login-wrap">
        <div class="login-body">
            <div class="login-body-bgimg">
                <div class="login-modal">
                    <div class="tit">个人后台管理系统</div>
                    <div class="login-form-content">
                        <el-form :model="userForm" :rules="loginRules" ref="userForm">
                                <el-form-item prop="name" label="用户名" :label-width="formLabelWidth">
                                    <el-input type="text" v-model="userForm.username" placeholder="用户名" :maxlength="255" @keypress.enter.native="submitLoginBtn(userForm)">
                                    </el-input>
                                </el-form-item>

                                <el-form-item prop="password" label="密码" :label-width="formLabelWidth">
                                    <el-input class="input-box" :type="inputType" placeholder="密码" v-model="userForm.password" :maxlength="255" @keypress.enter.native="submitLoginBtn(userForm)">
                                        <template slot="append" class="eyes">
                                            <i class="eyeclose iconfont" :class="classeye" @click="handleIconClick"></i>
                                        </template>
                                    </el-input>
                                </el-form-item>

                                <el-form-item :label-width="formLabelWidth" class="loginBtn">
                                    <el-button type="primary" style="width:100%" @click="submitLoginBtn(userForm)">登录</el-button>
                                </el-form-item>

                                <el-form-item :label-width="formLabelWidth">
                                    <el-checkbox v-model="userForm.rememberMe">记住密码</el-checkbox>
                                </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Cookies from "js-cookie";
export default {
  name: "",
  components: {},
  props: {},
  layout: "blog",
  data() {
    return {
      formLabelWidth: "100px",
      openFlag: false, //密码是否可见，默认不可见
      inputType: "password",
      classeye: "icon-eyeoclose",
      userForm: {
        username: "",
        password: "",
        rememberMe: true //记住密码
      },
      loginRules: {
        password: [
          { required: true, message: "请输入密码", trigger: "change" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "change" }
        ]
      },
      redirectURL: "/home"
    };
  },
  computed: {
    ...mapState("userLogin", {
      auth: state => state.auth
    })
  },
  created: function() {
    this.getCookies();
  },
  mounted: function() {
    if (this.$route.query.ref) {
      this.redirectURL = this.$route.query.ref;
    }
  },
  methods: {
    ...mapActions("userLogin", ["login"]),

    //密码可见切换
    handleIconClick: function(ev) {
      this.openFlag = !this.openFlag;
      if (this.openFlag) {
        this.inputType = "text";
        this.classeye = "icon-eye";
      } else {
        this.inputType = "password";
        this.classeye = "icon-eyeoclose";
      }
    },
    //登录操作
    submitLoginBtn(userForm) {
      var _this = this;
      if (_this.userForm.rememberMe) {
        Cookies.set("username", _this.userForm.username);
        Cookies.set("password", _this.userForm.password);
      } else {
        Cookies.remove("username");
        Cookies.remove("password");
      }
      this.$refs["userForm"].validate(async valid => {
        if (valid) {
          _this.login(_this.userForm);
          setTimeout(function() {
            console.log("auth", _this.auth, _this.redirectURL);
            if (_this.auth) {
              _this.$router.push(_this.redirectURL);
            }
          }, 1000);
        }
      });
    },
    getCookies() {
      if (Cookies.get("username")) {
        this.userForm.username = Cookies.get("username");
        this.userForm.password = Cookies.get("password");
      }
    }
  }
};
</script>

<style lang="scss">
.login-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 80px;
  .login-body {
    width: 100%;
    .login-body-bgimg {
      width: 674px;
      height: 515px;
      background-size: cover;
      margin: 70px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-modal {
        width: 90%;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0px 0px 38px 0px rgba(0, 0, 0, 0.14);
        border-radius: 10px;
        .tit {
          font-family: "MicrosoftYaHei-Bold";
          font-size: 20px;
          font-weight: bold;
          line-height: 44px;
          letter-spacing: -1px;
          color: #333;
          text-align: center;
          height: 90px;
          line-height: 90px;
        }
        .login-form-content {
          width: 100%;
          padding-right: 50px;
          position: relative;
          .el-input__inner {
            height: 42px;
          }
          .el-form-item {
            margin-bottom: 20px;
          }
          .el-form-item__label {
            font-family: "MicrosoftYaHei";
            font-size: 16px;
            color: #333;
          }
          .loginBtn {
            .el-button {
              font-family: "MicrosoftYaHei";
              font-size: 18px;
              letter-spacing: 1px;
              padding: 0;
              height: 42px;
              background-color: #2a609e;
              border-radius: 3px;
            }
          }
          .el-input-group__append {
            position: absolute;
            top: 1px;
            right: 1px;
            background-color: #fff;
            border: 0;
            height: 40px;
            width: 40px;
            padding: 0;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
            color: #3b94f8;
            cursor: pointer;
            .eyeclose {
              font-size: 20px;
              color: #999999;
            }
          }
          .el-form-item__error {
            top: 42px;
          }
        }
      }

      @media screen and (max-width: 1100px) {
      }
      @media screen and (max-width: 660px) {
        width: 100%;
        height: auto;
        margin: 40px auto 0;
      }
    }
  }
}
</style>