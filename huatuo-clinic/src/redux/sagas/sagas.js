import { loginUserAsync } from './user.saga'
import { takeLatest,all } from 'redux-saga/effects';
import { LOGIN_ACTION } from '../actions/user.action';

export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN_ACTION,loginUserAsync)
    ])
}