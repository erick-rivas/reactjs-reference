/*
__Seed builder__v1.0
*/

import React from 'react';

import cx from 'classnames';
import styles from 'resources/css/examples/players/list/Item.module.css';

function PlayerItem(props)
{
  const player = props.player;
  return (
    <div className={styles.module}>
      <div className={styles.title}>{player.id}</div>
      <div className={styles.subtitle}>{JSON.stringify(player)}</div>
    </div>
  );
}

export default PlayerItem;
