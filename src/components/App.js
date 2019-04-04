import * as React from 'react';

import Home from 'components/Home';
import Login from 'containers/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component
{
  render()
  {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;