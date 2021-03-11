import React from "react";
import View from "seed/examples/views/scores/Scores.js";

function Scores(props) {
  const { url } = props.match;
  return <View url={url} />;
}

export default Scores;