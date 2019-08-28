/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Item from 'components/templates/players/details/Item';
import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/players/List.module.css';

class PlayerList extends React.Component
{
  render()
  {
    const players =
      Util.filter(this.props.players, {}).sort((i1,i2) => i2.id - i1.id)
    if (players == null) return <Loading />;

    const { url } = this.props.match;

    const playerList = players.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={c.item}
          activeClassName={c.active}>
          <Item 
            key={item.id} 
            id={item.id}
            player={item}/>
      </NavLink>);

    return (
      <div className={c.module}>
        { playerList }
      </div>
    );
  }

  /*
  * Component logic
  */

  componentDidMount()
  {
    this.props.getPlayerList({});
  }
}

export default redux(PlayerList);
