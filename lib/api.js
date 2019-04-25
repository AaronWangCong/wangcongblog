import http from './http';
import qs from 'qs';

export const localhostPrefix = "/oa"

export const pagerParam = {
  pageNo: 1,
  pageSize: 10,
  pageTotal: 0,
  currentPage: 1
};

export const pageSizes = [10];

// login
export const loginApi = data => http( localhostPrefix+"/login", data, "POST");        // 登录
export const logoutApi = () => http( localhostPrefix + "/quit", {}, "POST");             // 登出
export const getUserInfoApi = () => http( localhostPrefix+"/user/auth", {}, "GET");           // 查询登录信息
// export const customerInfo = () => http( localhostPrefix + "/subject/customer", {}, "POST");      // 用户信息

// index
export const postMsgApi = data => http( localhostPrefix+"/messegsAdd", data, "POST"); // 新建消息
export const getMsgApi = () => http( localhostPrefix+"/messegsAll", {}, "GET"); // 查询所有消息

// 博客
export const addBlogApi = data => http( localhostPrefix+"/user/addBlog", data, "POST");
