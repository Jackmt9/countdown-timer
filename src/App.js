import './App.css';
import TimerContainer from './containers/TimerContainer';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import LoginForm from './components/LoginForm/LoginForm'
import RegisterForm from './components/RegisterForm'
import { createUser, loginUser, deleteUser, logoutUser, updateUserInfo} from './actions/UserActions'
import { connect } from 'react-redux'

function App() {

  const logout = () => {
    localStorage.clear()
    return (<Redirect to="/" />)
  }

  return (
    <div>
      <Router>
        <NavBar />
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

export default connect(null)(App);
