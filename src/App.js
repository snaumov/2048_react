import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import BoardContainer from './Board/containers/boardContainer';
import Header from './UI/components/header'
import SettingsContainer from './UI/containers/settingsContainer'

class AppSettingsView extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SettingsContainer />
      </div>     
    )
  }
}

class AppMainView extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BoardContainer />
      </div>
    );
  }
}

class App extends React.Component {
    render() {
        return (
          <div>
            <HashRouter>
              <div>
                <Route exact path="/" component={AppMainView} />
                <Route path="/settings" component={AppSettingsView} />
              </div>

            </HashRouter>
          </div>

        )
    };
}

export default App;
