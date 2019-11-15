import React from "react";
import { useDetail } from "seed/gql";

import Loading from "seed/components/helpers/Loading";

import cx from "classnames";
import styles from "resources/css/examples/users/Details.module.css";

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
`;

function UserDetails(props)
{
  const { user_id }  = props.match.params;

  const qUser = useDetail(USER, user_id);

  if (qUser.loading) return <Loading />;
  if (qUser.error) return "Error";

  const { user = {} } = qUser.data;

  return (
    <div className={styles.module}>
    </div>
  );
}

export default UserDetails;
