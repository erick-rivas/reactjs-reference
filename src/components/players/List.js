/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/players/List.link';

import styles from 'resources/css/players/List.module.css';

class PlayerList extends Component
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
}

export default PlayerList;
