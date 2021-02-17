import React from "react";
import Render from "seed/examples/renders/scores/options/ListOptions.js";

function ScoreListOptions(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default ScoreListOptions;