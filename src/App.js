import './App.css';
import TimerContainer from './containers/TimerContainer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TimerReducer from './reducers/TimerReducer';
import NavBar from './components/NavBar/NavBar'
import UserContainer from './containers/UserContainer';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/timers' component={TimerContainer}/>
          <Route path='/login' component={null}/>
          <Route path='/register' component={null}/>
          <Route path='/profile' component={UserContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
