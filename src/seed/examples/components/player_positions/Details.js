import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PLAYER_POSITION } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/player_positions/Details";

function PlayerPositionDetails({ playerPositionId, onCompleted = () => null, onError = () => null }) {

  const reqPlayerPosition = useDetail(`
  {
    playerPosition {
      name
      createdAt
    }
  }`, playerPositionId);
  
  const [callDelete] = useDelete(DELETE_PLAYER_POSITION, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (reqPlayerPosition.loading) return <Loading />;
  if (reqPlayerPosition.error) return "Error";
  const { playerPosition = {} } = reqPlayerPosition.data;

  const onClickDelete = () =>
    callDelete({ id: playerPositionId });

  return <View
    playerPosition={playerPosition}
    onClickDelete={onClickDelete}
   />;
}

PlayerPositionDetails.propTypes = {
  playerPositionId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PlayerPositionDetails;