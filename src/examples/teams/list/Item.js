/*
__Seed builder__v1.0
*/

import React from 'react';

import cx from 'classnames';
import styles from 'resources/css/examples/teams/list/Item.module.css';

function TeamItem(props)
{
  const team = props.team;
  return (
    <div className={styles.module}>
      <div className={styles.title}>{team.id}</div>
      <div className={styles.subtitle}>{JSON.stringify(team)}</div>
    </div>
  );
}

export default TeamItem;
