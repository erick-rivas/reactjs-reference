import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/matches/Form";

function MatchFormSet(props) {
  const { url } = props.match;
  const { match_id } = props.match.params;

  const qMatch = useDetail(queries.MATCH, match_id);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(queries.SET_MATCH, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qMatch.loading) return <Loading />;

  const { match = {} } = qMatch.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = match_id;
    callSet(values);
  };

  return <View
    match={match}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default MatchFormSet;