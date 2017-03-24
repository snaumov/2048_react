import React, { Component } from 'react';
import Board from '../components/board';
import { connect } from 'react-redux';
import { makeMoveAndSpawnTiles } from '../actions'

class BoardContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        switch(e.key){
            case "ArrowLeft":
                this.props.dispatch(makeMoveAndSpawnTiles('LEFT'));
                return;
            case "ArrowRight":
                this.props.dispatch(makeMoveAndSpawnTiles('RIGHT'));
                return;
            case "ArrowUp":
                this.props.dispatch(makeMoveAndSpawnTiles('UP'));
                return;
            case "ArrowDown":
                this.props.dispatch(makeMoveAndSpawnTiles('DOWN'));
                return;
            default:
                return;
        }
    }

    componentDidMount() {
        document.body.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown');
    }

    render() {
        const { position } = this.props.position
        console.log(position);
        return (
            <Board position={position} onKeyPress={this.onKeyDown}/>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        position: state.position,
    }
}

const BoardContainer = connect(mapStateToProps)(BoardContainerComponent);

export default BoardContainer;