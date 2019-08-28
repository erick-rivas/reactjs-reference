/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';
import Item from 'components/templates/players/details/Item';

import styles from 'resources/css/templates/players/List.module.css';

class PlayerList extends React.Component
{
  render()
  {
    const players = Util.filter(this.props.players, {});
    if (players == null) return <Loading />;

    const { url } = this.props.match;

    const playerList = players.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}>
          <Item 
            key={item.id} 
            id={item.id}
            player={item}/>
      </NavLink>);

    return (
      <div className={styles.module}>
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
