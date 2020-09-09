import React from "react";
import cx from "classnames";
import { Route } from "react-router-dom";
import UserDetails from "seed/examples/users/Details";
import UserList from "seed/examples/users/List";
import UserListOptions from "seed/examples/users/options/ListOptions";
import UserDetailsOptions from "seed/examples/users/options/DetailsOptions";
import UserForm from "seed/examples/users/Form";
import Modal from "seed/components/helpers/Modal";
import styles from "resources/css/seed/examples/users/Users.module.css";

function Users(props)
{
  const { path, url } = props.match;

  const List = (props) =>
    <div className={styles.list}>
      <div className={styles.options}>
        <UserListOptions {...props}/>
      </div>
      <div className={styles.content}>
        <UserList {...props} />
      </div>
    </div>;

  const Details = (props) =>
    <div className={styles.details}>
      <div className={styles.card}>
        <div className={styles.options}>
          <UserDetailsOptions {...props} />
        </div>
        <div className={styles.content}>
          <UserDetails {...props} />
        </div>
      </div>
    </div>;

  const Form = (props) =>
    <Modal {...props}>
      <UserForm {...props} />
    </Modal>;

  return (
    <div className={styles.module}>
      <div className={styles.container}>
        <Route
          path={`${path}`}
          component={List} />
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

export default Users;
