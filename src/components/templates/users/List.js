/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import Component from 'components/templates/users/List.link';

import styles from 'resources/css/templates/users/List.module.css';

class UserList extends Component
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
            user={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { userList }
    </div>
    );
  }
}

export default UserList;
