import React from "react";
import Render from "seed/examples/renders/matches/Matches.js";

function Matches(props) {
  const { path, url } = props.match;
  return <Render
    path={path}
    url={url}
  />;
}

export default Matches;