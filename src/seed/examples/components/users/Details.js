import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/users/Details.js";

function UserDetails(props) {
  const { user_id } = props.match.params;

  const qUser = useDetail(`
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
  `, user_id);
  if (qUser.loading) return <Loading />;
  if (qUser.error) return "Error";
  const { user = {} } = qUser.data;

  return <Render
    user={user}
  />;
}

export default UserDetails;