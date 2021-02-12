import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/users/Form.js";

const TEAMS  = `
{
  teams { }
}
`

function UserForm(props) {
  const [error, setError] = useState(null);
  const { url } = props.match;
  const { user_id }  = props.match.params;
  const editMode = user_id != null;

  const saveOptions = {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  };

  const [callSave, qSave] = useSave(queries.SAVE_USER, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_USER, saveOptions);

  const qUser = useDetail(queries.USER, user_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qUser.loading) return <Loading />;
  if (editMode && qUser.error) return "Error";

  const onSubmit = (values) => {
    values.id = user_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { user = {} } = qUser.data;
  const { teams = [] } = qTeams.data;

  return <View
    teams = {teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default UserForm;