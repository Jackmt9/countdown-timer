import cuid from 'cuid'

export default function TimerReducer(state = {timers: []}, action){
    switch(action.type){
        case 'ADD_TIMER':
            return {
                ...state,
                timers: state.timers.concat({name: action.timer.name, time: action.timer.time, id: cuid()})
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
    }
}