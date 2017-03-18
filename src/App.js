import React, { Component } from 'react';
import './App.css';
import BoardContainer from './Board/containers/boardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
      </div>
    );
  }
}

export default App;
