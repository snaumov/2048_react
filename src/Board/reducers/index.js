import { MAKE_MOVE } from '../actions'

const initialState = {
    position: [[0, 2, 0, 0], 
               [0, 0, 0, 0], 
               [0, 0, 2, 0], 
               [0, 0, 0, 0]],
}

function updatePosition(direction) {

}


function position(state=initialState, action) {
    switch(action.type) {
        case MAKE_MOVE:
            return state;
        default: 
            return state
    }
}

export default position;