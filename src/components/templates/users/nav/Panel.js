/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import UserDetails from 'components/templates/users/Details';
import UserList from 'components/templates/users/List';
import UserListOptions from 'components/templates/users/options/List';
import UserDetailsOptions from 'components/templates/users/options/Details';
import UserItem from 'components/templates/users/Item';

import styles from 'resources/css/templates/users/nav/Panel.module.css';

class UserPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <div className={styles.options}>
          <UserListOptions {...props}/>
        </div>
        <div className={styles.content}>
          <UserList {...props}
            Item={UserItem} />
        </div>
      </div>

    const details = props =>
      <div className={styles.details}>
        <div className={styles.card}>
          <div className={styles.options}>
            <UserDetailsOptions {...props} />
          </div>
          <div className={styles.content}>
            <UserDetails {...props} />
          </div>
        </div>
      </div>
   
    return (
      <div className={styles.module}>
        <div className={styles.container}>        
          <Route
            path={`${path}`}
            component={list} />
          <Route
            path={`${path}/:user_id(\\d+)`}
            component={details} />
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
}

export default UserPanel;
