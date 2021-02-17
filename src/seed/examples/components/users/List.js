import React from "react";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/users/List.js";

function UserList(props){
  const { url } = props.match;

  const qUsers = useQuery(`
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
  `);
  if (qUsers.loading) return <Loading />;
  if (qUsers.error) return "Error";
  const { users } = qUsers.data;

  return <Render
    users={users}
  />;
}

export default UserList;