/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import UserDetails from 'seed/templates/users/details/Details';
import UserList from 'seed/templates/users/List';
import UserListOptions from 'seed/templates/users/options/List';
import UserDetailsOptions from 'seed/templates/users/options/Details';
import UserForm from 'seed/templates/users/Form';

import Modal from 'seed/components/helpers/Modal';

import cls from 'resources/css/seed/templates/users/Panel.module.css';

class UserPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={cls.list}>
        <div className={cls.options}>
          <UserListOptions {...props}/>
        </div>
        <div className={cls.content}>
          <UserList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={cls.details}>
        <div className={cls.card}>
          <div className={cls.options}>
            <UserDetailsOptions {...props} />
          </div>
          <div className={cls.content}>
            <UserDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <UserForm />
      </Modal>

    return (
      <div className={cls.module}>
        <div className={cls.container}>
          <List />
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
}

export default UserPanel;
