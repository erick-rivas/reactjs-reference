/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'containers/templates/auth/Login';
import Logout from 'containers/templates/auth/Logout';
import Home from 'containers/templates/Home';
import Test from 'containers/Template'

import Component from 'components/App.link'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component
{
  render()
  {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/app' component={Home} />
          <Route path="/test" component={Test} />
          <Redirect to='/test' />
        </Switch>
      </Router>
    );
  }
}

export default App;
