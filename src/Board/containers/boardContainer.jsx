import React, { Component } from 'react';
import Board from '../components/board';
import { connect } from 'react-redux';
import makeMove from '../actions'

class BoardContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        console.log(e);
        if (e.key === "ArrowLeft") {
            this.props.dispatch(makeMove('LEFT'));
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