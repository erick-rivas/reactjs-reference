import React from "react";
import Render from "seed/examples/renders/scores/Scores.js";

function Scores(props) {
  const { path, url } = props.match;
  return <Render
    path={path}
    url={url}
  />;
}

export default Scores;