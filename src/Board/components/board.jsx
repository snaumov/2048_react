import React, { Component } from 'react';
import { Square, BoardSquare } from './square';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Board(props) {
    const position = props.position;
    
    var activeSquares = [];

    for(var row = 0; row < position.length; row++){
        for(var column = 0; column < position[row].length; column++){
            if(position[row][column] !== 0) {
                activeSquares.push(<Square number={position[row][column]} row={row} column={column} key={row.toString()+column.toString()}/>)  //key={row+column}
            }
        }
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
                {activeSquares}
            </ReactCSSTransitionGroup>
        </div>
    )
}

export default Board;