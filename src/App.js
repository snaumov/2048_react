import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import BoardContainer from './Board/containers/boardContainer';
import GameView from './UI/components/gameView';
import Header from './UI/components/header'
import SettingsContainer from './UI/containers/settingsContainer'
import SavedGamesContainer from './UI/containers/savedGamesContainer';

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
        <GameView />
      </div>
    );
  }
}

class AppSavedGamesView extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SavedGamesContainer />
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
                <Route path="/saves" component={AppSavedGamesView} />
                <Route path="/settings" component={AppSettingsView} />
              </div>

            </HashRouter>
          </div>

        )
    };
}

export default App;
