import React from "react";
import View from "seed/examples/views/players/Players.js";

function Players(props) {
  const { url } = props.match;
  return <View url={url} />;
}

export default Players;