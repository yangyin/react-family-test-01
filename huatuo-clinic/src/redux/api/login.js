import axios from 'axios'
import qs from 'qs'

export const login = ({user}) => {
    return axios.post(
        '/user/login/sub',
        {name:'testcc',pwd:'96e79218965eb72c92a549dd5a330112'}
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