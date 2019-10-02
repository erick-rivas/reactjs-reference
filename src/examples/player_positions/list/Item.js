/*
__Seed builder__v1.0
*/

import React from 'react';

import cx from 'classnames';
import styles from 'resources/css/examples/player_positions/list/Item.module.css';

function PlayerPositionItem(props)
{
  const playerPosition = props.playerPosition;
  return (
    <div className={styles.module}>
      <div className={styles.title}>{playerPosition.id}</div>
      <div className={styles.subtitle}>{JSON.stringify(playerPosition)}</div>
    </div>
  );
}

export default PlayerPositionItem;
