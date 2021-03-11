import React from "react";
import View from "seed/examples/views/player_positions/PlayerPositions.js";

function PlayerPositions(props) {
  const { url } = props.match;
  return <View url={url} />;
}

export default PlayerPositions;