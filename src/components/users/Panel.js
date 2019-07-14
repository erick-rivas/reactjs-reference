/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { Route } from 'react-router-dom';

import UserDetails from 'components/users/Details';
import UserList from 'components/users/List';
import UserListOptions from 'components/users/options/List';
import UserDetailsOptions from 'components/users/options/Details';
import UserItem from 'components/users/Item';
import UserForm from 'components/users/Form';

import Modal from 'components/helpers/Modal';

import styles from 'resources/css/users/Panel.module.css';

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

    const form = props =>
      <Modal
        match={this.props.match}
        onClose={this.onModalClose}>
        <UserForm />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>   
          <Route
            path={[`${path}/:user_id(\\d+)`, `${path}`]}
            component={list} />
          <Route
            path={`${path}/:user_id(\\d+)`}
            component={details} />
        </div>

        <Route
          path={
            [`${path}/:any/new`,`${path}/new`,
            `${path}/:user_id(\\d+)/edit`] }
          component={form} />

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
    this.onModalClose = this.onModalClose.bind(this);
  }

  /* Events */

  onModalClose()
  {
    this.props.history.goBack()
  }

}

export default UserPanel;
