import React, { Component } from 'react';

function BoardSquare(props) {
    return (
        <div className="boardSquare"></div>
    )   
}

function Square(props) {
    const stylePosition = {
        top: parseInt(props.row) * 64 + 'px',
        left: parseInt(props.column) * 64 + 'px',
    }
    return (
        <div className={"activeSquare square" + props.number} style={stylePosition}> 
            <p>{props.number}</p>
        </div>
    )
}

//id={`${props.row}` + `${props.column}`}


export { BoardSquare, Square };