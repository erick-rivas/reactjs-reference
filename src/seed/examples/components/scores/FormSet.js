import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/scores/Form";

function ScoreFormSet(props) {
  const { url } = props.match;
  const { score_id } = props.match.params;

  const qScore = useDetail(queries.SCORE, score_id);
  const qPlayers = useQuery(`{ players { } }`);
  const qMatches = useQuery(`{ matches { } }`);
  const [callSet, qSet] = useSet(queries.SET_SCORE, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qScore.loading) return <Loading />;

  const { score = {} } = qScore.data;
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = score_id;
    callSet(values);
  };

  return <View
    score={score}
    players={players}
    matches={matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default ScoreFormSet;