import React from "react";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_MATCH } from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/matches/Details.js";

function MatchDetails(props) {
  const { url } = props.match;
  const { match_id } = props.match.params;

  const qMatch = useDetail(`
  {
    match {
      date
      type
      local { }
      visitor { }
      scores { }
    }
  }`, match_id);
  
  const [cDelete] = useDelete(DELETE_MATCH, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qMatch.loading) return <Loading />;
  if (qMatch.error) return "Error";
  const { match = {} } = qMatch.data;

  const onClickDelete = () =>
    cDelete({ id: match_id });

  const onClickBack = () => {
    const backUrl = url.substring(0, url.lastIndexOf("/"));
    props.history.push(backUrl);
  };

  return <View
    url={url}
    match={match}
    onClickDelete={onClickDelete}
    onClickBack={onClickBack}
   />;
}

export default MatchDetails;