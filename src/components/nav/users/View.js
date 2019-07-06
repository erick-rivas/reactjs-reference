/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import UserDetails from 'containers/users/Details';
import UserList from 'containers/users/List';
import UserItem from 'components/users/Item';

import Component from 'components/nav/users/View.link.js'

import styles from 'resources/css/nav/users/View.module.css';

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

