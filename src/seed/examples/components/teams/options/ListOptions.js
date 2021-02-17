import React from "react";
import Render from "seed/examples/renders/teams/options/ListOptions.js";

function TeamListOptions(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default TeamListOptions;