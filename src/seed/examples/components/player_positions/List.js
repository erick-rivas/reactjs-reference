import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/player_positions/List.js";

function PlayerPositionList(props){
  const qPlayerPositions = useQuery(`
  {
    playerPositions {
      name
    }
  }`);

  if (qPlayerPositions.loading) return <Loading />;
  if (qPlayerPositions.error) return "Error";
  const { playerPositions = [] } = qPlayerPositions.data;

  return <View
    playerPositions={playerPositions}
  />;
}

export default PlayerPositionList;