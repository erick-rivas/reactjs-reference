/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import c from 'resources/css/templates/matches/options/List.module.css';

class MatchListOptions extends React.Component
{
  render()
  {
    const { url } = this.props.match;
    return (
      <div className={c.module}>
        <div className={c.options}>
          <Link to={`${url}/new`} className={cx(c.btn, c.create)}>Create</Link>
        </div>
      </div>
    );
  }
}

export default redux(MatchListOptions);

