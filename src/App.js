import './App.css';
import TimerContainer from './containers/TimerContainer/TimerContainer.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import LoginForm from './components/LoginForm/LoginForm'
import RegisterForm from './components/RegisterForm'
import { logoutUser } from './actions/UserActions'
import { connect } from 'react-redux'

function App({isLoggedIn, logoutUser}) {

  const logout = () => {
    logoutUser()
    return (<Redirect to="/" />)
  }

  return (
    <div>
      <Router>
        <NavBar isLoggedIn={isLoggedIn}/>
        <div style={{padding: 20}}>
          <Switch>
            <Route exact path='/' component={null}/>
            {
              (isLoggedIn) ? 
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
