import React, { useState } from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/player_positions/Form.js";

function PlayerPositionForm(props) {
  const { url } = props.match;
  const { player_position_id } = props.match.params;
  const isEdit = player_position_id != null;

  const qPlayerPosition = useDetail(queries.PLAYER_POSITION, player_position_id);
  const [error, setError] = useState(null);
  const [callSave, qSave] = useSave(queries.SAVE_PLAYER_POSITION, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });
  const [callSet, qSet] = useSet(queries.SET_PLAYER_POSITION, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });

  if (isEdit && qPlayerPosition.loading) return <Loading />;
  if (isEdit && qPlayerPosition.error) return "Error";
  const { playerPosition = {} } = qPlayerPosition.data;

  const onSubmit = (values) => {
    values.id = player_position_id;
    if (isEdit) callSet(values);
    else callSave(values);
  };

  return <Render
    playerPosition={playerPosition}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerPositionForm;