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

// console.log(updatePosition([[4, 0, 2, 2], 
//                [0, 0, 0, 0], 
//                [4, 0, 4, 0], 
//                [0, 0, 0, 0]], 'DOWN'));


function spawnPiles(position, amountOfPiles) {
    var emptySquares = [];

    for (var row = 0; row < position.length; row++){
        for(var column = 0; column < position.length; column++){
            if(position[row][column] === 0){
                emptySquares.push([row, column]);
            }
        }
    }

    var resultArray = []
    while(amountOfPiles){
        var pile = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        var pileIndex = emptySquares.indexOf(pile);
        emptySquares.splice(pileIndex, 1);
        resultArray.push(pile);
        amountOfPiles--;
    }

    return resultArray;

}

console.log(spawnPiles([[4, 0, 2, 2], 
               [0, 0, 0, 0], 
               [4, 0, 4, 0], 
               [0, 0, 0, 0]], 2));

