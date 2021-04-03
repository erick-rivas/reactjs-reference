import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_MATCH } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/matches/Details";

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
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
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
}

export default MatchDetails;