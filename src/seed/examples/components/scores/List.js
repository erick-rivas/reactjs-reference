import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/scores/List";

function ScoreList() {
  const reqScores = useQuery(`
  {
    scores {
      min
      createdAt
      player { }
      match { }
    }
  }`);

  if (reqScores.loading) return <Loading />;
  if (reqScores.error) return "Error";
  const { scores = [] } = reqScores.data;
  return <View
    scores={scores}
  />;
}

ScoreList.propTypes = {}

export default ScoreList;