/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';


import UserDetails from 'containers/users/Details';
import UserList from 'containers/users/List';
import Item from 'components/helpers/Item';


import styles from 'util/css/users/Panel.module.css';

class UserPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <UserList 
        Item={Item} />

    const details = props =>
      <div className={styles.details_container}>
        <UserDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <div className={styles.list}>
          <Route
            path={`${path}`}
            component={list} />
        </div>
      <div className={styles.details}>
        <Route
          path={`${path}/:user_id(\\d+)`}
          component={details} />
      </div>
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
