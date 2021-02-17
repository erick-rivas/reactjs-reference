import React from "react";
import Render from "seed/examples/renders/matches/options/ListOptions.js";

function MatchListOptions(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default MatchListOptions;