/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Templates from 'components/templates/App'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import c from 'resources/css/App.module.css';

class App extends React.Component
{
  render()
  {
    return (
      <div className={c.module}>
        <Router>
          <Switch>
            <Route path="/templates" component={Templates} />
            <Redirect to="/templates" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;