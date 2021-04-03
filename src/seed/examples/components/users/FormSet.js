import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { USER, SET_USER } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/users/Form";

function UserFormSet({ userId, onCompleted = () => null, onError = () => null  }) {

  const qUser = useDetail(USER, userId);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(SET_USER, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (qUser.loading) return <Loading />;

  const { user = {} } = qUser.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null

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
}

export default UserFormSet;