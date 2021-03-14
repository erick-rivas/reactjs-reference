import React from "react";
import cx from "classnames";
import { Router, Route } from "react-router-dom";
import UserDetails from "seed/examples/components/users/Details";
import UserList from "seed/examples/components/users/List";
import UserFormSave from "seed/examples/components/users/FormSave";
import UserFormSet from "seed/examples/components/users/FormSet";
import Modal from "seed/components/Modal";
import css from "resources/css/seed/examples/users/Users.module.css";

const Details = (props) =>
  <div class={css.details}>
    <div class={css.card}>
      <UserDetails {...props} />
    </div>
  </div>;

const FormSave = (props) =>
  <Modal {...props}>
    <UserFormSave {...props} />
  </Modal>;

const FormSet = (props) =>
  <Modal {...props}>
    <UserFormSet {...props} />
  </Modal>;

const Users = (props) =>
  <Router basename="/users">
    <div class={css.module}>
      <div class={css.container}>
        <div class={css.list}>
          <UserList />
        </div>
        <Route
          path={`/:user_id(\\d+)`}
          component={Details} />
      </div>
      <Route
        path={[`/:any/new`,`/new`,]}
        component={FormSave} />
      <Route
        path={`/:user_id(\\d+)/edit`}
        component={FormSet} />
    </div>
  </Router>;

export default Users;