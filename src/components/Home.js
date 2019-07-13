/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import Sidenav from 'components/nav/Sidenav'
import Topnav from 'components/nav/Topnav'

import styles from 'resources/css/Home.module.css';

class Home extends React.Component
{
  render()
  {
    const { path } = this.props.match;

    return (
      <div className={styles.module}>
        <div className={styles.drawer}>
          <div className={styles.sidenav}>
            <Route path={`${path}`}
              component={Sidenav} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.topnav}>
            <Route path={`${path}`}
              component={Topnav} />
          </div>
          <div className={styles.content}>        
              <h2>Hi!</h2>
              <p>Add components and action with <code>seed export components:model_name </code></p>
          </div>
        </div>
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

  componentDidMount()
  {
    const userId = sessionStorage.getItem('id');
    if (userId == null)
      return this.props.history.replace('/login');
  }
}

export default redux(Home);
