import axios from 'axios'

const USER_LIST = 'USER_LIST'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    userList:[]
}
export function chatuser(state=initState,action) {
    switch(action.type) {
        case USER_LIST:
            return {...state,userList:action.payload,msg:''}
        case ERROR_MSG:
            return {...state,msg:action.payload}
        default:
            return state
    }
}

function errorMsg(msg) {
    // console.log('error msg :::',msg)
    return {type:ERROR_MSG,payload:msg}
}

function userList(data) {
    return {type:USER_LIST,payload:data}
}

export function getuserlist(type) {
    return dispatch=>(
        axios.get('/user/list',{params:{type}})
        .then(res => {
            // console.log('user list: ',res.data)
            if(res.status === 200 && res.data.code ===0) {
                dispatch(userList(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    )
}