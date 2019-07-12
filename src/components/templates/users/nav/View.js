/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Switch, Route } from 'react-router-dom';

import UserDetails from 'components/templates/users/Details';
import UserList from 'components/templates/users/List';
import UserItem from 'components/templates/users/Item';

import styles from 'resources/css/templates/users/nav/View.module.css';

class UserView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <UserList 
        Item={UserItem}/>
      </div>

    const details = props =>
      <div className={styles.details}>
        <UserDetails />
      </div>
   
    return (
      <div className={styles.module}>
        
        <div className={styles.container}>
          <Switch>
           <Route
            path={`${path}/:user_id(\\d+)`}
            component={details} />
            <Route
              path={`${path}`}
              component={list} />
          </Switch>
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

export default redux(UserView);

