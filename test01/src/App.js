import React, { Component } from 'react';
import { connect } from 'react-redux'

import {addGun,removeGun,addGunAsync} from './index.redux'

class App extends Component {
  render() {
    const num = this.props.num
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    return (
      <div className="App">
        <p>{num}</p>
        <button onClick={addGun}>添加</button>
        <button onClick={removeGun}>减少</button>
        <button onClick={addGunAsync}>异步</button>
      </div>
    );
  }
}
const mapStatetoProps = (state)=> {
  return {num:state}
}

const actionCreators = {addGun,removeGun,addGunAsync}
App = connect(mapStatetoProps,actionCreators)(App)

export default App;
