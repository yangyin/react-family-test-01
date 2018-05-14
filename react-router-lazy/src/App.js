import React, { Component } from 'react';
import { Link,Route,Switch} from 'react-router-dom'
import Loadable from 'react-loadable';

import './App.css';
import lazyLoad from './lazyLoad';

// const Home = lazyLoad(() => import(/* webpackChunkName: "Home" */ './yiying'));

const LoadableComponent = Loadable({
  loader: () => import('./yiying'),
  loading: LoadingComponent,
});

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/yi" component={LoadableComponent}/>
          <Route path="/er" component={Er}/>
          <Route path="/san" component={San}/>
        </Switch>
      </div>
    )
  }
}


class Er extends Component {
  render() {
    return (
      <div>
        <Link to={{pathname:'/san'}}>我是二营，点击我跳转到三营</Link>
      </div>
    )
  }
}
class San extends Component {
  render() {
    return (
      <div>
        <Link to={{pathname:'/yi'}}>我是三营，点击我跳转到一营</Link>
      </div>
    )
  }
}

function LoadingComponent(props) {
  if (props.error) {
    // When the loader has errored
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <div>Loading...</div>;
  } else {
    // When the loader has just started
    return null;
  }
}