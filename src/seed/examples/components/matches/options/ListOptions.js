import React from "react";
import View from "seed/examples/views/matches/options/ListOptions.js";

function MatchListOptions(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default MatchListOptions;