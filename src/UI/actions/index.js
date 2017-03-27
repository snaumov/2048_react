export const SET_AMOUNT_OF_TILE_TO_SPAWN = "SET_AMOUNT_OF_TILE_TO_SPAWN";

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