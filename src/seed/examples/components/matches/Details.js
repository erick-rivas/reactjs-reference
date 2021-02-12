import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/matches/Details.js";

const MATCH  = `
{
  match {
    date
    type
    local { }
    visitor { }
    scores { }
  }
}
`

function MatchDetails(props) {
  const { match_id }  = props.match.params;
  const qMatch = useDetail(MATCH, match_id);

  if (qMatch.loading) return <Loading />;
  if (qMatch.error) return "Error";

  const { match = {} } = qMatch.data;

  return <View
    match={match}
  />;
}

export default MatchDetails;