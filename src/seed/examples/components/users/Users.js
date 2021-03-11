import React from "react";
import View from "seed/examples/views/users/Users.js";

function Users(props) {
  const { url } = props.match;
  return <View url={url} />;
}

export default Users;