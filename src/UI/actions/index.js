export const SET_AMOUNT_OF_TILE_TO_SPAWN = "SET_AMOUNT_OF_TILE_TO_SPAWN";
export const SAVE_GAME = "SAVE_GAME";
export const LOAD_GAME = "LOAD_GAME";
export const DELETE_GAME = "DELETE_GAME";
export const NEW_GAME = "NEW_GAME";
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

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

export function showNotification(notificationText) {
    return {
        type: SHOW_NOTIFICATION,
        notificationText: notificationText,
    }
}

export function hideNotification() {
    return {
        type: HIDE_NOTIFICATION,
    }
}

export function saveGameAndShowNotification(game, notificationText) {
    return dispatch => {
        dispatch(saveGame(game));
        dispatch(showNotification(notificationText));
        setTimeout(() => dispatch(hideNotification()), 3000);
    }
}

export function loadGame(gameNumber) {
    return {
        type: LOAD_GAME,
        gameNumber
    }
}

export function deleteGame(gameNumber) {
    return {
        type: DELETE_GAME,
        gameNumber
    }
}

export function newGame() {
    return {
        type: NEW_GAME,
    }
}