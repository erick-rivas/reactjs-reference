/*
__Seed builder__v1.0
*/

import React from 'react';

import cx from 'classnames';
import styles from 'resources/css/examples/matches/list/Item.module.css';

function MatchItem(props)
{
  const match = props.match;
  return (
    <div className={styles.module}>
      <div className={styles.title}>{match.id}</div>
      <div className={styles.subtitle}>{JSON.stringify(match)}</div>
    </div>
  );
}

export default MatchItem;
