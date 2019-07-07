import * as React from 'react';
import cx from 'classnames';

import Login from 'containers/auth/Login';
import Logout from 'containers/auth/Logout';
import Home from 'containers/Home';

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
          <Redirect to='/app' />
        </Switch>
      </Router>
    );
  }
}

export default App;
