import React, { useState } from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/players/Form.js";

function PlayerForm(props) {
  const { url } = props.match;
  const { player_id } = props.match.params;
  const isEdit = player_id != null;

  const qPlayer = useDetail(queries.PLAYER, player_id);
  const qTeams = useQuery(`{ teams { } }`);
  const qPlayerPositions = useQuery(`{ playerPositions { } }`);
  const [error, setError] = useState(null);
  const [callSave, qSave] = useSave(queries.SAVE_PLAYER, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });
  const [callSet, qSet] = useSet(queries.SET_PLAYER, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });

  if (isEdit && qPlayer.loading) return <Loading />;
  if (isEdit && qPlayer.error) return "Error";
  const { player = {} } = qPlayer.data;
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;

  const onSubmit = (values) => {
    values.id = player_id;
    if (isEdit) callSet(values);
    else callSave(values);
  };

  return <Render
    player={player}
    teams={teams}
    playerPositions={playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerForm;