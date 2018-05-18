
import { takeLatest,all, fork,call,put } from 'redux-saga/effects'

import { SYSTEM_MENU_ACTION,systemMenuSuccess } from '../actions/home.action'
import { systemMenu } from '../api/home'






function* systemMenuAsync() {
    // console.log(11111111111111)
    try {
        const {data:{listDto}} = yield call(systemMenu.bind(this),'systemMenu')
        // console.log(listDto)
        localStorage.setItem('ht_sys_menu',JSON.stringify(listDto))
        yield put(systemMenuSuccess(listDto))
    } catch(e) {
        console.log(e)
    }
    
    
}







function* watchHome() {
    yield all([
        takeLatest(SYSTEM_MENU_ACTION,systemMenuAsync)
    ])
}


export const homeSaga = [
    fork(watchHome)
]