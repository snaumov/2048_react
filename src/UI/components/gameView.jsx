import React, { Component } from 'react';
import { saveGameAndShowNotification, newGame } from '../actions';
import { connect } from 'react-redux';
import BoardContainer from '../../Board/containers/boardContainer'
import NotificationPanel from './notificationPanel'

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
        this.props.dispatch(saveGameAndShowNotification(this.props.position.position, 'Game has been saved'));
    }

    newGameButtonClick() {
        this.props.dispatch(newGame());
    }
    
    render() {
        return (
            <div>
                <div className="gameViewControlsRow">
                    <div className="controlsRowButtons">
                        <button onClick={this.newGameButtonClick} className="newGameButton">New Game</button>
                        <button onClick={this.saveGameButtonClick} className="saveGameButton">Save Game</button>
                    </div>
                    <HighScoreTile highScore={this.props.position.highScore} />
                </div>
                <div className="boardContainerRow">
                    <BoardContainer />
                </div>
                
                <NotificationPanel showNotification={this.props.ui.showNotification} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        position: state.position,
        ui: state.UI,
    }
}

const GameView = connect(mapStateToProps)(GameViewComponent);

export default GameView;