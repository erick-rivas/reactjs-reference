import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/player_positions/Form.js";

function PlayerPositionFormSave(props) {
  const { url } = props.match;
  const [callSave, qSave] = useSave(queries.SAVE_PLAYER_POSITION, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });
  const error = qSave.error ? "An error has occurred" : null

  const onSubmit = (values) =>
    callSave(values);

  return <View
    error={error}
    onSubmit={onSubmit}
  />;
}

export default PlayerPositionFormSave;