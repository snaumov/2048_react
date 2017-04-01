import { combineReducers } from 'redux'
import position from './Board/reducers'
import UI from './UI/reducers'

const rootReducer = combineReducers({
    position,
    UI
})

export default rootReducer;