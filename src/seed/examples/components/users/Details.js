import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/users/Details.js";

const USER  = `
{
  user {
    username
    firstName
    lastName
    email
    isActive
    teams { }
  }
}
`

function UserDetails(props) {
  const { user_id }  = props.match.params;
  const qUser = useDetail(USER, user_id);

  if (qUser.loading) return <Loading />;
  if (qUser.error) return "Error";

  const { user = {} } = qUser.data;

  return <View
    user={user}
  />;
}

export default UserDetails;