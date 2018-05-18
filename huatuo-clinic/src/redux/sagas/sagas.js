import { all } from 'redux-saga/effects'

import { userSaga } from './user.saga'
import { homeSaga } from './home.saga'



export default function* rootSaga() {
    yield all([
        ...userSaga,
        ...homeSaga
    ])
}