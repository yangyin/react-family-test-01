import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux'
import { reducerz , addGun,removeGun,addGunAsync} from './index.redux'
import thunk  from 'redux-thunk'




const store = createStore(reducerz,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
))
function reducer() {
    ReactDOM.render(
        (
            <Provider store = {store}>
                <App/>
            </Provider>
        ),
        document.getElementById('root')
    );
}

reducer()
registerServiceWorker();
store.subscribe(reducer);