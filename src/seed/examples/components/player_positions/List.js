import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/player_positions/List";

function PlayerPositionList() {
  const reqPlayerPositions = useQuery(`
  {
    playerPositions {
      name
      createdAt
    }
  }`);

  if (reqPlayerPositions.loading) return <Loading />;
  if (reqPlayerPositions.error) return "Error";
  const { playerPositions = [] } = reqPlayerPositions.data;
  return <View
    playerPositions={playerPositions}
  />;
}

PlayerPositionList.propTypes = {}

export default PlayerPositionList;