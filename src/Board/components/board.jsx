import React, { Component } from 'react';
import { Square, BoardSquare } from './square';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlipMove from 'react-flip-move';
import { Motion, spring } from 'react-motion';


class Board extends Component {
    constructor(props){
        super(props);
        var activeSquares = [];
    }
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

    const position = props.position;
    

    for(var row = 0; row < position.length; row++){
            for(var column = 0; column < position[row].length; column++){
                if(position[row][column] !== 0) {
                    activeSquares.push(
                        <Motion style={{x: spring(0)}}>
                            {({x}) =>
                                <Square number={position[row][column]} row={row} column={column} key={row.toString()+column.toString()} x={x}/>
                        
                        }
                        </Motion>
                )
            }}
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
            {/*<ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                {activeSquares}
            </ReactCSSTransitionGroup>*/}
            {activeSquares}
            {/*<Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
                {value => <div>{value.x}</div>}
            </Motion>*/}
            {/*<FlipMove duration={750} easing="cubic-bezier(.12,.36,.14,1.2)">
                {activeSquares}
            </FlipMove>*/}
        </div>
    )
}

export default Board;
