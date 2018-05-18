export const SYSTEM_MENU_ACTION = 'SYSTEM_MENU_ACTION'
export const SYSTEM_MENU_SUCCESS = 'SYSTEM_MENU_SUCCESS'
export const SYSTEM_MENU_FAILURE = 'SYSTEM_MENU_FAILURE'


export const systemMenuAction = () =>{
    return {
        type:SYSTEM_MENU_ACTION,
        payload:null
    }
}
export const systemMenuSuccess = (data) =>{
    return {
        type:SYSTEM_MENU_SUCCESS,
        payload:data
    }
}
export const systemMenuFaile = (data) =>{
    return {
        type:SYSTEM_MENU_FAILURE,
        payload:data
    }
}
