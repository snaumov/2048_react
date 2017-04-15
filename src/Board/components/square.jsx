import React, { Component } from 'react';

function BoardSquare(props) {
    return (
        <div className="boardSquare"></div>
    )   
}

function Square (props) {
    const stylePosition = {
            top: 8 + parseInt(props.row) * (128 + 14) + 'px',
            left: 8 + parseInt(props.column) * (128 + 14) + 'px',
    }
    
    
    return (
        <div id={`${props.id}`} className={"activeSquare square" + props.number} style={stylePosition}> 
            <p>{props.number}</p>
        </div>
    )
    

}

function MiniBoardSquare(props) {
    return (
        <div className="miniBoardSquare"></div>
    )   
}

function MiniSquare(props) {
    const stylePosition = {
            top: 4 + parseInt(props.row) * (64 + 7) + 'px',
            left: 4 + parseInt(props.column) * (64 + 7) + 'px',
    }
    
    
    return (
        <div id={`${props.id}`} className={"miniActiveSquare square" + props.number} style={stylePosition}> 
            <p>{props.number}</p>
        </div>
    )
}


export { BoardSquare, Square, MiniBoardSquare, MiniSquare };