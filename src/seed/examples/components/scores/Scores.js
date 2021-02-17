import React from "react";
import View from "seed/examples/views/scores/Scores.js";

function Scores(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Scores;