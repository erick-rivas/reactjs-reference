/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_TEAM } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/teams/Details.view";

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
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqTeam.loading) return <Loading />;
  if (reqTeam.error) return "Error";
  const { team = {} } = reqTeam.data;

  const onClickDelete = () =>
    callDelete({ id: parseInt(teamId) });

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