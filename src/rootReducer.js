import { combineReducers } from 'redux'
import position from './Board/reducers'

const rootReducer = combineReducers({
    position,
})

export default rootReducer;