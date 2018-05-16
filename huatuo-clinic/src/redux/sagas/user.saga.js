
import {select, put, call,takeLatest,fork } from 'redux-saga/effects'
import { LOGIN_ACTION } from '../actions/user.action'
import { login } from '../api/login';

export function* loginUserAsync({data}) {
    // const user = yield select(state =>state)
    console.log(data)
    const json = yield call(login.bind(this,data),'login')
    console.log('json',json)
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