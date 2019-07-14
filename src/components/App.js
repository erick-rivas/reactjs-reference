/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'components/auth/Login'
import Logout from 'components/auth/Logout'
import Debug from 'components/debug/Debug'
import Exports from 'components/debug/Exports'
import Home from 'components/Home'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import styles from 'resources/css/App.module.css';

class App extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/debug/exports" component={Exports} />
            <Route path="/debug" component={Debug} />
            <Route path="/app" component={Home} />
            <Redirect to='/app' />
          </Switch>
        </Router>
      </div>
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
