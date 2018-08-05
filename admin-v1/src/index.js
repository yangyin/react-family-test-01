import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Demo from './container/demo/demo'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
