import React from "react";
import { NavLink } from "react-router-dom";
import View from "seed/examples/views/nav/Sidenav";

function Sidenav(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default Sidenav;