import cuid from 'cuid'

const TimerReducer = (state = { timers: [] }, action) => {
    switch(action.type){
        case 'ADD_TIMER':
            return {
                ...state,
                timers: state.timers.concat({title: action.timer.title, time: action.timer.time, date: action.timer.date, id: cuid()})
            }
        case 'DELETE_TIMER':
            return {
                ...state,
                timers: state.timers.filter(timer => timer.id !== action.id)
            }
        case 'UPDATE_TIMER':
            const updatedTimer = action.timer
            return {
                ...state,
                timers: state.timers.filter(timer => timer.id !== updatedTimer.id).push(updatedTimer)
            }
        default:
            return state
    }
}

export default TimerReducer;