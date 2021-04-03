import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PLAYER_POSITION, SET_PLAYER_POSITION } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/player_positions/Form";

function PlayerPositionFormSet({ playerPositionId, onCompleted = () => null, onError = () => null  }) {

  const qPlayerPosition = useDetail(PLAYER_POSITION, playerPositionId);
  const [callSet, qSet] = useSet(SET_PLAYER_POSITION, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (qPlayerPosition.loading) return <Loading />;

  const { playerPosition = {} } = qPlayerPosition.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = playerPositionId;
    callSet(values);
  };

  return <View
    playerPosition={playerPosition}
    error={error}
    onSubmit={onSubmit}
  />;
}

PlayerPositionFormSet.propTypes = {
  playerPositionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
}

export default PlayerPositionFormSet;