/*
__Seed builder__v1.0

  Guidelines:
    - Parent component automatically handle data loading and filtering
    - To filter data modify filters with router params or props
    - Modify ALL components if required

  Filters:
    - user_id
    - team_id
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _PlayerList from '_seed/components/players/List';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/List.module.css';

class PlayerList extends _PlayerList
{
  render()
  {
    const { players } = this.props;
    if (players == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const playerList = 
      this.renderPlayerList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            player={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { playerList }
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onItemClick(playerId)
  {
  }
}

export default PlayerList;
