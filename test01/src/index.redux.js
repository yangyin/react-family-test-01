
const ADD_GUN = 'ADD_GUN';
const REMOVE_GUN = 'REMOVE_GUN'

export function couter(state=10,action) {
    
    // if(action) {
       
        switch(action.type) {
            case ADD_GUN:
                return state+1;
            case REMOVE_GUN:
                return state-1;
            default:
                return state;
        }
    // }

}


export function addGun() {
    return {type:ADD_GUN}
}

export function removeGun() {
    return {type:REMOVE_GUN}
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() =>{
            dispatch(addGun())
        },2000)
    }
}