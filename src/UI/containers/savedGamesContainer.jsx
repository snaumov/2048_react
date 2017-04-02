import React, { Component } from 'react';
import SavedGamesView from '../components/savedGames';
import { connect } from 'react-redux'
import { loadGame, deleteGame } from '../actions';

class SavedGamesComponent extends Component {
    constructor(props) {
        super(props);
        this.loadGame = this.loadGame.bind(this);
    }
    
    loadGame = (gameNumber) => {
        console.log(gameNumber)
        this.props.dispatch((gameNumber) => loadGame(gameNumber));
        this.props.router.push('/');
    }

    render() {
        return (
            <div>
                <SavedGamesView onLoadGameClick={this.loadGame} savedGames={this.props.UI.savedGames}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        UI: state.UI
    }
}

const SavedGamesContainer = connect(mapStateToProps)(SavedGamesComponent);

export default SavedGamesContainer;