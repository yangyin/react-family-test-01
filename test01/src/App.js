import React, { Component } from 'react';
import { connect } from 'react-redux'

import {addGun,removeGun,addGunAsync} from './index.redux'
@connect(
  state=>({num:state.couter}),
  {addGun,removeGun,addGunAsync}
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.num}</p>
        <button onClick={this.props.addGun}>添加</button>
        <button onClick={this.props.removeGun}>减少</button>
        <button onClick={this.props.addGunAsync}>异步</button>
      </div>
    );
  }
}
// const mapStatetoProps = (state)=> {
//   return {num:state}
// }

// const actionCreators = {addGun,removeGun,addGunAsync}
// App = connect(mapStatetoProps,actionCreators)(App)

export default App;
