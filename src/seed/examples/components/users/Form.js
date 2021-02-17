import React, { useState } from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/users/Form.js";

function UserForm(props) {
  const { url } = props.match;
  const { user_id } = props.match.params;
  const isEdit = user_id != null;

  const qUser = useDetail(queries.USER, user_id);
  const qTeams = useQuery(`{ teams { } }`);
  const [error, setError] = useState(null);
  const [callSave, qSave] = useSave(queries.SAVE_USER, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });
  const [callSet, qSet] = useSet(queries.SET_USER, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });

  if (isEdit && qUser.loading) return <Loading />;
  if (isEdit && qUser.error) return "Error";
  const { user = {} } = qUser.data;
  const { teams = [] } = qTeams.data;

  const onSubmit = (values) => {
    values.id = user_id;
    if (isEdit) callSet(values);
    else callSave(values);
  };

  return <Render
    user={user}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default UserForm;