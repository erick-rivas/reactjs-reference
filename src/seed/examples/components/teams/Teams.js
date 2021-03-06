import React from "react";
import View from "seed/examples/views/teams/Teams.js";

function Teams(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Teams;