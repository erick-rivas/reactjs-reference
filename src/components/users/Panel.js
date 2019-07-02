/*
__Seed builder__v1.0

  Guidelines:
    - EXAMPLE component to handle navigation (divided view)
    - Recomended usage: main navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import UserDetails from 'containers/users/Details';
import UserList from 'containers/users/List';
import UserListOptions from 'containers/users/list/Options';
import UserDetailsOptions from 'containers/users/details/Options';
import UserItem from 'components/users/Item';

import styles from 'util/css/users/Panel.module.css';

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

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default UserPanel;
