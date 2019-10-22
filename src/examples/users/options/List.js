/*
__Seed builder__v0.1.8
*/

import React from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import styles from 'resources/css/examples/users/options/List.module.css';

function UserListOptions(props)
{
  const { url } = props.match;
  return (
    <div className={styles.module}>
      <div className={styles.options}>
        <Link to={`${url}/new`}
          className={cx(styles.btn, styles.create)}>Create</Link>
      </div>
    </div>
  );
}

export default UserListOptions;
