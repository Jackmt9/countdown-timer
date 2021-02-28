const {camelizeKeys, decamelizeKeys} = require('humps')

const BACKEND = 'http://localhost:3001/'

export const createUser = (newUserInfo) => {
    console.log('Creating User...')
    return (dispatch) => {
        fetch(BACKEND + 'users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(decamelizeKeys(newUserInfo))
        })
        .then(r => r.json())
        .then(response => {
            handleResponseAndMount(response, dispatch)
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
            body: JSON.stringify(decamelizeKeys(userInfo))
        })
        .then(r => r.json())
        .then(response => {
            handleResponseAndMount(response, dispatch)
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
            handleResponseAndUnmount(response, dispatch)
        })
    }
}

export const logoutUser = () => {
    console.log('Logging Out User...')
    return (dispatch) => {
        localStorage.clear()
        dispatch({type: 'UNMOUNT_USER'})
    }
}

export const validateUser = () => {
    console.log('Validating User...')
    return (dispatch) => {
        fetch(BACKEND + 'stay_logged_in', {
            headers: {
                'Authorization': localStorage.token
            }
        })
        .then(r => r.json())
        .then(response => {
            handleResponseAndMount(response, dispatch)
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
            body: JSON.stringify(decamelizeKeys(updatedUser))
        })
        .then(r => r.json())
        .then(response => {
            handleResponseAndMount(response, dispatch)
        })
    }
}

// handles fetch responses and accounts for error messages

const handleResponseAndMount = (response, dispatch) => {
    if (response.message){
        localStorage.clear()
        dispatch({type: 'UNMOUNT_USER'})
        alert (response.message)
    } else {
        localStorage.token = response.token
        dispatch({type: 'MOUNT_USER', user: camelizeKeys(response.user)})
    }
}


const handleResponseAndUnmount = (response, dispatch) => {
    if (response.message){
        alert (response.message)
    } else {
        localStorage.clear()
        dispatch({type: 'UNMOUNT_USER'})
    }
}