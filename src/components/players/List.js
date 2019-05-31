/*
__Seed builder__v1.0
*/

import * as React from 'react';

import _PlayerList from '__seed__/components/players/List'
import Item from 'components/players/Item'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/List.module.css'

class PlayerList extends _PlayerList
{
  render()
  {
    const { players } = this.props;

    if (players == null) return <Loading />
    const playerItems = players.map(item =>
        <div className={styles.item}>
          <Item key={item.id} player={item} />
        </div>
    );

    return (
      <div className={styles.module}>
      { playerItems }
      </div>
    );
  }

  getFilters() 
  {
    return {}
  }
}

export default PlayerList;
