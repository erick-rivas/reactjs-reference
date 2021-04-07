import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SCORE, SET_SCORE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/scores/Form";

function ScoreFormSet({ scoreId, onCompleted = () => null, onError = () => null  }) {

  const qScore = useDetail(SCORE, scoreId);
  const qPlayers = useQuery(`{ players { } }`);
  const qMatches = useQuery(`{ matches { } }`);
  const [callSet, qSet] = useSet(SET_SCORE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });

  if (qScore.loading) return <Loading />;

  const { score = {} } = qScore.data;
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;
  const error = qSet.error ? "An error has occurred" : null;

  const onSubmit = (values) => {
    values.id = scoreId;
    callSet(values);
  };

  return <View
    score={score}
    players={players}
    matches={matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

ScoreFormSet.propTypes = {
  scoreId: PropTypes.number.isRequired,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ScoreFormSet;