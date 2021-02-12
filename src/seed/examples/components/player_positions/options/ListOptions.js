import React from "react";
import View from "seed/examples/views/player_positions/options/ListOptions.js";

function PlayerPositionListOptions(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default PlayerPositionListOptions;