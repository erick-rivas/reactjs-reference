import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { TEAM, SET_TEAM } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/teams/Form";

function TeamFormSet({ teamId, onCompleted = () => null, onError = () => null  }) {

  const qTeam = useDetail(TEAM, teamId);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(SET_TEAM, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (qTeam.loading) return <Loading />;

  const { team = {} } = qTeam.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = teamId;
    callSet(values);
  };

  return <View
    team={team}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

TeamFormSet.propTypes = {
  teamId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
}

export default TeamFormSet;