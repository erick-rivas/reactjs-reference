import React from "react";
import Render from "seed/examples/renders/teams/Teams.js";

function Teams(props) {
  const { path, url } = props.match;
  return <Render
    path={path}
    url={url}
  />;
}

export default Teams;