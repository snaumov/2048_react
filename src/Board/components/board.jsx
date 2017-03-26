import React, { Component } from 'react';
import { Square, BoardSquare } from './square';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlipMove from 'react-flip-move';
import { Motion, spring } from 'react-motion';


class Board extends Component{
    constructor(props){
        super(props);
        //  this.activeSquares = [];

        console.log(this.activeSquares);
        this.renderActiveSquares = this.renderActiveSquares.bind(this);

        //  for(var row = 0; row < this.position.length; row++){
        //     for(var column = 0; column < this.position[row].length; column++){
        //         if(this.position[row][column] !== 0) {
        //             this.activeSquares.push(<Square number={this.position[row][column].value} row={row} column={column} key={this.position[row][column].id} id={this.position[row][column].id}/>)
        //     }}
        //  }
        
    }

    renderActiveSquares(){
        return this.props.position.map((row, rowIndex) => 
            row.map((column, columnIndex) => {
                if(this.props.position[rowIndex][columnIndex] !== 0) {
                    console.log(this.props.position[rowIndex][columnIndex]);
                    return <Square number={this.props.position[rowIndex][columnIndex].value} row={rowIndex} column={columnIndex} key={this.props.position[rowIndex][columnIndex].id} id={this.props.position[rowIndex][columnIndex].id}/>
                } 
        }))
    }
    // this.activeSquares = this.props.position.map((row, rowIndex) => 
    //         row.map((column, columnIndex) => {
    //             if(this.props.position[rowIndex][columnIndex] !== 0) {
    //                 console.log(rowIndex, columnIndex);
    //                 return <Square number={this.props.position[rowIndex][columnIndex].value} row={rowIndex} column={columnIndex} key={this.props.position[rowIndex][columnIndex].id} id={this.props.position[rowIndex][columnIndex].id}/>
    //             } 
    //     }))
    // constructor(props){
    //     super(props);
        // this.activeSquares = [
        //     1: {position: [1, 2], value: 2}
        //     2: {position: [2, 2], value: 2}
        // ]
        
        

    // }
    
    // componentWillReceiveProps(prevProps, nextProps){
    //     //update this.activeSquare based on nextProps position
    //     //update position of existing components, or push if it's doesn't exist
    // }
    // var activeSquares = [];
    // const position = props.position;

    // for(var row = 0; row < position.length; row++){
    //         for(var column = 0; column < position[row].length; column++){
    //             if(position[row][column] !== 0) {
    //                 activeSquares.push(<Square number={position[row][column].value} row={row} column={column} key={position[row][column].id} id={position[row][column].id}/>)
    //         }}
    // }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    
    render() {
        return(
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
                    transitionName="squareAnimation"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={10}>
                    {this.renderActiveSquares()}
                </ReactCSSTransitionGroup>
                {/*transitionAppear={true}
                transitionAppearTimeout={500}*/}
                {/*<Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
                    {value => <div>{value.x}</div>}
                </Motion>*/}
                {/*<FlipMove duration={750} easing="cubic-bezier(.12,.36,.14,1.2)">
                    {activeSquares}
                </FlipMove>*/}
            </div>
        )

    }
}

export default Board;
