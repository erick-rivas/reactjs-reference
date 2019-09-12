/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'seed/templates/auth/Login'
import Logout from 'seed/templates/auth/Logout'
import Home from 'seed/templates/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import cls from 'resources/css/seed/templates/App.module.css';

class App extends React.Component
{
  render()
  {
    return (
      <div className={cls.module}>
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
