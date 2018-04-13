import axios from 'axios'
import { getRedirectPath } from '../util'

// const USER_SUCCESS = 'USER_SUCCESS'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const USER_DATA = 'USER_DATA'

const initState = {
    redirectTo:'',
    isAuth:false,
    user:'',
    type:''
}
export function user(state=initState,action) {
    switch(action.type) {
        case AUTH_SUCCESS:
            return {...state,isAuth:true,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        // case LOGIN_SUCCESS:
            // return {...state,isAuth:true,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.payload,redirectTo:''}
        case USER_DATA:
            return {...state,...action.payload}
        default:
            return state
    }
}

function errorMsg(msg) {
    // console.log('error msg :::',msg)
    return {type:ERROR_MSG,payload:msg}
}
//用户信息保存
export function userinfo(data) {
    return {type:USER_DATA,payload:data}
}

//登录
export function login({user,pwd}) {
    if(!user || !pwd) {
        return errorMsg('用户名或者密码不能为空！')
    }
    return dispatch=> {
        axios.post('/user/login',{user,pwd})
            .then(res => {
                if(res.status === 200 && res.data.code ===0) {
                    dispatch({type:AUTH_SUCCESS,payload:res.data.data})
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

//注册
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
                // console.log('******',res.data)
                if(res.status === 200 && res.data.code ===0) {
                    dispatch({type:AUTH_SUCCESS,payload:res.data.data})
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
                
            })
    }
}

//boss / genius info 信息页 完善
export function update({avatar, title, company, money, desc}) {
    // if(!avatar || !title || !company || !money || !desc) {
    //     return errorMsg('请完善信息!')
    // }

    return dispatch=> {
        axios.post('/user/update',{avatar, title, company, money, desc})
            .then(res => {
                // console.log('******',res.data)
                if(res.status === 200 && res.data.code ===0) {
                    dispatch({type:AUTH_SUCCESS,payload:res.data.data})
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
                
            })
    }
}