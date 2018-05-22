
import { takeLatest,all, fork,call,put } from 'redux-saga/effects'

import { REGISTER_SEX_ACTION } from '../actions/register.action'
// import { systemMenu } from '../api/home'






function* sexAsync() {
    console.log(11111111111111)
    // try {
    //     const {data:{listDto}} = yield call(systemMenu.bind(this),'systemMenu')
    //     // console.log(listDto)
    //     localStorage.setItem('ht_sys_menu',JSON.stringify(listDto))
    //     yield put(systemMenuSuccess(listDto))
    // } catch(e) {
    //     console.log(e)
    // }
    
    
}







function* watchRegister() {
    yield all([
        takeLatest(REGISTER_SEX_ACTION,sexAsync)
    ])
}


export const registerSaga = [
    fork(watchRegister)
]