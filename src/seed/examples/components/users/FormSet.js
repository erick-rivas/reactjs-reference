/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { USER, SET_USER } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/users/Form";

function UserFormSet({ userId, onCompleted = () => null, onError = () => null  }) {

  const qUser = useDetail(USER, userId);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(SET_USER, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qUser.loading) return <Loading />;

  const { user = {} } = qUser.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = userId;
    callSet(values);
  };

  return <View
    user={user}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

UserFormSet.propTypes = {
  userId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default UserFormSet;