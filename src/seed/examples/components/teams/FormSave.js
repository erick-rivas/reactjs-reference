import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_TEAM } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/teams/Form";

function TeamFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qTeams = useQuery(`{ teams { } }`);
  const [callSave, qSave] = useSave(SAVE_TEAM, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { teams = [] } = qTeams.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

TeamFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default TeamFormSave;