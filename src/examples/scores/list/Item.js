/*
__Seed builder__v1.0
*/

import React from 'react';

import cx from 'classnames';
import styles from 'resources/css/examples/scores/list/Item.module.css';

function ScoreItem(props)
{
  const score = props.score;
  return (
    <div className={styles.module}>
      <div className={styles.title}>{score.id}</div>
      <div className={styles.subtitle}>{JSON.stringify(score)}</div>
    </div>
  );
}

export default ScoreItem;
