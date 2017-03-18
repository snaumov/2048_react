import React, { Component } from 'react';
import { Square, BoardSquare } from './square';

function Board(props) {
    const position = props.position;
    
    var activeSquares = [];

    for(var row = 0; row < position.length; row++){
        for(var column = 0; column < position[row].length; column++){
            if(position[row][column] !== 0) {
                activeSquares.push(<Square number={position[row][column]} row={row} column={column}/>)
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
            {activeSquares}
        </div>
    )
}

export default Board;