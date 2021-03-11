import React, { useState } from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/matches/Form.js";

function MatchForm(props) {
  const { url } = props.match;
  const { match_id } = props.match.params;
  const isEdit = match_id != null;

  const [error, setError] = useState(null);
  const qMatch = useDetail(queries.MATCH, match_id);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSave, qSave] = useSave(queries.SAVE_MATCH, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });
  const [callSet, qSet] = useSet(queries.SET_MATCH, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: () => setError("An error has occurred, try again")
  });

  if (isEdit && qMatch.loading) return <Loading />;
  if (isEdit && qMatch.error) return "Error";
  const { match = {} } = qMatch.data;
  const { teams = [] } = qTeams.data;

  const onSubmit = (values) => {
    values.id = match_id;
    if (isEdit) callSet(values);
    else callSave(values);
  };

  return <View
    match={match}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default MatchForm;