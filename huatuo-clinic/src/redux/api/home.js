import axios from 'axios'



export const systemMenu = () => {
    return axios.get('/user/queryauthorizations')
}