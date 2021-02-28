import './App.css';
import TimerContainer from './containers/TimerContainer';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import LoginForm from './components/LoginForm/LoginForm'
import RegisterForm from './components/RegisterForm'
import { createUser, loginUser, deleteUser, logoutUser, updateUserInfo} from './actions/UserActions'
import { connect } from 'react-redux'
import React, {useState} from 'react'

function App(props) {

  const logout = () => {
    props.logoutUser()
    return (<Redirect to="/" />)
  }

  return (
    <div>
      <Router>
        <NavBar isLoggedIn={props.isLoggedIn}/>
        <div style={{padding: 20}}>
          <Switch>
            <Route exact path='/' component={null}/>
            {
              (localStorage.token) ? 
              <>
              <Route path='/profile' component={null}/>
              <Route path='/logout' render={logout}/>
              <Route path='/timers' component={TimerContainer}/>
              </>
              :
              <>
              <Route path='/login' component={LoginForm}/>
              <Route path='/register' component={RegisterForm}/>
              </>
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.user.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
