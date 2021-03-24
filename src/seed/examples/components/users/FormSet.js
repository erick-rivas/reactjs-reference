import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/users/Form";

function UserFormSet(props) {
  const { url } = props.match;
  const { user_id } = props.match.params;

  const qUser = useDetail(queries.USER, user_id);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(queries.SET_USER, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qUser.loading) return <Loading />;

  const { user = {} } = qUser.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = user_id;
    callSet(values);
  };

  return <View
    user={user}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default UserFormSet;