import React from "react";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/scores/List.js";

function ScoreList(props){
  const { url } = props.match;

  const qScores = useQuery(`
  {
    scores {
      min
      player { }
      match { }
    }
  }
  `);
  if (qScores.loading) return <Loading />;
  if (qScores.error) return "Error";
  const { scores } = qScores.data;

  return <Render
    scores={scores}
  />;
}

export default ScoreList;