import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_TEAM } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/teams/Details";

function TeamDetails({ teamId, onCompleted = () => null, onError = () => null }) {

  const reqTeam = useDetail(`
  {
    team {
      name
      description
      marketValue
      createdAt
      logo { }
      rival { }
      identityDocs { }
      players { }
    }
  }`, teamId);
  
  const [callDelete] = useDelete(DELETE_TEAM, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });

  if (reqTeam.loading) return <Loading />;
  if (reqTeam.error) return "Error";
  const { team = {} } = reqTeam.data;

  const onClickDelete = () =>
    callDelete({ id: teamId });

  return <View
    team={team}
    onClickDelete={onClickDelete}
   />;
}

TeamDetails.propTypes = {
  teamId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default TeamDetails;