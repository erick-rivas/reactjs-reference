import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { MATCH, SET_MATCH } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/matches/Form";

function MatchFormSet({ matchId, onCompleted = () => null, onError = () => null  }) {

  const qMatch = useDetail(MATCH, matchId);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(SET_MATCH, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
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

MatchFormSet.propTypes = {
  matchId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default MatchFormSet;