import { REGISTER_SEX_ACTION } from '../actions/register.action'

const initalState = {
    baseUserInfo:null
}

export const register = (state=initalState,action) => {
    switch (action.type) {
        case REGISTER_SEX_ACTION:
            return state
        default:
            return state
    }
}