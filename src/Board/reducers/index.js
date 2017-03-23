import { MAKE_MOVE, SPAWN_TILES } from '../actions'

const initialState = {
    position: [[0, 2, 0, 0], 
               [0, 0, 0, 0], 
               [0, 0, 2, 0], 
               [0, 0, 0, 0]],
    amountOfTilesToSpawn: 2,
    gameIsLost: false,
}

function updatePosition(position, direction) {
   
    const flipMatrix = matrix => (
        matrix[0].map((column, index) => (
            matrix.map(row => row[index])
        ))
    );

    const updatePositionLeft = position => {
        var newPosition = [];
            for(var row = 0; row < position.length; row++) {
                var tempNewRow = position[row].filter(value => value !== 0);
                var finalNewRow = [];
                
                for (var newColumn = 0; newColumn < tempNewRow.length; newColumn++) {
                        if(tempNewRow[newColumn] === tempNewRow[newColumn + 1]){
                            finalNewRow.push(tempNewRow[newColumn] * 2);
                            newColumn++;
                        } else {
                            finalNewRow.push(tempNewRow[newColumn]);                      
                        }
                    }
        
                while(finalNewRow.length < position[row].length){
                    finalNewRow.push(0);
                }
                newPosition.push(finalNewRow);
            }
            return newPosition;
    }

    const updatePositionRight = position => {
            var newPosition = [];
            for(var row = 0; row < position.length; row++) {
                var tempNewRow = position[row].filter(value => value !== 0);
                var finalNewRow = [];
                
                for (var newColumn = tempNewRow.length - 1; newColumn > -1; newColumn--) {
                        if(tempNewRow[newColumn] === tempNewRow[newColumn - 1]){
                            finalNewRow.unshift(tempNewRow[newColumn] * 2);
                            newColumn--;
                        } else {
                            finalNewRow.unshift(tempNewRow[newColumn]);                      
                        }
                    }
        
                while(finalNewRow.length < position[row].length){
                    finalNewRow.unshift(0);
                }
                newPosition.push(finalNewRow);
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

function spawnTiles(position, amountOfTiles) {
    var emptySquares = [];

    for (var row = 0; row < position.length; row++){
        for(var column = 0; column < position.length; column++){
            if(position[row][column] === 0){
                emptySquares.push([row, column]);
            }
        }
    }

    var resultArray = []
    while(amountOfTiles){
        var tile = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        var tileIndex = emptySquares.indexOf(tile);
        emptySquares.splice(tileIndex, 1);
        resultArray.push(tile);
        amountOfTiles--;
    }

    return resultArray;

}


function position(state=initialState, action) {
    switch(action.type) {
        case MAKE_MOVE:
            var newPosition = updatePosition(state.position, action.direction);

            return Object.assign({}, state, {
                position: newPosition,
            });

        case SPAWN_TILES:
            var newPosition = state.position;
            var newTiles = spawnTiles(newPosition, state.amountOfTilesToSpawn);
            var gameIsLost = false;

            if (newTiles.length > 0) {
                for(var tile of newTiles){
                    newPosition[tile[0]][tile[1]] = 2;
                }
            } else {
                gameIsLost = true;
            }

            return Object.assign({}, state, {
                position: newPosition,
                gameIsLost: gameIsLost,
            });


        default: 
            return state
    }
}

export default position;