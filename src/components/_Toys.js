import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Nav from 'components/_toy/_Nav';
import Add from 'containers/_toy/_Add';
import List from 'containers/_ToyList'

import styles from 'styles/css/toys.module.css';


class Toys extends React.Component
{
  render() 
  {
    const addContainer =
      <div className={styles.addContainer}>
        <Add history={this.props.history} />
      </div>

    return (
      <div className={styles.module}>
        <div className={styles.toolbar}>
          <Route
            path='/toys/:pet/:component'
            component={Nav} />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <Switch>
              <Route
                path='/toys/:pet/list'
                component={List} />
              <Route
                path='/toys/:pet/calendar'
                component={List} />
              <Route
                path='/toys/:pet/attachments'
                component={List} />
              <Redirect to={`/toys/all/list`} />
            </Switch>
          </div>
        </div>

        <Route
          path='/toys/:pet/*/add'
          render={() => addContainer} />

      </div>
    );
  }
}

export default Toys;