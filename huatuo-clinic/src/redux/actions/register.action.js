export const REGISTER_SEX_ACTION = 'SYSTEM_MENU_ACTION'
export const REGISTER_SEX_SUCCESS = 'REGISTER_SEX_SUCCESS'
export const REGISTER_SEX_FAILURE = 'SYSTEM_MENU_FAILURE'


export const registerSexAction = () =>{
    return {
        type:REGISTER_SEX_ACTION,
        payload:null
    }
}
export const registerSexSuccess = (data) =>{
    return {
        type:REGISTER_SEX_SUCCESS,
        payload:data
    }
}
export const registerSexFaile = (data) =>{
    return {
        type:REGISTER_SEX_FAILURE,
        payload:data
    }
}
