import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_ACTION} from '../actions/user.action'



const initalState = {
    baseUserInfo:null
}

export const user = (state=initalState,action)=> {
    switch (action.type) {
        case LOGIN_ACTION :
            return state
        case LOGIN_USER_SUCCESS:
            // console.log('reducer',action.payload)
            return {...state,baseUserInfo:action.payload}
        default:
            return state
    }
}