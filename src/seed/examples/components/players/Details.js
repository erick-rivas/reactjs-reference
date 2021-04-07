import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PLAYER } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/players/Details";

function PlayerDetails({ playerId, onCompleted = () => null, onError = () => null }) {

  const reqPlayer = useDetail(`
  {
    player {
      name
      isActive
      createdAt
      photo { }
      team { }
      position { }
    }
  }`, playerId);
  
  const [callDelete] = useDelete(DELETE_PLAYER, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqPlayer.loading) return <Loading />;
  if (reqPlayer.error) return "Error";
  const { player = {} } = reqPlayer.data;

  const onClickDelete = () =>
    callDelete({ id: playerId });

  return <View
    player={player}
    onClickDelete={onClickDelete}
   />;
}

PlayerDetails.propTypes = {
  playerId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default PlayerDetails;