import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dash from './components/dashboard/dash';
import Login from './components/Authentication/login';

class App extends Component {

  render(){
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Dash} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>
      )
  }
}
export default App;