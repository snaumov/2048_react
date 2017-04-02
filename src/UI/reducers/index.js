import { SAVE_GAME, LOAD_GAME, DELETE_GAME } from '../actions';

const initialUIstate = {
    savedGames: JSON.parse(localStorage.getItem('savedGames')) || [],
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

            localStorage.setItem('savedGames', JSON.stringify(newSavedGames));

            return Object.assign({}, state, {
                savedGames: newSavedGames,
            })
        case DELETE_GAME:         
            return Object.assign({}, state, {
                savedGames: state.savedGames.splice(action.gameNumber)
            })
        default:
            return state;
    }
}

export default UI;