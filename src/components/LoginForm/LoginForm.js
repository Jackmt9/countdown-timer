import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        username: '',
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
                        Username
                        <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
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
 
export default LoginForm;