import React from "react";
import { NavLink } from "react-router-dom";
import Render from "seed/examples/renders/nav/Sidenav";

function Sidenav(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default Sidenav;