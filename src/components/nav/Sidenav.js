/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { NavLink } from 'react-router-dom';

import styles from 'resources/css/nav/Sidenav.module.css';

class Sidenav extends React.Component
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
                to={`/logout`}
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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default redux(Sidenav);
