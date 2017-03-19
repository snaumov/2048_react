function updatePosition(position, direction) {

    
    const flipMatrix = matrix => (
        matrix[0].map((column, index) => (
            matrix.map(row => row[index])
        ))
    );

    const updatePositionLeft = position => {
        var newPosition = position;
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
            var newPosition = position;
            for(var row = 0; row < position.length; row++) {
                var tempNewRow = position[row].filter(value => value !== 0);
                var finalNewRow = [];
                
                for (var newColumn = tempNewRow.length - 1; newColumn > -1; newColumn--) {
                        if(tempNewRow[newColumn] === tempNewRow[newColumn - 1]){
                            finalNewRow.push(tempNewRow[newColumn] * 2);
                            newColumn--;
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

console.log(updatePosition([[0, 2, 0, 0], 
               [0, 0, 0, 0], 
               [0, 0, 2, 0], 
               [0, 0, 0, 0]], 'LEFT'));