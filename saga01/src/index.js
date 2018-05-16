import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware( sagaMiddleware )
)

sagaMiddleware.run(rootSaga)


console.log(store)
const action = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <App 
            value={store.getState()}
            onIncrement = { () => action('INCREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />,
        document.getElementById('root')
    ); 
}

render()
store.subscribe(render)



registerServiceWorker();
