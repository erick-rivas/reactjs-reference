import React from "react";
import View from "seed/examples/views/users/options/ListOptions.js";

function UserListOptions(props) {
  const { url } = props.match;
  return <View
    url={url}
  />;
}

export default UserListOptions;