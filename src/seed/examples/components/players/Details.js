import React from "react";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_PLAYER } from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/players/Details.js";

function PlayerDetails(props) {
  const { url } = props.match;
  const { player_id } = props.match.params;

  const qPlayer = useDetail(`
  {
    player {
      name
      isActive
      photo { }
      team { }
      position { }
    }
  }`, player_id);
  
  const [cDelete] = useDelete(DELETE_PLAYER, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qPlayer.loading) return <Loading />;
  if (qPlayer.error) return "Error";
  const { player = {} } = qPlayer.data;

  const onClickDelete = () =>
    cDelete({ id: player_id });

  const onClickBack = () => {
    const backUrl = url.substring(0, url.lastIndexOf("/"));
    props.history.push(backUrl);
  };

  return <View
    player={player}
    onClickDelete={onClickDelete}
    onClickBack={onClickBack}
   />;
}

export default PlayerDetails;