import React, { Component } from 'react';
import BoardContainer from '../../Board/containers/boardContainer'
import { saveGame, newGame } from '../actions';
import { connect } from 'react-redux';

function HighScoreTile(props) {
    return (
        <div className="highScoreTile">
            <p>HighScore</p>
            <span>{props.highScore}</span>
        </div>
    )
}

class GameViewComponent extends Component {
    constructor(props){
        super(props);
        this.saveGameButtonClick = this.saveGameButtonClick.bind(this);
        this.newGameButtonClick = this.newGameButtonClick.bind(this);
    }

    saveGameButtonClick (game) {
        this.props.dispatch(saveGame(this.props.position.position));
    }

    newGameButtonClick() {
        this.props.dispatch(newGame());
    }
    
    render() {
        return (
            <div>
                <button onClick={this.newGameButtonClick} className="newGameButton">New Game</button>
                <button onClick={this.saveGameButtonClick} className="saveGameButton">Save Game</button>
                <HighScoreTile highScore={this.props.position.highScore} />
                <BoardContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.position,
    }
}

const GameView = connect(mapStateToProps)(GameViewComponent);

export default GameView;