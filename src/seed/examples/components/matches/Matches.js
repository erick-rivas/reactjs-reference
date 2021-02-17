import React from "react";
import View from "seed/examples/views/matches/Matches.js";

function Matches(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Matches;