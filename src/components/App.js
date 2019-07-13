/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'components/auth/Login'
import Logout from 'components/auth/Logout'
import Home from 'components/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component
{
  render()
  {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/app" component={Home} />
          <Redirect to='/app' />
        </Switch>
      </Router>
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default App;
