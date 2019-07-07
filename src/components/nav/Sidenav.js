import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Component from 'components/nav/Sidenav.link'

import styles from 'resources/css/nav/Sidenav.module.css';

class Sidenav extends Component
{
  render()
  {
    const { url } = this.props.match;
    return (
      <div className={styles.module}>
        <header className={styles.header}>
          Seed builder
          <div className={styles.subtitle}>Panel</div>
        </header>
        <nav className={styles.nav}>
          <ul>
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
                to={`${url}/matches`}
                className={cx(styles.matchItem, styles.item)}
                activeClassName={styles.active}>
                Matches
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
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidenav;
