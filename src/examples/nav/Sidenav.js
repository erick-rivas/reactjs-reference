import React from "react";
import { NavLink } from "react-router-dom";

import cx from "classnames";
import styles from "resources/css/examples/nav/Sidenav.module.css";

function Sidenav(props)
{
  const { url } = props.match;
  return (
    <div className={styles.module}>
      <header className={styles.header}>
        Seed Builder
        <div className={styles.subtitle}>Panel</div>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to={`${url}/matches`}
              className={cx(styles.matchItem, styles.item)}
              activeClassName={styles.active}>
              Matches
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/players`}
              className={cx(styles.playerItem, styles.item)}
              activeClassName={styles.active}>
              Players
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/player_positions`}
              className={cx(styles.playerPositionItem, styles.item)}
              activeClassName={styles.active}>
              Player positions
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/scores`}
              className={cx(styles.scoreItem, styles.item)}
              activeClassName={styles.active}>
              Scores
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/teams`}
              className={cx(styles.teamItem, styles.item)}
              activeClassName={styles.active}>
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/users`}
              className={cx(styles.userItem, styles.item)}
              activeClassName={styles.active}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/examples/logout"}
              className={cx(styles.item)}
              activeClassName={styles.active}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;
