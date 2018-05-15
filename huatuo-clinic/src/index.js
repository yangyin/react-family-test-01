import React    from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import { Provider }     from 'react-redux'

import reducers from './redux/reducers'
import rootSaga from './redux/sagas/sagas'

import './index.css'
// import App from './App'
import Login from './container/login/login'

import registerServiceWorker from './registerServiceWorker'


// 创建saga中间并件sagas传入
const SagaMiddleware = createSagaMiddleware()

// 将reducer 传入store
const store = createStore(reducers,applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    ),
     document.getElementById('root'))
registerServiceWorker()
