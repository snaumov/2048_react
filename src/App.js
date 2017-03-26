import React, { Component } from 'react';
import './App.css';
import BoardContainer from './Board/containers/boardContainer';
import Header from './UI/components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BoardContainer />
      </div>
    );
  }
}

export default App;
