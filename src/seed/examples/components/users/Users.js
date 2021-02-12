import React from "react";
import { Route } from "react-router-dom";
import UserDetails from "seed/examples/components/users/Details";
import UserList from "seed/examples/components/users/List";
import UserListOptions from "seed/examples/components/users/options/ListOptions";
import UserDetailsOptions from "seed/examples/components/users/options/DetailsOptions";
import UserForm from "seed/examples/components/users/Form";
import View from "seed/examples/views/users/Users.js";

function Users(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Users;