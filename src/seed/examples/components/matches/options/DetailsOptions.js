import React from "react";
import { useDelete } from "seed/gql";
import * as queries from "seed/gql/queries";
import View from "seed/examples/views/matches/options/DetailsOptions.js";

function MatchDetailsOptions(props) {
    const { url } = props.match;
    const { match_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_MATCH, {
      onCompleted: (data) => {
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        props.history.push(backUrl);
      }
    });

    const onClickDelete = () =>
      callDelete({ id: match_id });

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

export default MatchDetailsOptions;