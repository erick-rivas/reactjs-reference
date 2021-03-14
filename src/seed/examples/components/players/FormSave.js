import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/players/Form.js";

function PlayerFormSave(props) {
  const { url } = props.match;
  const qTeams = useQuery(`{ teams { } }`);
  const qPlayerPositions = useQuery(`{ playerPositions { } }`);
  const [callSave, qSave] = useSave(queries.SAVE_PLAYER, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;
  const error = qSave.error ? "An error has occurred" : null

  const onSubmit = (values) =>
    callSave(values);

  return <View
    teams={teams}
    playerPositions={playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerFormSave;