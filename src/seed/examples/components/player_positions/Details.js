import React from "react";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PLAYER_POSITION } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/player_positions/Details";

function PlayerPositionDetails(props) {
  const { url } = props.match;
  const { player_position_id } = props.match.params;

  const qPlayerPosition = useDetail(`
  {
    playerPosition {
      name
    }
  }`, player_position_id);
  
  const [cDelete] = useDelete(DELETE_PLAYER_POSITION, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qPlayerPosition.loading) return <Loading />;
  if (qPlayerPosition.error) return "Error";
  const { playerPosition = {} } = qPlayerPosition.data;

  const onClickDelete = () =>
    cDelete({ id: player_position_id });

  const onClickBack = () => {
    const backUrl = url.substring(0, url.lastIndexOf("/"));
    props.history.push(backUrl);
  };

  return <View
    playerPosition={playerPosition}
    onClickDelete={onClickDelete}
    onClickBack={onClickBack}
   />;
}

export default PlayerPositionDetails;