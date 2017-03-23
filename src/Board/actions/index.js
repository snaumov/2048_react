export const MAKE_MOVE = 'MAKE_MOVE'
export const SPAWN_TILES = 'SPAWN_TILES'

function spawnTiles() {
    return {
        type: SPAWN_TILES,
    }
}

function makeMove(direction) {
    return {
        type: MAKE_MOVE,
        direction
    }
}

export function makeMoveAndSpawnTiles(direction) {
    return dispatch => {
        dispatch(makeMove(direction));
        //dispatch(spawnTiles());
    }
}
