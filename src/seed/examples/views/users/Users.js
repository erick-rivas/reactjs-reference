import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import UserDetails from "seed/examples/components/users/Details";
import UserList from "seed/examples/components/users/List";
import UserForm from "seed/examples/components/users/Form";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/users/Users.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <UserDetails {...props} />
    </div>
  </div>;

const Form = (props) =>
  <Modal {...props}>
    <UserForm {...props} />
  </Modal>;

const Users = ({ url }) =>
  <div class={css.module}>
    <div class={css.container}>
      <div class={css.list}>
        <UserList url={url} />
      </div>
      <Route
        path={`${url}/:user_id(\\d+)`}
        component={Details} />
    </div>
    <Route
      path={
        [`${url}/:any/new`,`${url}/new`, `${url}/:user_id(\\d+)/edit`] }
      component={Form} />
  </div>;

export default Users;