import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/scores/Details.js";

const SCORE  = `
{
  score {
    min
    player { }
    match { }
  }
}
`

function ScoreDetails(props) {
  const { score_id }  = props.match.params;
  const qScore = useDetail(SCORE, score_id);

  if (qScore.loading) return <Loading />;
  if (qScore.error) return "Error";

  const { score = {} } = qScore.data;

  return <View
    score={score}
  />;
}

export default ScoreDetails;