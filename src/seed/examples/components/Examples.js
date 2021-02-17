import React from "react";
import Render from "seed/examples/renders/Examples"

function Examples(props) {
  const { path } = props.match;
  return <Render
    path={path}
  />;
}

export default Examples;