/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Item from 'seed/templates/users/details/Item';
import Loading from 'seed/components/helpers/Loading';

import cls from 'resources/css/seed/templates/users/List.module.css';

class UserList extends React.Component
{
  render()
  {
    const users = Util.filter(this.props.users, {})
    if (users == null) return <Loading />;

    const { url } = this.props.match;

    const userList = users.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={cls.item}
          activeClassName={cls.active}>
          <Item 
            key={item.id} 
            id={item.id}
            user={item}/>
      </NavLink>);

    return (
      <div className={cls.module}>
        { userList }
      </div>
    );
  }

  componentDidMount()
  {
    this.props.getUserList({});
  }
}

export default redux(UserList);
