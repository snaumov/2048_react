import { SAVE_GAME } from '../actions';

const initialUIstate = {
    savedGames: localStorage.getItem('savedGames') || [],
}

function updateSavedGames(savedGames, newGame) {
    if (savedGames.length < 10) {
        savedGames.push(newGame);
        return savedGames;
    } else {
        savedGames.unshift();
        savedGames.push(newGame);
        return savedGames;
    }
}

function UI (state=initialUIstate, action) {
    switch(action.type) {
        case SAVE_GAME:
            const newSavedGames = updateSavedGames(state.savedGames, action.game);

            localStorage.setItem('savedGames', newSavedGames);

            return Object.assign({}, state, {
                savedGames: newSavedGames,
            })
        default:
            return state;
    }
}

export default UI;