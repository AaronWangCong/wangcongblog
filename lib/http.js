import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

export default (url = '', data = {}, type = 'GET', contentType) => {
  // application/x-www-form-urlencoded;charset=UTF-8   和  multipart/form-data 两种特殊contentType需在api.js定义
  return new Promise((resolve, reject) => {
    let requestConfig = {
      method: type,
      url: url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': contentType ? contentType : 'application/json'
      },
      timeout: 10000
    };

    if(Cookies.get("auth")) {
      requestConfig.headers['loginedtoken'] = Cookies.get("auth");
    }

    switch (type.toUpperCase()) {
      case "GET":
        requestConfig.params = data;
        requestConfig.paramsSerializer = params => {
          return qs.stringify(params, { indices: false })
        };
        break;
      case "DELETE": requestConfig.params = data; break;
      case "POST": requestConfig.data = data; break;
      case "PUT": requestConfig.data = data; break;
    }

    axios(requestConfig).then((resp) => {
      resolve(resp.data);
    }).catch((err) => {
      reject(err);
    })
  });
}
