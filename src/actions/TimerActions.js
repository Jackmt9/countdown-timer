const {camelizeKeys, decamelizeKeys} = require('humps')

const BACKEND = 'http://localhost:3001/'

export const addTimer = (timer) => {
    console.log('Adding Timer...')
    return (dispatch) => {
        fetch(BACKEND + 'timers', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
                'content-type': 'application/json'
            },
            body: JSON.stringify(decamelizeKeys(timer))
        })
        .then(r => r.json())
        .then(timer => {
            console.log(camelizeKeys(timer))
            dispatch({type: 'ADD_TIMER', timer: camelizeKeys(timer)})
        })
    }
}

export const deleteTimer = (id) => {
    console.log('Deleting timer...')
    return (dispatch) => {
        fetch(BACKEND + 'timers/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.token,
                'content-type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(response => {
            console.log(response)
            dispatch({type: 'DELETE_TIMER', id})
        })
    }
}

// export const updateTimer = (timer) => {
//     console.log('Updating Timer...')
//     return (dispatch) => {
//         fetch(BACKEND + 'timers/' + timer.id, {
//             method: 'PUT',
//             headers: {
//                 'Authorization': localStorage.token,
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(decamelizeKeys(timer))
//         })
//         .then(r => r.json())
//         .then(timer => {
//             console.log(camelizeKeys(timer))
//             dispatch({type: 'UPDATE_TIMER', timer: camelizeKeys(timer)})
//         })
//     }
// }

export const getTimers = () => {
    console.log('Getting timers...')
    return (dispatch) => {
        fetch(BACKEND + 'timers', {
            headers: {
                'Authorization': localStorage.token,
                'content-type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(timers => {
            console.log(camelizeKeys(timers))
            dispatch({type: 'SET_TIMERS', timers: camelizeKeys(timers)})
        })
    }
}