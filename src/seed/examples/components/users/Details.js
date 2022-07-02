/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_USER } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/users/Details.view";

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
      profileImage { }
    }
  }`, userId);
  
  const [callDelete] = useDelete(DELETE_USER, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
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