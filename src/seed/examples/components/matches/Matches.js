import React from "react";
import View from "seed/examples/views/matches/Matches.js";

function Matches(props) {
  const { url } = props.match;
  return <View url={url} />;
}

export default Matches;