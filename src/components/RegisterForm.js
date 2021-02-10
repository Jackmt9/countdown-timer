import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createUser } from '../actions/UserActions'
class RegisterForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        password2: '',
        email: '',
        phone: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.state)
        // // error handling needed
    }

    render() { 
        return ( 
            <div className='register-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name
                        <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                    </label>
                    <label>
                        Last name
                        <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                    </label>
                    <label>
                        Email
                        <input type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <label>
                        Phone
                        <input type='text' name='phone' onChange={this.handleChange} value={this.state.phone}/>
                    </label>
                    <label>
                        Password
                        <input type='password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <label>
                        Re-enter Password
                        <input type='password' name='password2' onChange={this.handleChange} value={this.state.password2}/>
                    </label>
                    <input type='submit' value='Create Account'/>
                </form>
            </div>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        createUser
    }
}
export default connect(null, mapDispatchToProps)(RegisterForm);