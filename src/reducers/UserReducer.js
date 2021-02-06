const UserReducer = (state = { user: {} }, action) => {
    switch(action.type){

        case 'MOUNT_USER':
            // mount localStorage token here
            return {
                ...state,
                user: action.user
            }
        case 'UNMOUNT_USER':
            return {
                ...state,
                user: {}
            }

        default:
            return state
    }
}

export default UserReducer