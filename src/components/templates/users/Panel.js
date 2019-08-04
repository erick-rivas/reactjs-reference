/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import UserDetails from 'components/templates/users/Details';
import UserTable from 'components/templates/users/Table';
import UserList from 'components/templates/users/List';
import UserListOptions from 'components/templates/users/options/List';
import UserDetailsOptions from 'components/templates/users/options/Details';
import UserItem from 'components/templates/users/Item';
import UserForm from 'components/templates/users/Form';

import Modal from 'seed/components/helpers/Modal';

import styles from 'resources/css/templates/users/Panel.module.css';

class UserPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List =
      <div className={styles.list}>
        <div className={styles.options}>
          <UserListOptions {...this.props}/>
        </div>
        <div className={styles.content}>
          <UserList {...this.props}
            Item={UserItem} />
        </div>
      </div>

    const Table =
      <div className={styles.table}>
        <div className={styles.options}>
          <UserListOptions {...this.props}/>
        </div>
        <div className={styles.content}>
          <UserTable  {...this.props} />
        </div>
      </div>

    const Details = props =>
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

    const Form = props =>
      <Modal
        {...this.props}>
        <UserForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {Table}
          <Route
            path={`${path}/:user_id(\\d+)`}
            component={Details} />
        </div>
        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:user_id(\\d+)/edit`] }
          component={Form} />
      </div>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default UserPanel;
