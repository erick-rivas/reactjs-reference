import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/players/Form.js";

const TEAMS  = `
{
  teams { }
}
`

const PLAYER_POSITIONS  = `
{
  playerPositions { }
}
`

function PlayerForm(props) {
  const [error, setError] = useState(null);
  const { url } = props.match;
  const { player_id }  = props.match.params;
  const editMode = player_id != null;

  const saveOptions = {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  };

  const [callSave, qSave] = useSave(queries.SAVE_PLAYER, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_PLAYER, saveOptions);

  const qPlayer = useDetail(queries.PLAYER, player_id);
  const qTeams = useQuery(TEAMS);
  const qPlayerPositions = useQuery(PLAYER_POSITIONS);

  if (editMode && qPlayer.loading) return <Loading />;
  if (editMode && qPlayer.error) return "Error";

  const onSubmit = (values) => {
    values.id = player_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { player = {} } = qPlayer.data;
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;

  return <View
    teams = {teams}
    playerPositions = {playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerForm;