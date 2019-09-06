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

import c from 'resources/css/seed/templates/users/Panel.module.css';

class UserPanel extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const List = props =>
      <div className={c.list}>
        <div className={c.options}>
          <UserListOptions {...props}/>
        </div>
        <div className={c.content}>
          <UserList {...props} />
        </div>
      </div>

    const Details = props =>
      <div className={c.details}>
        <div className={c.card}>
          <div className={c.options}>
            <UserDetailsOptions {...props} />
          </div>
          <div className={c.content}>
            <UserDetails {...props} />
          </div>
        </div>
      </div>

    const Form = props =>
      <Modal {...this.props}>
        <UserForm />
      </Modal>

    return (
      <div className={c.module}>
        <div className={c.container}>
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
