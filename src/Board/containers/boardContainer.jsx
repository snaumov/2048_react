import React, { Component } from 'react';
import Board from '../components/board';
import { connect } from 'react-redux';
import { makeMove } from '../actions'

class BoardContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        switch(e.key){
            case "ArrowLeft":
                this.props.dispatch(makeMove('LEFT'));
                return;
            case "ArrowRight":
                this.props.dispatch(makeMove('RIGHT'));
                return;
            case "ArrowUp":
                this.props.dispatch(makeMove('UP'));
                return;
            case "ArrowDown":
                this.props.dispatch(makeMove('DOWN'));
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