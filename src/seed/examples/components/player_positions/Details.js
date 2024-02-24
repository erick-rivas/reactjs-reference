/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PLAYER_POSITION } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/player_positions/Details.view";

function PlayerPositionDetails({ playerPositionId, onCompleted = () => null, onError = () => null }) {

  const reqPlayerPosition = useDetail(`
  {
    playerPosition {
      name
      code
      stats
      details
      createdAt
    }
  }`, playerPositionId);
  
  const [callDelete] = useDelete(DELETE_PLAYER_POSITION, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
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