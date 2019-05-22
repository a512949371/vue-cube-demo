import axios from 'axios'
// axios请求方法封装
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.resolve(err)
})
axios.interceptors.response.use(res => {
  if (res.data.ok === true) {
    return res
  } else {
    return res
  }
}, err => {
  if (err.response.status === 504 || err.response.status === 404) {
    console.log('服务器请求错误')
  } else if (err.response.status === 401) {
  } else if (err.response.status === 500) {
    console.log('网络繁忙，请稍后重试')
  } else {
    console.log('未知错误')
  }
  return Promise.resolve(err)
})
class requestAjax {
  request (Data, callback) {
    const p = axios({
      method: Data.requestType,
      url: Data.requestUrl,
      headers: {
        'token': Data.requesttoken,
        'Content-Type': 'application/json'
      },
      data: Data.requestdata || null
    }).then((res) => {
      callback(res)
      return res
    }).catch((res) => {
      console.log('1' + res)
    })
    return p
  }
}
export default requestAjax
