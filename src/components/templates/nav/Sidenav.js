/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import c from 'resources/css/templates/nav/Sidenav.module.css';

class Sidenav extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    return (
      <div className={c.module}>
        <header className={c.header}>
          Seed builder
          <div className={c.subtitle}>Panel</div>
        </header>
        <nav className={c.nav}>
          <ul>
            <li>
              <NavLink
                to={`${url}/matches`}
                className={cx(c.matchItem, c.item)}
                activeClassName={c.active}>
                Matches
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/players`}
                className={cx(c.playerItem, c.item)}
                activeClassName={c.active}>
                Players
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/scores`}
                className={cx(c.scoreItem, c.item)}
                activeClassName={c.active}>
                Scores
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/teams`}
                className={cx(c.teamItem, c.item)}
                activeClassName={c.active}>
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/users`}
                className={cx(c.userItem, c.item)}
                activeClassName={c.active}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/templates/logout`}
                className={cx(c.item)}
                activeClassName={c.active}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default redux(Sidenav);
