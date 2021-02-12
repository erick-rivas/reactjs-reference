import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/matches/Form.js";

const TEAMS  = `
{
  teams { }
}
`

function MatchForm(props) {
  const [error, setError] = useState(null);
  const { url } = props.match;
  const { match_id }  = props.match.params;
  const editMode = match_id != null;

  const saveOptions = {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  };

  const [callSave, qSave] = useSave(queries.SAVE_MATCH, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_MATCH, saveOptions);

  const qMatch = useDetail(queries.MATCH, match_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qMatch.loading) return <Loading />;
  if (editMode && qMatch.error) return "Error";

  const onSubmit = (values) => {
    values.id = match_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { match = {} } = qMatch.data;
  const { teams = [] } = qTeams.data;

  return <View
    teams = {teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default MatchForm;