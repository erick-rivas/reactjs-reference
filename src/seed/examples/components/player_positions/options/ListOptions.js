import React from "react";
import Render from "seed/examples/renders/player_positions/options/ListOptions.js";

function PlayerPositionListOptions(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default PlayerPositionListOptions;