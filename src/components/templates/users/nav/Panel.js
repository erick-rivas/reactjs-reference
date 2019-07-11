/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import UserDetails from 'containers/templates/users/Details';
import UserList from 'containers/templates/users/List';
import UserListOptions from 'containers/templates/users/options/List';
import UserDetailsOptions from 'containers/templates/users/options/Details';
import UserItem from 'components/templates/users/Item';

import Component from 'components/templates/users/nav/Panel.link'

import styles from 'resources/css/templates/users/nav/Panel.module.css';

class UserPanel extends Component
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
}

export default UserPanel;
