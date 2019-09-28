/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';

import Examples from 'seed/examples/App'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import styles from 'resources/css/App.module.css';

function App(props)
{
  return (
    <div className={styles.module}>
      <Router>
        <Switch>
          <Route path="/examples" component={Examples} />
          <Redirect to="/examples" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
