/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_MATCH } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/matches/MatchDetails.view";

function MatchDetails({ matchId, onCompleted = () => null, onError = () => null }) {

  const reqMatch = useDetail(`
  {
    match {
      date
      type
      createdAt
      local { }
      visitor { }
      scores { }
    }
  }`, matchId);
  
  const [callDelete] = useDelete(DELETE_MATCH, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqMatch.loading) return <Loading />;
  if (reqMatch.error) return "Error";
  const { match = {} } = reqMatch.data;

  const onClickDelete = () =>
    callDelete({ id: matchId });

  return <View
    match={match}
    onClickDelete={onClickDelete}
   />;
}

MatchDetails.propTypes = {
  matchId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default MatchDetails;