import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
class RegisterForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        password2: '',
        email: '',
        phone: ''
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.validator = new SimpleReactValidator();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
          } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
          }
        // if(this.state.password !== this.state.password2){
        //     alert('Passwords Don\'t Match')
        // }
        // // error handling needed
        // this.props.createUser(this.state)
    }

    render() { 
        return ( 
            <div className='register-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name
                        <input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                    </label>
                    {this.validator.message('firstName', this.state.firstName, 'required|alpha')}
                    <label>
                        Last name
                        <input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                    </label>
                    {this.validator.message('lastName', this.state.lastName, 'required|alpha')}
                    <label>
                        Email
                        <input type='text' name='email' onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
                    <label>
                        Phone
                        <input type='text' name='phone' onChange={this.handleChange} value={this.state.phone}/>
                    </label>
                    {this.validator.message('phone', this.state.phone, 'required|phone')}
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
 
export default RegisterForm;