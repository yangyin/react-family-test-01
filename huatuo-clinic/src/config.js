
import axios from 'axios'
import { message } from 'antd'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios.interceptors.request.use((config) => {
    // console.log(config)
    // Toast.loading('加载中',0)
    return config
})
axios.interceptors.response.use((response) => {
    // Toast.hide()
    const { data } = response
    // console.log('response',data)
    if(data.code != '000000') {
        message.error(data.message)
        return {data:null}
    }


    return response
})

message.config({
    maxCount: 2,
})

