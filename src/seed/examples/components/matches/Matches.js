import React from "react";
import { Route } from "react-router-dom";
import MatchDetails from "seed/examples/components/matches/Details";
import MatchList from "seed/examples/components/matches/List";
import MatchListOptions from "seed/examples/components/matches/options/ListOptions";
import MatchDetailsOptions from "seed/examples/components/matches/options/DetailsOptions";
import MatchForm from "seed/examples/components/matches/Form";
import View from "seed/examples/views/matches/Matches.js";

function Matches(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Matches;