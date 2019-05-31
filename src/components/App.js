/*
__Seed builder__v1.0
*/

import * as React from 'react';

import Demo from 'components/Demo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component
{
  render()
  {
    return (
      <Router>
        <Switch>
          <Route path='/demo' component={Demo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
