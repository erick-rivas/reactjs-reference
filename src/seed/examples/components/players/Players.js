import React from "react";
import View from "seed/examples/views/players/Players.js";

function Players(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Players;