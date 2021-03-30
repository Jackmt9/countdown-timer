const TimerReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TIMER':
            return state.concat({title: action.timer.title, time: action.timer.time})
            
        case 'DELETE_TIMER':
            return state.filter(timer => timer.id !== action.id)  
            
        case 'SET_TIMERS':
            return action.timers

        case 'SORT_TIMERS':
            switch (action.sortType) {
                case 'ENDING_SOONEST':
                    return state.slice().sort((a,b) => a.time - b.time)
                case 'ENDING_LAST':
                    return state.slice().sort((a,b) => b.time - a.time)
                case 'ALPHABETICAL':
                    return state.slice().sort((a,b) => {
                        if (a.title < b.title) return -1
                        if (a.title > b.title) return 1
                        return 0
                    })
                default:
                    return state
            }

        default:
            return state
    }
}

export default TimerReducer;