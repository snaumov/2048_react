import { MAKE_MOVE, SPAWN_TILES } from '../actions'
import { SET_AMOUNT_OF_TILE_TO_SPAWN, LOAD_GAME, NEW_GAME } from '../../UI/actions'
import { newId } from '../../Misc/utils'

const initialState = {
    position: [[0, {id: 1, value: 2}, 0, 0], 
               [0, 0, 0, 0], 
               [0, 0, {id: 2, value: 2}, 0], 
               [0, 0, 0, 0]],
    // activeSquares: {
    //     1: {position: [0, 1], value: 2},
    //     2: {position: [2, 2], value: 2},
    // },
    amountOfTilesToSpawn: 1,
    gameIsLost: false,
    currentScore: 0,
    highScore: localStorage.getItem('highScore') || 0,
}

function updatePosition(position, direction, currentScore) {
    
    var newHighScore = currentScore;

    const flipMatrix = matrix => (
        matrix[0].map((column, index) => (
            matrix.map(row => row[index])
        ))
    )

    const updatePositionLeft = position => {
        var newPosition = [];
            for(var row = 0; row < position.length; row++) {
                var tempNewRow = position[row].filter(value => value !== 0);
                var finalNewRow = [];
                
                for (var newColumn = 0; newColumn < tempNewRow.length; newColumn++) {
                        if(tempNewRow[newColumn + 1] && tempNewRow[newColumn].value === tempNewRow[newColumn + 1].value){
                            finalNewRow.push({id: newId(), value: tempNewRow[newColumn].value * 2});
                            newHighScore += tempNewRow[newColumn].value * 2;
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
                        if(tempNewRow[newColumn - 1] && tempNewRow[newColumn].value === tempNewRow[newColumn - 1].value){
                            finalNewRow.unshift({id: newId(), value: tempNewRow[newColumn].value * 2});
                            newHighScore += tempNewRow[newColumn].value * 2;
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
            return {position: updatePositionLeft(position), currentScore: newHighScore};
        
        case 'RIGHT':
            return {position: updatePositionRight(position), currentScore: newHighScore};

        case 'UP':
            //return updatePositionLeft(position);
            return {position: flipMatrix(updatePositionLeft(flipMatrix(position))), currentScore: newHighScore};

        case 'DOWN': 
            return {position: flipMatrix(updatePositionRight(flipMatrix(position))), currentScore: newHighScore};
            
        default: 
            return {position: position, currentScore: newHighScore};
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
            const newPosition = updatePosition(state.position, action.direction, state.currentScore);
            var newHighScore = state.highScore;
            console.log(newPosition.currentScore);
            if(newPosition.currentScore > state.highScore) {
                newHighScore = newPosition.currentScore;
                localStorage.setItem('highScore', newHighScore);
            }
            return Object.assign({}, state, {
                position: newPosition.position,
                currentScore: newPosition.currentScore,
                highScore: newHighScore,
            });

        case SPAWN_TILES:
            var newPosition = state.position;
            var newTiles = spawnTiles(newPosition, state.amountOfTilesToSpawn);
            var gameIsLost = false;

            if (newTiles.length > 0) {
                for(var tile of newTiles){
                    newPosition[tile[0]][tile[1]] = {id: newId(), value: 2};
                }
            } else {
                gameIsLost = true;
            }

            return Object.assign({}, state, {
                position: newPosition,
                gameIsLost: gameIsLost,
            });

        case SET_AMOUNT_OF_TILE_TO_SPAWN:
            return Object.assign({}, state, {
                amountOfTilesToSpawn: action.amountOfTilesToSpawn,
            })
        
        case LOAD_GAME:
            return Object.assign({}, state, {
                position: JSON.parse(localStorage.getItem('savedGames'))[action.gameNumber],
            })
        
        case NEW_GAME: 
            return Object.assign({}, state, {
                position: initialState.position,
            })


        default: 
            return state
    }
}

export default position;