import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  state = {
    name: 'Pavel'
  }
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <hr />
        <Test />
      </div>
    );
  }
}

export default App;
