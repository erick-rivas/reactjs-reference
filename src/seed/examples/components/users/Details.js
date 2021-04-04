import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_USER } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/users/Details";

function UserDetails({ userId, onCompleted = () => null, onError = () => null }) {

  const reqUser = useDetail(`
  {
    user {
      username
      firstName
      lastName
      email
      isActive
      createdAt
      teams { }
    }
  }`, userId);
  
  const [callDelete] = useDelete(DELETE_USER, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (reqUser.loading) return <Loading />;
  if (reqUser.error) return "Error";
  const { user = {} } = reqUser.data;

  const onClickDelete = () =>
    callDelete({ id: userId });

  return <View
    user={user}
    onClickDelete={onClickDelete}
   />;
}

UserDetails.propTypes = {
  userId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default UserDetails;