import React from "react";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/player_positions/List.js";

const PLAYER_POSITIONS  = `
{
  playerPositions {
    name
  }
}
`;

function PlayerPositionList(props)
{
  const { url } = props.match;

  const qPlayerPositions = useQuery(PLAYER_POSITIONS);

  if (qPlayerPositions.loading) return <Loading />;
  if (qPlayerPositions.error) return "Error";

  const { playerPositions } = qPlayerPositions.data;

  return <View
    playerPositions={playerPositions }
  />;
}

export default PlayerPositionList;