import { loginApi, getUserInfoApi, logoutApi,  postMsgApi,getMsgApi } from "../../lib/api";
import Cookies from 'js-cookie'

export default {
  // 登录
  async login({ commit,dispatch }, param) {
    let obj = await loginApi(param);
    commit('setAuth', obj.data.token);
    Cookies.set("auth", obj.data.token);

    dispatch('getUserInfo')
  },
  //获取用户信息
  async getUserInfo({state, commit}) {
    console.log('获取用户信息')
    let obj = await getUserInfoApi()
    commit('setUserInfo', obj.data);
  },

  // 登出
  async logout({ commit,dispatch }, $router) {
    let obj = await logoutApi();
    commit('setAuth', null);
    commit('setUserInfo', {});
    Cookies.remove('auth');
    $router.push("/login");
  },

  // 发送留言
  async postMsg({ commit,dispatch },param) {
    let { obj } = await postMsgApi(param);
    commit('setpostMsg', obj);

    dispatch('getMsg');
  },

  //查询留言
  async getMsg({ commit }) {
    let data = await getMsgApi();
    commit('getMsgInfo', data);
  },

}
