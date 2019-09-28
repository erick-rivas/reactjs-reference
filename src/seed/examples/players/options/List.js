/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from 'resources/css/seed/examples/players/options/List.module.css';

function PlayerListOptions(props)
{
  const { url } = props.match;
  return (
    <div className={styles.module}>
      <div className={styles.options}>
        <Link to={`${url}/new`} className={cx(styles.btn, styles.create)}>Create</Link>
      </div>
    </div>
  );
}

export default PlayerListOptions;

