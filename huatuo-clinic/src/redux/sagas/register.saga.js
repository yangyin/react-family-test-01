
import { takeLatest,all, fork,call,put } from 'redux-saga/effects'

import { REGISTER_SEX_ACTION ,registerSexSuccess } from '../actions/register.action'
import { registerSex } from '../api/register'






function* sexAsync() {
    // console.log(11111111111111)
    try {
        const res = yield call(registerSex.bind(this),'registerSex')
        // console.log('sex requ: ',res)
        yield put(registerSexSuccess(res.data))
    } catch(e) {
        console.log(e)
    }
    
    
}







function* watchRegister() {
    yield all([
        takeLatest(REGISTER_SEX_ACTION,sexAsync)
    ])
}


export const registerSaga = [
    fork(watchRegister)
]