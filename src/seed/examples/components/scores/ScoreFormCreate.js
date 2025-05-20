/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_SCORE } from "seed/gql/queries";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/scores/ScoreForm.view";

function ScoreFormCreate({ onCompleted = () => null, onError = () => null }) {
  
  const qPlayers = useQuery(`{ players { } }`);
  const qMatches = useQuery(`{ matches { } }`);
  const [callSave, qSave] = useSave(SAVE_SCORE, {
    onCompleted: () =>
      onCompleted()
      //Note: When the component is wrap in a ModalRoute it bind the event 'closeModal()'
  });
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;
  const error = qSave.error ? "An error has occurred" : null;

  const onSubmit = (values) =>
    callSave(values);

  return <View
    players={players}
    matches={matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

ScoreFormCreate.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default ScoreFormCreate;