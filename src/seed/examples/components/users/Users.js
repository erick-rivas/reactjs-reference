import React from "react";
import Render from "seed/examples/renders/users/Users.js";

function Users(props) {
  const { path, url } = props.match;
  return <Render
    path={path}
    url={url}
  />;
}

export default Users;