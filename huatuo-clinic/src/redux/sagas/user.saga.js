
import {select, put, call,takeLatest,fork } from 'redux-saga/effects'
import { LOGIN_ACTION } from '../actions/user.action'
import { login } from '../api/login';

export function* loginUserAsync({payload}) {
    // const user = yield select(state =>state)
    // console.log('payload',payload)
    const {data} = yield call(login.bind(this,payload),'login')
    
    console.log('json',data)
}





//=====================================
//  WATCHERS
//-------------------------------------
function* watchLoginUser() {
    yield takeLatest(LOGIN_ACTION,loginUserAsync)
}





//=====================================
//  ROOT
//-------------------------------------
export const userSaga = [
    fork(watchLoginUser)
]