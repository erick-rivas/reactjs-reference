import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_PLAYER } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/players/Form";

function PlayerFormSave({ onCompleted = () => null, onError = () => null }) {
  const qTeams = useQuery(`{ teams { } }`);
  const qPlayerPositions = useQuery(`{ playerPositions { } }`);
  const [callSave, qSave] = useSave(SAVE_PLAYER, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    teams={teams}
    playerPositions={playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}

PlayerFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PlayerFormSave;