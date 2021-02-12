import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/player_positions/Form.js";

function PlayerPositionForm(props) {
  const [error, setError] = useState(null);
  const { url } = props.match;
  const { player_position_id }  = props.match.params;
  const editMode = player_position_id != null;

  const saveOptions = {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  };

  const [callSave, qSave] = useSave(queries.SAVE_PLAYER_POSITION, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_PLAYER_POSITION, saveOptions);

  const qPlayerPosition = useDetail(queries.PLAYER_POSITION, player_position_id);

  if (editMode && qPlayerPosition.loading) return <Loading />;
  if (editMode && qPlayerPosition.error) return "Error";

  const onSubmit = (values) => {
    values.id = player_position_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { playerPosition = {} } = qPlayerPosition.data;

  return <View
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerPositionForm;