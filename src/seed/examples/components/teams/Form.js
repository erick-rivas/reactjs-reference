import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/teams/Form.js";

const TEAMS  = `
{
  teams { }
}
`

function TeamForm(props) {
  const [error, setError] = useState(null);
  const { url } = props.match;
  const { team_id }  = props.match.params;
  const editMode = team_id != null;

  const saveOptions = {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  };

  const [callSave, qSave] = useSave(queries.SAVE_TEAM, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_TEAM, saveOptions);

  const qTeam = useDetail(queries.TEAM, team_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qTeam.loading) return <Loading />;
  if (editMode && qTeam.error) return "Error";

  const onSubmit = (values) => {
    values.id = team_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { team = {} } = qTeam.data;
  const { teams = [] } = qTeams.data;

  return <View
    teams = {teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default TeamForm;