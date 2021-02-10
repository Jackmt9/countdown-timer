import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../../actions/UserActions'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state)
    }

    render() { 
        return (
            <div className='login-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <label>
                        Password
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        );
    }
}
 

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}
export default connect(null, mapDispatchToProps)(LoginForm);