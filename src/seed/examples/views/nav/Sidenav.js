import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import css from "resources/css/seed/examples/nav/Sidenav.module.css";

const Sidenav = (props) =>
  <div class={css.module}>
    <header class={css.header}>
      Seed Builder
      <div class={css.subtitle}>Panel</div>
    </header>
    <nav class={css.nav}>
      <ul>
        <li>
          <NavLink
            to="/examples/matches"
            className={css.item}
            activeClassName={cx(css.item,css.active)}>
            Matches
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples/players"
            className={css.item}
            activeClassName={cx(css.item,css.active)}>
            Players
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples/player_positions"
            className={css.item}
            activeClassName={cx(css.item,css.active)}>
            Player positions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples/scores"
            className={css.item}
            activeClassName={cx(css.item,css.active)}>
            Scores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples/teams"
            className={css.item}
            activeClassName={cx(css.item,css.active)}>
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples/users"
            className={css.item}
            activeClassName={cx(css.item,css.active)}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/examples/logout"
            className={cx(css.item)}
            activeClassName={css.active}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>

export default Sidenav;