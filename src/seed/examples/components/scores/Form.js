import React, { useState } from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/scores/Form.js";

function ScoreForm(props) {
  const { url } = props.match;
  const { score_id } = props.match.params;
  const isEdit = score_id != null;

  const qScore = useDetail(queries.SCORE, score_id);
  const qPlayers = useQuery(`{ players { } }`);
  const qMatches = useQuery(`{ matches { } }`);
  const [error, setError] = useState(null);
  const [callSave, qSave] = useSave(queries.SAVE_SCORE, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });
  const [callSet, qSet] = useSet(queries.SET_SCORE, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });

  if (isEdit && qScore.loading) return <Loading />;
  if (isEdit && qScore.error) return "Error";
  const { score = {} } = qScore.data;
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;

  const onSubmit = (values) => {
    values.id = score_id;
    if (isEdit) callSet(values);
    else callSave(values);
  };

  return <Render
    score={score}
    players={players}
    matches={matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default ScoreForm;