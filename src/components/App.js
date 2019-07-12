/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import Test from 'components/Template'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component
{
  render()
  {
    return (
      <Router>
        <Switch>
          {/* Suggest: Include auth and home components */}
          <Route path="/" component={Test} />
          <Redirect to='/' />
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
