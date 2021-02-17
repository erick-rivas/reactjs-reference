import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/player_positions/Details.js";

function PlayerPositionDetails(props) {
  const { player_position_id } = props.match.params;

  const qPlayerPosition = useDetail(`
  {
    playerPosition {
      name
    }
  }
  `, player_position_id);
  if (qPlayerPosition.loading) return <Loading />;
  if (qPlayerPosition.error) return "Error";
  const { playerPosition = {} } = qPlayerPosition.data;

  return <View
    playerPosition={playerPosition}
  />;
}

export default PlayerPositionDetails;