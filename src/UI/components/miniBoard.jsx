import React, { Component } from 'react';
import { MiniSquare, MiniBoardSquare } from '../../Board/components/square';

class MiniBoard extends Component{
    constructor(props){
        super(props);
        this.renderActiveSquares = this.renderActiveSquares.bind(this);
    }

    renderActiveSquares(){
        return this.props.position.map((row, rowIndex) => 
            row.map((column, columnIndex) => {
                if(this.props.position[rowIndex][columnIndex] !== 0) {
                    return <MiniSquare number={this.props.position[rowIndex][columnIndex].value} row={rowIndex} column={columnIndex} key={this.props.position[rowIndex][columnIndex].id} id={this.props.position[rowIndex][columnIndex].id}/>
                } 
        }))
    }

    render() {
        return(
            <div className="miniBoard">
                <div className="miniBoardRow">
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                </div>
                <div className="miniBoardRow">
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                </div>
                <div className="miniBoardRow">
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                </div>
                <div className="miniBoardRow">
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                    <MiniBoardSquare />
                </div>
                {this.renderActiveSquares()}
            </div>
        )

    }
}

export default MiniBoard;