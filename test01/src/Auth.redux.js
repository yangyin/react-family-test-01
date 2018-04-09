const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
    isAuth:false,
    user:'张三',
    age:20
}
export function auth(state=initState,action) {
    
    switch(action.type) {
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        case USER_DATA:
            return {...state,...action.payload}
        default:
        return state;
    }
}

export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}

export function getUsersData() {
    return dispatch => {
        //异步操作，AJAX请求
        setTimeout(() => {
            dispatch(userData())
        },1000)
    }
}
function userData() {
    return {type:'USER_DATA',payload:{user:'小明'}}
}