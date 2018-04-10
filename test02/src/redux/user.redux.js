import axios from 'axios'
import { getRedirectPath } from '../util'

const USER_SUCCESS = 'USER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    redirectTo:'',
    isAuth:false,
    user:'',
    pwd:'',
    type:''
}
export function user(state=initState,action) {
    switch(action.type) {
        case USER_SUCCESS:
            return {...state,isAuth:true,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.payload,redirectTo:''}
        default:
            return state
    }
}

function errorMsg(msg) {
    return {type:ERROR_MSG,payload:msg}
}



export function register({user,pwd,repeatPwd,type}) {
    if(!user || !pwd) {
        return errorMsg('用户名或者密码不能为空！')
    }
    if(pwd !== repeatPwd) {
        return errorMsg('两次密码输入不一致!')
    }

    return dispatch => {
        axios.post('/user/register',{user,pwd,type})
            .then(res => {
                console.log('******',res.data)
                if(res.status === 200 && res.data.code ===0) {
                    dispatch({type:USER_SUCCESS,payload:{user,pwd,type}})
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
                
            })
    }
}