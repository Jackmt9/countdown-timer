import { combineReducers } from 'redux'
import timerReducer from './TimerReducer'
import userReducer from './UserReducer'

const rootReducer = combineReducers({
    user: userReducer,
    timers: timerReducer
})

export default rootReducer