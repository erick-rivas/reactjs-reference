/*
__Seed builder__v1.0

  Guidelines:
    - Modify ALL components if required

  Filters:
    - user_id
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _UserList from '_seed/components/users/List';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/List.module.css';

class UserList extends _UserList
{
  render()
  {
    const { users } = this.props;
    if (users == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;


    const userList = 
      this.renderUserList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            title={item.id}
            subtitle={JSON.stringify(item)}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { userList }
    </div>
    );
  }

  constructor(props)
  {
    super(props);
  }

  /* Events */

  onItemClick(userId)
  {
  }
}

export default UserList;
