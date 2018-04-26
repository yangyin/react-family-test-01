import io from 'socket.io-client'
import axios from 'axios'
const socket = io('ws://localhost:9093')

//获取聊天列表
const MSG_LIST = 'MSG_LIST'
//读取信息
const MSG_RECV = 'MSG_RECV'
//标识已读
const MSG_READ = 'MSG_READ'

const initState = {
    chatmsg:[],
    unread:0
}

export function chat(state=initState,action) {
    switch(action.type) {
        case MSG_LIST:
            return {...state,chatmsg:action.payload.msg,unread:(action.payload.msg.filter(v => !v.read).length)}
        case MSG_RECV:
            return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+1}
        default:
            return state
    }
}

function msgList(msg) {
    return { type:'MSG_LIST',payload:{msg} }
}

export function getMsgList() {
    return dispatch=> {
        // socket.emit('sendMsg',obj)
        axios.get('/user/getMsgList')
        .then(data=>{
            console.log('*****',data)
            if(data.status === 200 && data.data.code == 0) {
                dispatch(msgList(data.data.msg))
            }
        })
        
    }
}
export function recvMsg() {
    return dispatch =>{
        socket.on('recvmsg',(data) => {
            dispatch({type:MSG_RECV,payload:data})
        })
    }
}

export function postMsg(data) {
    return dispatch => {
        socket.emit('sendMsg',data)
    }
}