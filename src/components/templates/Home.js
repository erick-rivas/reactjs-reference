/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Switch, Route, Redirect } from 'react-router-dom'

import Sidenav from 'components/templates/nav/Sidenav'
import Topnav from 'components/templates/nav/Topnav'

import styles from 'resources/css/templates/Home.module.css';

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
             <Switch>
                {/* Suggest: Include model panels*/}
            </Switch>
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
