import io from 'socket.io-client'
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

export function chat(state,action) {
    switch(action.type) {
        case MSG_LIST:
            return {...state,chatmsg:action.payload}
        default:
            return state
    }
}

export function getMsgList() {
    dispatch=> {
        
    }
}