/*
__Seed builder__v1.0
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import _UserList from '_seed/components/users/List';
import Options from 'components/users/list/Options';
import Loading from 'components/helpers/Loading';

import styles from 'util/css/users/List.module.css';

class UserList extends _UserList
{
  render()
  {
    const { users } = this.props;
    if (users == null) return <Loading />;

    const { Item } = this.props;
    const { showOptions = true } = this.props;
    const { url } = this.props.match;

    const options = showOptions ? 
      <div className={styles.options}>
        <Options match={this.props.match} />
      </div>: null;

    // Important customize
    const userList = this.renderUserList(item =>
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
      { options }
      <div className={styles.list}>
        { userList }
      </div>
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
