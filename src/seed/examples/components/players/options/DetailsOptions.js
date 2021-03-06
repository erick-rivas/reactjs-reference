import React from "react";
import { useDelete } from "seed/gql";
import * as queries from "seed/gql/queries";
import View from "seed/examples/views/players/options/DetailsOptions.js";

function PlayerDetailsOptions(props) {
    const { url } = props.match;
    const { player_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_PLAYER, {
      onCompleted: (data) => {
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        props.history.push(backUrl);
      }
    });

    const onClickDelete = () =>
      callDelete({ id: player_id });

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

export default PlayerDetailsOptions;