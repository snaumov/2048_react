import { SAVE_GAME, LOAD_GAME, DELETE_GAME, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions';

const initialUIstate = {
    savedGames: JSON.parse(localStorage.getItem('savedGames')) || [],
    showNotification: false,
    notificationText: '',
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
            var newSavedGames = state.savedGames.filter((val, ind) => ind != action.gameNumber);
            localStorage.setItem('savedGames', JSON.stringify(newSavedGames));

            return Object.assign({}, state, {
                savedGames: newSavedGames,
            })
        case SHOW_NOTIFICATION: 
            return Object.assign({}, state, {
                showNotification: true,
                notificationText: action.notificationText,
            })
        case HIDE_NOTIFICATION: 
            return Object.assign({}, state, {
                showNotification: false,
            })
        default:
            return state;
    }
}

export default UI;