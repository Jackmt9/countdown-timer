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
        this.props.history.push('/timers')
    }

    render() { 
        return (
            <div className='login-form mb-3'>
                <form onSubmit={this.handleSubmit}>
                    <label className='form-label'>
                        Email
                        <input className='form-control' type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <label className='form-label'>
                        Password
                        <input className='form-control' type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <br/>
                    <input className='btn btn-primary mb-3' type='submit' value='Login'/>
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