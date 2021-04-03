import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/players/List";

function PlayerList() {
  const reqPlayers = useQuery(`
  {
    players {
      name
      isActive
      createdAt
      photo { }
      team { }
      position { }
    }
  }`);

  if (reqPlayers.loading) return <Loading />;
  if (reqPlayers.error) return "Error";
  const { players = [] } = reqPlayers.data;
  return <View
    players={players}
  />;
}

PlayerList.propTypes = {}

export default PlayerList;