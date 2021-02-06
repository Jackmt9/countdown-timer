const BACKEND = 'http://localhost:3001/'

export const createUser = (newUserInfo) => {
    console.log('Creating User...')
    return (dispatch) => {
        fetch(BACKEND + 'users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUserInfo)
        })
        .then(r => r.json())
        .then(user => {
            console.log(user)
            dispatch({type: 'MOUNT_USER', user})
        })
    }
}

export const loginUser = (userInfo) => {
    console.log('Logging In User...')
    return (dispatch) => {
        fetch(BACKEND + 'login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(user => {
            console.log(user)
            dispatch({type: 'MOUNT_USER', user})
        })
    }
}

export const deleteUser = () => {
    console.log('Deleting User...')
    return (dispatch) => {
        fetch(BACKEND + 'users', {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.token
            }
        })
        .then(r => r.json())
        .then(response => {
            console.log(response)
            dispatch({type: 'UNMOUNT_USER'})
        })
    }
}

export const logoutUser = () => {
    console.log('Logging Out User...')
    return (dispatch) => {
        localStorage.token.clear()
        dispatch({type: 'UNMOUNT_USER'})
    }
}

export const stayLoggedIn = () => {
    console.log('Re-logging In...')
    return (dispatch) => {
        fetch(BACKEND + 'stay_logged_in', {
            headers: {
                'Authorization': localStorage.token
            }
        })
        .then(r => r.json())
        .then(user => {
            console.log(user)
            dispatch({type: 'MOUNT_USER', user})
        })
    }
}

export const updateUserInfo = (updatedUser) => {
    console.log('Updating User...')
    return (dispatch) => {
        fetch(BACKEND + 'users', {
            method: 'PUT',
            headers: {
                Authorization: localStorage.token,
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedUser)
        })
        .then(r => r.json())
        .then(user => {
            console.log(user)
            dispatch({type: 'MOUNT_USER', user})
        })
    }
}