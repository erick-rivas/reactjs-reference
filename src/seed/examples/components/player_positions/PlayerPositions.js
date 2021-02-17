import React from "react";
import Render from "seed/examples/renders/player_positions/PlayerPositions.js";

function PlayerPositions(props) {
  const { path, url } = props.match;
  return <Render
    path={path}
    url={url}
  />;
}

export default PlayerPositions;