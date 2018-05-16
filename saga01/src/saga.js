import { takeEvery } from 'redux-saga'
import { put,all } from 'redux-saga/effects'



const delay = ms => new Promise(resolve =>setTimeout(resolve,ms))
function* incrementAsync() {
    console.log('11111111111')
    yield delay(1000)
    console.log('11111111111')
    yield put({type:'INCREMENT'})
}


function* helloSaga() {
    console.log('hello sagas')
}

export default function* rootSaga() {
    yield all([
        yield takeEvery('INCREMENT_ASYNC',incrementAsync)
    ])
}