import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/players/List";

function PlayerList(props){
  const qPlayers = useQuery(`
  {
    players {
      name
      isActive
      photo { }
      team { }
      position { }
    }
  }`);

  if (qPlayers.loading) return <Loading />;
  if (qPlayers.error) return "Error";
  const { players = [] } = qPlayers.data;

  return <View
    players={players}
  />;
}

export default PlayerList;