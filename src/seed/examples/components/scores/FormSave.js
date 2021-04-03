import React from "react";
import PropTypes from "prop-types";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import { SAVE_SCORE } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/scores/Form";

function ScoreFormSave({ onCompleted = () => null, onError = () => null }) {
  const qPlayers = useQuery(`{ players { } }`);
  const qMatches = useQuery(`{ matches { } }`);
  const [callSave, qSave] = useSave(SAVE_SCORE, {
    onCompleted: () =>
      onCompleted() //Note: ModalRoutes bind event calling 'closeModal' event
  });
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;
  const error = qSave.error ? "An error has occurred" : null

  const onSubmit = (values) =>
    callSave(values);

  return <View
    players={players}
    matches={matches}
    error={error}
    onSubmit={onSubmit}
  />;
}

ScoreFormSave.propTypes = {
  onCompleted: PropTypes.func,
  onError: PropTypes.func
}

export default ScoreFormSave;