import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_USER } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/users/Form";

function UserFormSave({ onCompleted = () => null, onError = () => null }) {
  
  const qTeams = useQuery(`{ teams { } }`);
  const [callSave, qSave] = useSave(SAVE_USER, {
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

UserFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default UserFormSave;