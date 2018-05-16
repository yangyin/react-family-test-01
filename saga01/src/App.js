import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={this.props.onIncrement}>
          Increment
        </button>
        <button onClick={this.props.onIncrementAsync}>
          onIncrementAsync
        </button>
        <hr />
        <div>
          Clicked: {this.props.value} times
        </div>
      </div>
    );
  }
}

export default App;
