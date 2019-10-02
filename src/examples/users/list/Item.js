/*
__Seed builder__v1.0
*/

import React from 'react';

import cx from 'classnames';
import styles from 'resources/css/examples/users/list/Item.module.css';

function UserItem(props)
{
  const user = props.user;
  return (
    <div className={styles.module}>
      <div className={styles.title}>{user.id}</div>
      <div className={styles.subtitle}>{JSON.stringify(user)}</div>
    </div>
  );
}

export default UserItem;
