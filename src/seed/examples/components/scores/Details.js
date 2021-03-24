import React from "react";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_SCORE } from "seed/gql/queries";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/scores/Details";

function ScoreDetails(props) {
  const { url } = props.match;
  const { score_id } = props.match.params;

  const qScore = useDetail(`
  {
    score {
      min
      player { }
      match { }
    }
  }`, score_id);
  
  const [cDelete] = useDelete(DELETE_SCORE, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qScore.loading) return <Loading />;
  if (qScore.error) return "Error";
  const { score = {} } = qScore.data;

  const onClickDelete = () =>
    cDelete({ id: score_id });

  const onClickBack = () => {
    const backUrl = url.substring(0, url.lastIndexOf("/"));
    props.history.push(backUrl);
  };

  return <View
    score={score}
    onClickDelete={onClickDelete}
    onClickBack={onClickBack}
   />;
}

export default ScoreDetails;