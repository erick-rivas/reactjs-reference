import React from "react";
import cx from "classnames";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import styles from "resources/css/examples/users/List.module.css";

const USERS  = `
{
  users {
    username
    firstName
    lastName
    email
    isActive
    teams { }
  }
}
`;

function UserList(props)
{
  const { url } = props.match;

  const qUsers = useQuery(USERS);

  if (qUsers.loading) return <Loading />;
  if (qUsers.error) return "Error";

  const { users } = qUsers.data;

  const userList = users.map(item =>
    <NavLink
      key={item.id}
      to={`${url}/${item.id}`}
      className={styles.item}
      activeClassName={styles.active}>
        <div className={styles.title}>{item.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(item)}</div>
    </NavLink>);

  return (
    <div className={styles.module}>
      { userList }
    </div>
  );
}

export default UserList;
