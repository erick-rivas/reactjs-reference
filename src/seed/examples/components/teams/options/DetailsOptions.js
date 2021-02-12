import React from "react";
import { useDelete } from "seed/gql";
import * as queries from "seed/gql/queries";
import View from "seed/examples/views/teams/options/DetailsOptions.js";

function TeamDetailsOptions(props) {
    const { url } = props.match;
    const { team_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_TEAM, {
      onCompleted: (data) => {
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        props.history.push(backUrl);
      }
    });

    const onClickDelete = () =>
      callDelete({ id: team_id });

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

export default TeamDetailsOptions;