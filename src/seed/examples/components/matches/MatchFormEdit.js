/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { MATCH, SET_MATCH } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/matches/MatchForm.view";

function MatchFormEdit({ matchId, onCompleted = () => null, onError = () => null  }) {

  const qMatch = useDetail(MATCH, matchId);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(SET_MATCH, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qMatch.loading) return <Loading />;

  const { match = {} } = qMatch.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = matchId;
    callSet(values);
  };

  return <View
    match={match}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

MatchFormEdit.propTypes = {
  matchId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default MatchFormEdit;