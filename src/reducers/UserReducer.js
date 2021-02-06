const UserReducer = (state = {}, action) => {
    switch(action.type){

        case 'MOUNT_USER':
            // mount localStorage token here
            return action.user

        case 'UNMOUNT_USER':
            return {}

        default:
            return state
    }
}

export default UserReducer