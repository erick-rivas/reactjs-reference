import React from "react";
import View from "seed/examples/views/teams/Teams.js";

function Teams(props) {
  const { url } = props.match;
  return <View url={url} />;
}

export default Teams;