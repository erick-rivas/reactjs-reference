import React from "react";
import PropTypes from "prop-types";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_SCORE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/scores/Details";

function ScoreDetails({ scoreId, onCompleted = () => null, onError = () => null }) {

  const reqScore = useDetail(`
  {
    score {
      min
      createdAt
      player { }
      match { }
    }
  }`, scoreId);
  
  const [callDelete] = useDelete(DELETE_SCORE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (reqScore.loading) return <Loading />;
  if (reqScore.error) return "Error";
  const { score = {} } = reqScore.data;

  const onClickDelete = () =>
    callDelete({ id: scoreId });

  return <View
    score={score}
    onClickDelete={onClickDelete}
   />;
}

ScoreDetails.propTypes = {
  scoreId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ScoreDetails;