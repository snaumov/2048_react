import React, { Component } from 'react';
import SavedGamesView from '../components/savedGames';
import { connect } from 'react-redux'
import { loadGame, deleteGame } from '../actions';
import { Redirect } from 'react-router';

class SavedGamesComponent extends Component {
    constructor(props) {
        super(props);
        this.loadGame = this.loadGame.bind(this);
        this.state = {redirectIsNeeded: false };
    }
    
    loadGame = (gameNumber) => {
        this.props.dispatch(loadGame(gameNumber));
        this.setState({redirectIsNeeded: true});
    }

    deleteGame = (gameNumber) => {
        this.props.dispatch(deleteGame(gameNumber));
    }

    render() {
        if (this.state.redirectIsNeeded) {
            return (
                <Redirect to="/" />
            )
        }
        
        return (
            <div>
                <SavedGamesView onLoadGameClick={this.loadGame} onDeleteGameClick={this.deleteGame} savedGames={this.props.UI.savedGames}/>
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