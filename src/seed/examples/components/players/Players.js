import React from "react";
import Render from "seed/examples/renders/players/Players.js";

function Players(props) {
  const { path, url } = props.match;
  return <Render
    path={path}
    url={url}
  />;
}

export default Players;