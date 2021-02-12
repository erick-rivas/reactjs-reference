import React from "react";
import View from "seed/examples/views/teams/options/ListOptions.js";

function TeamListOptions(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default TeamListOptions;