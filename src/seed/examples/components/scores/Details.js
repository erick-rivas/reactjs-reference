import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/scores/Details.js";

function ScoreDetails(props) {
  const { score_id } = props.match.params;

  const qScore = useDetail(`
  {
    score {
      min
      player { }
      match { }
    }
  }
  `, score_id);
  if (qScore.loading) return <Loading />;
  if (qScore.error) return "Error";
  const { score = {} } = qScore.data;

  return <Render
    score={score}
  />;
}

export default ScoreDetails;