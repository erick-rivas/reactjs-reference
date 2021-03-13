import React from "react";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_USER } from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/users/Details.js";

function UserDetails(props) {
  const { url } = props.match;
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
  }`, user_id);
  
  const [cDelete] = useDelete(DELETE_USER, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qUser.loading) return <Loading />;
  if (qUser.error) return "Error";
  const { user = {} } = qUser.data;

  const onClickDelete = () =>
    cDelete({ id: user_id });

  const onClickBack = () => {
    const backUrl = url.substring(0, url.lastIndexOf("/"));
    props.history.push(backUrl);
  };

  return <View
    user={user}
    onClickDelete={onClickDelete}
    onClickBack={onClickBack}
   />;
}

export default UserDetails;