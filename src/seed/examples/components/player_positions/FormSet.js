import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/player_positions/Form";

function PlayerPositionFormSet(props) {
  const { url } = props.match;
  const { player_position_id } = props.match.params;

  const qPlayerPosition = useDetail(queries.PLAYER_POSITION, player_position_id);
  const [callSet, qSet] = useSet(queries.SET_PLAYER_POSITION, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qPlayerPosition.loading) return <Loading />;

  const { playerPosition = {} } = qPlayerPosition.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = player_position_id;
    callSet(values);
  };

  return <View
    playerPosition={playerPosition}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerPositionFormSet;