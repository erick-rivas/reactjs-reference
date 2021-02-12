import React from "react";
import View from "seed/examples/views/Examples"

function Examples(props) {
  const { path } = props.match;
  return <View
    path={path}
  />;
}

export default Examples;