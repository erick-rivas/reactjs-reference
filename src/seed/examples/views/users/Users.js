import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import UserDetails from "seed/examples/components/users/Details";
import UserList from "seed/examples/components/users/List";
import UserListOptions from "seed/examples/components/users/options/ListOptions";
import UserDetailsOptions from "seed/examples/components/users/options/DetailsOptions";
import UserForm from "seed/examples/components/users/Form";
import Modal from "seed/components/helpers/Modal";
import css from "resources/css/seed/examples/users/Users.module.css";

const Users = (props) =>
  <div class={css.module}>
    <div class={css.container}>
      <Route
        path={`${props.path}`}
        component={List} />
      <Route
        path={`${props.path}/:user_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${props.path}/:any/new`,`${props.path}/new`,
        `${props.path}/:user_id(\\d+)/edit`] }
      component={Form} />
  </div>;

const List = (props) =>
  <div class={css.list}>
    <div class={css.options}>
      <UserListOptions {...props}/>
    </div>
    <div class={css.content}>
      <UserList {...props} />
    </div>
  </div>;

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <div class={css.options}>
        <UserDetailsOptions {...props} />
      </div>
      <div class={css.content}>
        <UserDetails {...props} />
      </div>
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <UserForm {...props} />
  </Modal>;

export default Users;