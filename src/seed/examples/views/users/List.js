import React from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/users/List.module.css";

const UserList = ({ users }) =>
  <div class={css.module}>
    <div class={css.header}>
      <Link to={`/new`}
        class={cx(css.btn, css.create)}>Create</Link>
    </div>
    <div class={css.content}>
      {
        users.map(user =>
          <NavLink
            key={user.id}
            to={`/${user.id}`}
            className={css.item}
            activeClassName={css.active}>
              <div class={css.title}>{user.id}</div>
              <div class={css.subtitle}>{JSON.stringify(user)}</div>
          </NavLink>
        )
      }
    </div>
  </div>

export default UserList;