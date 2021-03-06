import React from "react";
import View from "seed/examples/views/users/Users.js";

function Users(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Users;