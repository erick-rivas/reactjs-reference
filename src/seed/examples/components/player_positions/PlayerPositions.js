import React from "react";
import { Route } from "react-router-dom";
import PlayerPositionDetails from "seed/examples/components/player_positions/Details";
import PlayerPositionList from "seed/examples/components/player_positions/List";
import PlayerPositionListOptions from "seed/examples/components/player_positions/options/ListOptions";
import PlayerPositionDetailsOptions from "seed/examples/components/player_positions/options/DetailsOptions";
import PlayerPositionForm from "seed/examples/components/player_positions/Form";
import View from "seed/examples/views/player_positions/PlayerPositions.js";

function PlayerPositions(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default PlayerPositions;