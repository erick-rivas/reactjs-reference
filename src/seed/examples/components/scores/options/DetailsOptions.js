import React from "react";
import { useDelete } from "seed/gql";
import * as queries from "seed/gql/queries";
import View from "seed/examples/views/scores/options/DetailsOptions.js";

function ScoreDetailsOptions(props) {
    const { url } = props.match;
    const { score_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_SCORE, {
      onCompleted: (data) => {
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        props.history.push(backUrl);
      }
    });

    const onClickDelete = () =>
      callDelete({ id: score_id });

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

export default ScoreDetailsOptions;