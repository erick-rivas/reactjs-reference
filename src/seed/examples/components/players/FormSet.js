import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { PLAYER, SET_PLAYER } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/players/Form";

function PlayerFormSet({ playerId, onCompleted = () => null, onError = () => null  }) {

  const qPlayer = useDetail(PLAYER, playerId);
  const qTeams = useQuery(`{ teams { } }`);
  const qPlayerPositions = useQuery(`{ playerPositions { } }`);
  const [callSet, qSet] = useSet(SET_PLAYER, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (qPlayer.loading) return <Loading />;

  const { player = {} } = qPlayer.data;
  const { teams = [] } = qTeams.data;
  const { playerPositions = [] } = qPlayerPositions.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = playerId;
    callSet(values);
  };

  return <View
    player={player}
    teams={teams}
    playerPositions={playerPositions}
    error={error}
    onSubmit={onSubmit}
  />;
}

PlayerFormSet.propTypes = {
  playerId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PlayerFormSet;