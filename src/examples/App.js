/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';

import Auth from 'examples/auth/Auth'
import Login from 'examples/auth/Login'
import Logout from 'examples/auth/Logout'
import Home from 'examples/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import styles from 'resources/css/examples/App.module.css';

function Examples(props)
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

export default Examples;
