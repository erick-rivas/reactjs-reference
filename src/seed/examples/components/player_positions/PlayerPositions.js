import React from "react";
import View from "seed/examples/views/player_positions/PlayerPositions.js";

function PlayerPositions(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default PlayerPositions;