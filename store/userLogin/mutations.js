export default {

  // 设置是否登
  setLoginStatus(state, payload) {
    state.isLogin = payload.isLogin;
  },

  setLoginUser(state, payload) {
    state.loginUser = payload.loginUser;
  },

  setpostMsg(state,data){
    console.log(data)
  },
  getMsgInfo(state,data){
    state.msgKu = data.rows
  },

  setAuth(state, auth) {
    console.log('设置auth', auth)
    state.auth = auth
  },
  setUserInfo(state, data) {
    state.userInfo = data
  }
  
}
