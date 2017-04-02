export const SET_AMOUNT_OF_TILE_TO_SPAWN = "SET_AMOUNT_OF_TILE_TO_SPAWN";
export const SAVE_GAME = "SAVE_GAME";
export const LOAD_GAME = "LOAD_GAME";
export const DELETE_GAME = "DELETE_GAME";

export function setAmountOfTilesToSpawn(amount) {
    return {
        type: SET_AMOUNT_OF_TILE_TO_SPAWN,
        amountOfTilesToSpawn: amount,
    }
}

export function changeSettings(amountOfTilesToSpawn) {
    return dispatch => {
        dispatch(setAmountOfTilesToSpawn(amountOfTilesToSpawn));
    }
}

export function saveGame(game) {
    return {
        type: SAVE_GAME,
        game
    }
}

export function loadGame(gameNumber) {
    return {
        type: SAVE_GAME,
        gameNumber
    }
}

export function deleteGame(gameNumber) {
    return {
        type: SAVE_GAME,
        gameNumber
    }
}