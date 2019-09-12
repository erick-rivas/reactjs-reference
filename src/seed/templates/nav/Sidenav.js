/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import cls from 'resources/css/seed/templates/nav/Sidenav.module.css';

class Sidenav extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    return (
      <div className={cls.module}>
        <header className={cls.header}>
          Seed builder
          <div className={cls.subtitle}>Panel</div>
        </header>
        <nav className={cls.nav}>
          <ul>
            <li>
              <NavLink
                to={`${url}/matches`}
                className={cx(cls.matchItem, cls.item)}
                activeClassName={cls.active}>
                Matches
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/players`}
                className={cx(cls.playerItem, cls.item)}
                activeClassName={cls.active}>
                Players
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/player_types`}
                className={cx(cls.playerTypeItem, cls.item)}
                activeClassName={cls.active}>
                Player types
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/scores`}
                className={cx(cls.scoreItem, cls.item)}
                activeClassName={cls.active}>
                Scores
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/teams`}
                className={cx(cls.teamItem, cls.item)}
                activeClassName={cls.active}>
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/users`}
                className={cx(cls.userItem, cls.item)}
                activeClassName={cls.active}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/templates/logout`}
                className={cx(cls.item)}
                activeClassName={cls.active}>
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
