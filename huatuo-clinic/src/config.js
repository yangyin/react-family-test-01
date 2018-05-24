
import axios from 'axios'
import { message } from 'antd'
import cookies  from 'browser-cookies'
 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// console.log('dddd: ', window.location.host)


axios.interceptors.request.use((config) => {
    // console.log(config)
    // debugger
    // Toast.loading('加载中',0)
    return config
})
axios.interceptors.response.use((response) => {
    // Toast.hide()
    
    const { data } = response

    // if(response.status == 200 && data && !response.code) {
    //     return data
    // }
    
    if(data.code && data.code != '000000' ) {
      console.log(1111)
        message.error(data.message)
        return {data:null}
    }


    return response
},(err) =>{// 这里是返回状态码不为200时候的错误处理
    console.log('err: ',err.response.status)
    if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
    
          case 401:
            err.message = '未授权，请登录'
            cookies.erase('JSESSIONID')
            const href = `http://${window.location.host}/login`
            // console.log('host: ',href)
            window.location.replace(href)
            break
    
          case 403:
            err.message = '拒绝访问'
            break
    
          case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break
    
          case 408:
            err.message = '请求超时'
            break
    
          case 500:
            err.message = '服务器内部错误'
            break
    
          case 501:
            err.message = '服务未实现'
            break
    
          case 502:
            err.message = '网关错误'
            break
    
          case 503:
            err.message = '服务不可用'
            break
    
          case 504:
            err.message = '网关超时'
            break
    
          case 505:
            err.message = 'HTTP版本不受支持'
            break
    
          default:
        }
    }
    message.error(err.message)
    return Promise.reject(err)
})

message.config({
    maxCount: 2,
})

