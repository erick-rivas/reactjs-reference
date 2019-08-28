/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Login from 'components/templates/auth/Login'
import Logout from 'components/templates/auth/Logout'
import Home from 'components/templates/Home'

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
            <Route path='/templates/login' component={Login} />
            <Route path='/templates/logout' component={Logout} />
            <Route path='/templates/app' component={Home} />
            <Redirect to='/templates/app' />
          </Switch>
        </Router>
      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default App;