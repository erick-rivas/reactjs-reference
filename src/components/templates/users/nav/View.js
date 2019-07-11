/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import UserDetails from 'containers/templates/users/Details';
import UserList from 'containers/templates/users/List';
import UserItem from 'components/templates/users/Item';

import Component from 'components/templates/users/nav/View.link'

import styles from 'resources/css/templates/users/nav/View.module.css';

class UserView extends Component
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
}

export default UserView;

