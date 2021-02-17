import React from "react";
import Render from "seed/examples/renders/users/options/ListOptions.js";

function UserListOptions(props) {
  const { url } = props.match;
  return <Render
    url={url}
  />;
}

export default UserListOptions;