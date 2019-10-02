/*
__Seed builder__v1.0
*/

import React from 'react';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Item from 'examples/users/list/Item';
import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/users/List.module.css';

const USERS  = `
{
  users {
    id
    username
    firstName
    lastName
    email
    isActive
    teams {
      id
    }
  }
}
`

function UserList(props)
{
  const { url } = props.match;

  const qUsers = useQuery(USERS);

  if (qUsers.loading) return <Loading />
  if (qUsers.error) return "Error"

  const { users } = qUsers.data

  const userList = users.map(item =>
    <NavLink
      key={item.id}
      to={`${url}/${item.id}`}
      className={styles.item}
      activeClassName={styles.active}>
      <Item
        key={item.id}
        id={item.id}
        user={item}/>
    </NavLink>);

  return (
    <div className={styles.module}>
      { userList }
    </div>
  );
}

export default UserList;
