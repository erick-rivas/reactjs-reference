import React from "react";
import Render from "seed/examples/renders/players/options/ListOptions.js";

function PlayerListOptions(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default PlayerListOptions;