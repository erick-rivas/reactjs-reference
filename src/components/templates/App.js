/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'components/templates/auth/Login'
import Logout from 'components/templates/auth/Logout'
import Home from 'components/templates/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import c from 'resources/css/templates/App.module.css';

class App extends React.Component
{
  render()
  {
    return (
      <div className={c.module}>
        <Router>
          <Switch>
             <Route path='/templates/login' component={Login} />
            <Route path='/templates/logout' component={Logout} />
            <Route path='/templates/app' component={Home} />
            <Redirect to='/templates/app' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
