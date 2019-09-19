/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';

import Auth from 'seed/templates/auth/Auth'
import Login from 'seed/templates/auth/Login'
import Logout from 'seed/templates/auth/Logout'
import Home from 'seed/templates/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import styles from 'resources/css/seed/templates/App.module.css';

function App(props)
{
  const { path } = props.match;
  return (
    <div className={styles.module}>
      <Router>
        <Route path={`${path}/app`} component={Auth} />
        <Switch>
          <Route path={`${path}/login`} component={Login} />
          <Route path={`${path}/logout`} component={Logout} />
          <Route path={`${path}/app`} component={Home} />
          <Redirect to={`${path}/app`} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
