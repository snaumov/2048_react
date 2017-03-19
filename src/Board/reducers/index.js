import { MAKE_MOVE } from '../actions'

const initialState = {
    position: [[0, 2, 0, 0], 
               [0, 0, 0, 0], 
               [0, 0, 2, 0], 
               [0, 0, 0, 0]],
}

function updatePosition(position, direction) {

    
    const flipMatrix = matrix => (
        matrix[0].map((column, index) => (
            matrix.map(row => row[index])
        ))
    );

    const updatePositionLeft = position => {
        var newPosition = position;
            for(var row = 0; row < position.length; row++) {
                var newRow = [];
                for(var column = 0; column < position[row].length; column++) {
                    if(position[row][column] !== 0){
                        if(position[row][column + 1] !== position[row][column]){
                            newRow.push(position[row][column]);
                        } else {
                            newRow.push(position[row][column] * 2);
                            column++;
                        }
                    }
                }
                while(newRow.length < position[row].length){
                    newRow.push(0);
                }
                newPosition.push(newRow);
            }
            return newPosition;
    }

    const updatePositionRight = position => {
            var newPosition = position;
            for(var row = 0; row < position.length; row++) {
                var newRow = [];
                for(var column = position[row].length; column > 0; column--) {
                    if(position[row][column] !== 0){
                        if(position[row][column - 1] !== position[row][column]){
                            newRow.unshift(position[row][column]);
                        } else {
                            newRow.unshift(position[row][column] * 2);
                            column--;
                        }
                    }
                }
                while(newRow.length < position[row].length){
                    newRow.unshift(0);
                }
                newPosition.push(newRow);
            }
            return newPosition;
    }

    switch(direction) {
        case 'LEFT':
            return updatePositionLeft(position);
        
        case 'RIGHT':
            return updatePositionRight(position);

        case 'UP':
            return flipMatrix(updatePositionLeft(flipMatrix(position)));

        case 'DOWN': 
            return flipMatrix(updatePositionRight(flipMatrix(position)));
            
        default: 
            return position;
    }
}


function position(state=initialState, action) {
    switch(action.type) {
        case MAKE_MOVE:
            return state;
        default: 
            return state
    }
}

export default position;