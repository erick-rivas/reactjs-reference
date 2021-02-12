import React from "react";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/players/List.js";

const PLAYERS  = `
{
  players {
    name
    isActive
    photo { }
    team { }
    position { }
  }
}
`;

function PlayerList(props)
{
  const { url } = props.match;

  const qPlayers = useQuery(PLAYERS);

  if (qPlayers.loading) return <Loading />;
  if (qPlayers.error) return "Error";

  const { players } = qPlayers.data;

  return <View
    players={players }
  />;
}

export default PlayerList;