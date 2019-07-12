/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'components/templates/auth/Login';
import Logout from 'components/templates/auth/Logout';
import Home from 'components/templates/Home';
import Test from 'components/Template'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component
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
