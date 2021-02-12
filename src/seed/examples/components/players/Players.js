import React from "react";
import { Route } from "react-router-dom";
import PlayerDetails from "seed/examples/components/players/Details";
import PlayerList from "seed/examples/components/players/List";
import PlayerListOptions from "seed/examples/components/players/options/ListOptions";
import PlayerDetailsOptions from "seed/examples/components/players/options/DetailsOptions";
import PlayerForm from "seed/examples/components/players/Form";
import View from "seed/examples/views/players/Players.js";

function Players(props) {
  const { path, url } = props.match;
  return <View
    path={path}
    url={url}
  />;
}

export default Players;