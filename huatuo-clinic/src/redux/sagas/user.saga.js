
import {select, put, call} from 'redux-saga/effects';


export function* loginUserAsync({data}) {
    console.log(11111111111111111)
    const user = yield select(state =>state)
    console.log(data)
}