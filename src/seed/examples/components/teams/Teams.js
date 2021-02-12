import React from "react";
import { Route } from "react-router-dom";
import TeamDetails from "seed/examples/components/teams/Details";
import TeamList from "seed/examples/components/teams/List";
import TeamListOptions from "seed/examples/components/teams/options/ListOptions";
import TeamDetailsOptions from "seed/examples/components/teams/options/DetailsOptions";
import TeamForm from "seed/examples/components/teams/Form";
import View from "seed/examples/views/teams/Teams.js";

function Teams(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Teams;