import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/scores/List.js";

function ScoreList(props){
  const qScores = useQuery(`
  {
    scores {
      min
      player { }
      match { }
    }
  }`);

  if (qScores.loading) return <Loading />;
  if (qScores.error) return "Error";
  const { scores = [] } = qScores.data;

  return <View
    scores={scores}
  />;
}

export default ScoreList;