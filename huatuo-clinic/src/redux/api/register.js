import axios from 'axios'



export const registerSex = () => {
    return axios.post('/dicItem/list?itemParent=00001&isblank=false&flag=1')
}