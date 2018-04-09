import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux'

import thunk  from 'redux-thunk'

import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'

import combineReducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'



const store = createStore(combineReducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
))
console.log(store.getState())


ReactDOM.render(
    (
        <Provider store = {store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' exact component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);

registerServiceWorker();