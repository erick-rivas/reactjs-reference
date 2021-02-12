import React from "react";
import View from "seed/examples/views/players/options/ListOptions.js";

function PlayerListOptions(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default PlayerListOptions;