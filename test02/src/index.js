import React            from 'react';
import ReactDOM         from 'react-dom';
import thunk            from 'redux-thunk'
import { Provider }     from 'react-redux'
import {
    createStore,
    applyMiddleware,
    compose
}                       from 'redux'
import { 
    BrowserRouter,
    Route,
    // Redirect,
    Switch 
}                       from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducer'
import './config'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute'
import Bossinfo from './container/bossinfo'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
))


ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/register' component={Register}></Route>
                        <Route path='/bossinfo' component={Bossinfo}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ),
     document.getElementById('root'));
registerServiceWorker();
