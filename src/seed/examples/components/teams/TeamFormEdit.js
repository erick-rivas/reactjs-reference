/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { TEAM, SET_TEAM } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/teams/TeamFormView.view";

function TeamFormEdit({ teamId, onCompleted = () => null, onError = () => null  }) {

  const qTeam = useDetail(TEAM, teamId);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(SET_TEAM, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qTeam.loading) return <Loading />;

  const { team = {} } = qTeam.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null;

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

TeamFormEdit.propTypes = {
  teamId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default TeamFormEdit;