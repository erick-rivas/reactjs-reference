/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Item from 'components/templates/matches/details/Item';
import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/matches/List.module.css';

class MatchList extends React.Component
{
  render()
  {
    const matches = Util.filter(this.props.matches, {})
    if (matches == null) return <Loading />;

    const { url } = this.props.match;

    const matchList = matches.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={c.item}
          activeClassName={c.active}>
          <Item 
            key={item.id} 
            id={item.id}
            match={item}/>
      </NavLink>);

    return (
      <div className={c.module}>
        { matchList }
      </div>
    );
  }

  componentDidMount()
  {
    this.props.getMatchList({});
  }
}

export default redux(MatchList);
