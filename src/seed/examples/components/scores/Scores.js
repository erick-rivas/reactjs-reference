import React from "react";
import { Route } from "react-router-dom";
import ScoreDetails from "seed/examples/components/scores/Details";
import ScoreList from "seed/examples/components/scores/List";
import ScoreListOptions from "seed/examples/components/scores/options/ListOptions";
import ScoreDetailsOptions from "seed/examples/components/scores/options/DetailsOptions";
import ScoreForm from "seed/examples/components/scores/Form";
import View from "seed/examples/views/scores/Scores.js";

function Scores(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Scores;