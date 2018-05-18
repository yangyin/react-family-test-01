
import { SYSTEM_MENU_SUCCESS } from '../actions/home.action'


const initalState = {
    sysMenu:[]
}


export const home = (state=initalState,action)=> {
    // console.log(action.type)
    switch (action.type) {
        case SYSTEM_MENU_SUCCESS:
            return {...state,sysMenu:action.payload}
        default:
            return state
    }
}