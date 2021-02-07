import { createUser, loginUser, deleteUser, logoutUser, updateUserInfo} from '../actions/UserActions'
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { connect } from 'react-redux'
class UserContainer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                User Container
                <LoginForm loginUser={this.props.loginUser}/>
                <RegisterForm createUser={this.props.createUser}/>
            </div>
        );
    }
}
 
// const mapStateToProps = (state) => {
//     return {}
// }

const mapDispatchToProps = (dispatch) => {
    return {
        createUser,
        loginUser,
        deleteUser,
        logoutUser,
        updateUserInfo
    }
}

export default connect(null, mapDispatchToProps)(UserContainer);