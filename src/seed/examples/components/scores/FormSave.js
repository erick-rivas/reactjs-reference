import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/scores/Form.js";

function ScoreFormSave(props) {
  const { url } = props.match;
  const qPlayers = useQuery(`{ players { } }`);
  const qMatches = useQuery(`{ matches { } }`);
  const [callSave, qSave] = useSave(queries.SAVE_SCORE, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;
  const error = qSave.error ? "An error has occurred" : null

  const onSubmit = (values) =>
    callSave(values);

  return <View
    players={players}
    matches={matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default ScoreFormSave;