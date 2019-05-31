/*
__Seed builder__v1.0
*/

import * as React from 'react';

import _UserList from '__seed__/components/users/List'
import Item from 'components/users/Item'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/List.module.css'

class UserList extends _UserList
{
  render()
  {
    const { users } = this.props;

    if (users == null) return <Loading />
    const userItems = users.map(item =>
        <div className={styles.item}>
          <Item key={item.id} user={item} />
        </div>
    );

    return (
      <div className={styles.module}>
      { userItems }
      </div>
    );
  }

  getFilters() 
  {
    return {}
  }
}

export default UserList;
