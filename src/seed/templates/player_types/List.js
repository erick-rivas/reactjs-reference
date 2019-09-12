/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Item from 'seed/templates/player_types/details/Item';
import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/player_types/List.module.css';

class PlayerTypeList extends React.Component
{
  render()
  {
    const playerTypes = Util.filter(this.props.playerTypes, {})
    if (playerTypes == null) return <Loading />;

    const { url } = this.props.match;

    const playerTypeList = playerTypes.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={cls.item}
          activeClassName={cls.active}>
          <Item 
            key={item.id} 
            id={item.id}
            playerType={item}/>
      </NavLink>);

    return (
      <div className={cls.module}>
        { playerTypeList }
      </div>
    );
  }

  componentDidMount()
  {
    this.props.getPlayerTypeList({});
  }
}

export default redux(PlayerTypeList);
