/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _PlayerList from '_seed/components/players/List';
import Options from 'components/players/list/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/players/List.module.css';

class PlayerList extends _PlayerList
{
  render()
  {
    const { players } = this.props;
    if (players == null) return <Loading />;

    const { Item } = this.props;
    const { showOptions = true } = this.props;
    const { url } = this.props.match;

    const options = showOptions ? 
      <div className={styles.options}>
        <Options match={this.props.match} />
      </div>: null;

    // Important customize
    const playerList = this.renderPlayerList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            title={item.id}
            subtitle={JSON.stringify(item)}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { options }
      <div className={styles.list}>
        { playerList }
      </div>
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
