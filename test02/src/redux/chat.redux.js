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
    users:{},
    unread:0
}

export function chat(state=initState,action) {
    switch(action.type) {
        case MSG_LIST:
            const userid = action.payload.userid
            // console.log(action.payload.msg)
            return {...state,users:action.payload.users,chatmsg:action.payload.msg,unread:(action.payload.msg.filter(v => !v.read&& userid == v.to).length)}
        case MSG_RECV:
            // console.log(action.payload.data)
            const n = action.payload.data.to == action.payload.userid ? 1 :0;
            // console.log(n)
            return {...state,chatmsg:[...state.chatmsg,action.payload.data],unread:state.unread+n}
        default:
            return state
    }
}

function msgList(data,userid) {
    return { type:'MSG_LIST',payload:{msg:data.msg,users:data.users,userid} }
}

export function getMsgList() {
    return (dispatch,getState)=> {
        // socket.emit('sendMsg',obj)
        axios.get('/user/getMsgList')
        .then(data=>{
            // console.log('*****',data)
            if(data.status === 200 && data.data.code == 0) {
                const userid = getState().user._id
                dispatch(msgList(data.data,userid))
            }
        })
        
    }
}
export function recvMsg() {
    return (dispatch,getState) =>{
        socket.on('recvmsg',(data) => {
            const userid = getState().user._id
            dispatch({type:MSG_RECV,payload:{data,userid}})
        })
    }
}

export function postMsg(data) {
    return dispatch => {
        socket.emit('sendMsg',data)
    }
}