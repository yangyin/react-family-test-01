import { REGISTER_SEX_ACTION,REGISTER_SEX_SUCCESS } from '../actions/register.action'

const initalState = {
    sex:null
}

export const register = (state=initalState,action) => {
    switch (action.type) {
        case REGISTER_SEX_ACTION:
            return state
        case REGISTER_SEX_SUCCESS:
            return {...state,sex:action.payload}
        default:
            return state
    }
}