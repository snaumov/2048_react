import React, { Component } from 'react';
import BoardContainer from '../../Board/containers/boardContainer'
import { saveGame } from '../actions';
import { connect } from 'react-redux';

class GameViewComponent extends Component {
    constructor(props){
        super(props);
        this.saveGameButtonClick = this.saveGameButtonClick.bind(this);
    }

    saveGameButtonClick (game) {
        this.props.dispatch(saveGame(this.props.position.position));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.saveGameButtonClick} className="saveGameButton">Save Game</button>
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