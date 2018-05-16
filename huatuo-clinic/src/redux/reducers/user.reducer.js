import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_ACTION} from '../actions/user.action'



const initalState = {
    user:null
}

export const user = (state=initalState,action)=> {
    switch (action.type) {
        case LOGIN_ACTION :
            return state
        default:
            return state
    }
}