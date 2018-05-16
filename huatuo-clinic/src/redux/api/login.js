import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'

export const login = (payload) => {
    // console.log('login',md5(payload.pwd))

    const obj = {...payload,pwd:md5(payload.pwd)}
    // console.log(obj)
    return axios.post(
        '/user/login/sub',
        qs.stringify(obj)
        // {name:'testcc',pwd:'96e79218965eb72c92a549dd5a330112'}
        // qs.stringify({name:'testcc',pwd:'96e79218965eb72c92a549dd5a330112'})
    )


    // return axios({
    //     method:"POST",
    //     url:"/user/login/sub",
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data:qs.stringify({
    //         name:'testcc',
    //         pwd:'96e79218965eb72c92a549dd5a330112'
    //     })
    // })
} 