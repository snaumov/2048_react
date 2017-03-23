import React, { Component } from 'react';

function BoardSquare(props) {
    return (
        <div className="boardSquare"></div>
    )   
}

class Square extends Component {
    constructor(props) {
        super(props);
        this.stylePosition = {
            top: parseInt(this.props.row) * 64 + 'px',
            left: parseInt(this.props.column) * 64 + 'px',
            WebkitTransform: `translate3d(${this.props.x}px, 0, 0)`,
            transform: `translate3d(${this.props.x}px, 0, 0)`,
              
        }
        console.log(this.stylePosition)
    }
    
    render(){
        return (
            <div className={"activeSquare square" + this.props.number} style={this.stylePosition}> 
                <p>{this.props.number}</p>
            </div>
        )
    }

}

//id={`${props.row}` + `${props.column}`}


export { BoardSquare, Square };