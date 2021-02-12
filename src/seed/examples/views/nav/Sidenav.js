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
            to={`${props.url}/matches`}
            class={cx(css.matchItem, css.item)}
            activeClassName={css.active}>
            Matches
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${props.url}/players`}
            class={cx(css.playerItem, css.item)}
            activeClassName={css.active}>
            Players
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${props.url}/player_positions`}
            class={cx(css.playerPositionItem, css.item)}
            activeClassName={css.active}>
            Player positions
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${props.url}/scores`}
            class={cx(css.scoreItem, css.item)}
            activeClassName={css.active}>
            Scores
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${props.url}/teams`}
            class={cx(css.teamItem, css.item)}
            activeClassName={css.active}>
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${props.url}/users`}
            class={cx(css.userItem, css.item)}
            activeClassName={css.active}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/seed/examples/logout"}
            class={cx(css.item)}
            activeClassName={css.active}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>

export default Sidenav;