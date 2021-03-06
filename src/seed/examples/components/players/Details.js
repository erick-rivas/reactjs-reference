import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/players/Details.js";

function PlayerDetails(props) {
  const { player_id } = props.match.params;

  const qPlayer = useDetail(`
  {
    player {
      name
      isActive
      photo { }
      team { }
      position { }
    }
  }
  `, player_id);
  if (qPlayer.loading) return <Loading />;
  if (qPlayer.error) return "Error";
  const { player = {} } = qPlayer.data;

  return <View
    player={player}
  />;
}

export default PlayerDetails;