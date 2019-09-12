/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import cls from 'resources/css/seed/templates/teams/options/List.module.css';

class TeamListOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    return (
      <div className={cls.module}>
        <div className={cls.options}>
          <Link to={`${url}/new`} className={cx(cls.btn, cls.create)}>Create</Link>
        </div>
      </div>
    );
  }
}

export default redux(TeamListOptions);

