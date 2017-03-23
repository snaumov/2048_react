import React, { Component } from 'react';
import { Square, BoardSquare } from './square';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Board extends Component {
    constructor(this.props){
        super(props);
        this.activeSquares = [
            1: {position: [1, 2], value: 2}
            2: {position: [2, 2], value: 2}
        ]
        
        for(var row = 0; row < position.length; row++){
            for(var column = 0; column < position[row].length; column++){
                if(position[row][column] !== 0) {
                    activeSquares.push(<Square number={position[row][column]} row={row} column={column} key={row.toString()+column.toString()}/>)  //key={row+column}
                }
            }
        }

    }
    
    componentWillReceiveProps(prevProps, nextProps){
        //update this.activeSquare based on nextProps position
        //update position of existing components, or push if it's doesn't exist
    }
    
    return (
        <div className="board">
            <div className="boardRow">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>
            <div className="boardRow">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>
            <div className="boardRow">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>
            <div className="boardRow">
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
                <BoardSquare />
            </div>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                {this.activeSquares}
            </ReactCSSTransitionGroup>
        </div>
    )
}

export default Board;
