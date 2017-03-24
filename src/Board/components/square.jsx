import React, { Component } from 'react';

function BoardSquare(props) {
    return (
        <div className="boardSquare"></div>
    )   
}

function Square (props) {
    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
    //     this.stylePosition = {
    //         top: parseInt(this.props.row) * 64 + 'px',
    //         left: parseInt(this.props.column) * 64 + 'px',
    //         // WebkitTransform: `translate3d(${this.props.x}px, 0, 0)`,
    //         // transform: `translate3d(${this.props.x}px, 0, 0)`,
              
    //     }
    //     console.log(this.stylePosition)
    // }
    console.log('in square')
    const stylePosition = {
            top: 8 + parseInt(props.row) * (128 + 16) + 'px',
            left: 8 + parseInt(props.column) * (128 + 16) + 'px',
    }
    
    
    return (
        <div id={`${props.id}`} className={"activeSquare square" + props.number} style={stylePosition}> 
            <p>{props.number}</p>
        </div>
    )
    

}

//id={`${props.row}` + `${props.column}`}


export { BoardSquare, Square };