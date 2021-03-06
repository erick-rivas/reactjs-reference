import React from "react";
import { useDelete } from "seed/gql";
import * as queries from "seed/gql/queries";
import View from "seed/examples/views/player_positions/options/DetailsOptions.js";

function PlayerPositionDetailsOptions(props) {
    const { url } = props.match;
    const { player_position_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_PLAYER_POSITION, {
      onCompleted: (data) => {
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        props.history.push(backUrl);
      }
    });

    const onClickDelete = () =>
      callDelete({ id: player_position_id });

    const onClickBack = () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    };

    return <View
      url={url}
      onClickDelete={onClickDelete}
      onClickBack={onClickBack}    
    />;
}

export default PlayerPositionDetailsOptions;