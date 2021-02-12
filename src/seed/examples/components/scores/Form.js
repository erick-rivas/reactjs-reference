import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/scores/Form.js";

const PLAYERS  = `
{
  players { }
}
`

const MATCHES  = `
{
  matches { }
}
`

function ScoreForm(props) {
  const [error, setError] = useState(null);
  const { url } = props.match;
  const { score_id }  = props.match.params;
  const editMode = score_id != null;

  const saveOptions = {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  };

  const [callSave, qSave] = useSave(queries.SAVE_SCORE, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_SCORE, saveOptions);

  const qScore = useDetail(queries.SCORE, score_id);
  const qPlayers = useQuery(PLAYERS);
  const qMatches = useQuery(MATCHES);

  if (editMode && qScore.loading) return <Loading />;
  if (editMode && qScore.error) return "Error";

  const onSubmit = (values) => {
    values.id = score_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { score = {} } = qScore.data;
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;

  return <View
    players = {players}
    matches = {matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default ScoreForm;