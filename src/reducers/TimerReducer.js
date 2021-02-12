import cuid from 'cuid'

const TimerReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TIMER':
            return state.concat({title: action.timer.title, time: action.timer.time, id: cuid()})
            
        case 'DELETE_TIMER':
            return state.filter(timer => timer.id !== action.id)  

        case 'UPDATE_TIMER':
            const updatedTimer = action.timer
            return state.filter(timer => timer.id !== updatedTimer.id).push(updatedTimer)

        case 'SET_TIMERS':
            return action.timers

        default:
            return state
    }
}

export default TimerReducer;