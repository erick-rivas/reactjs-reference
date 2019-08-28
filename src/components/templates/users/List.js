/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as Util from 'seed/util';
import redux from 'seed/redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Item from 'components/templates/users/details/Item';
import Loading from 'seed/components/helpers/Loading';

import c from 'resources/css/templates/users/List.module.css';

class UserList extends React.Component
{
  render()
  {
    const users =
      Util.filter(this.props.users, {}).sort((i1,i2) => i2.id - i1.id)
    if (users == null) return <Loading />;

    const { url } = this.props.match;

    const userList = users.map(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={c.item}
          activeClassName={c.active}>
          <Item 
            key={item.id} 
            id={item.id}
            user={item}/>
      </NavLink>);

    return (
      <div className={c.module}>
        { userList }
      </div>
    );
  }

  /*
  * Component logic
  */

  componentDidMount()
  {
    this.props.getUserList({});
  }
}

export default redux(UserList);
