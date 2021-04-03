import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/users/List";

function UserList() {
  const reqUsers = useQuery(`
  {
    users {
      username
      firstName
      lastName
      email
      isActive
      createdAt
      teams { }
    }
  }`);

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "Error";
  const { users = [] } = reqUsers.data;
  return <View
    users={users}
  />;
}

UserList.propTypes = {}

export default UserList;