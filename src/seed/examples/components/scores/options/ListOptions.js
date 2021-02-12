import React from "react";
import View from "seed/examples/views/scores/options/ListOptions.js";

function ScoreListOptions(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default ScoreListOptions;