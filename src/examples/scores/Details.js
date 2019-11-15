import React from "react";
import { useDetail } from "seed/gql";

import Loading from "seed/components/helpers/Loading";

import cx from "classnames";
import styles from "resources/css/examples/scores/Details.module.css";

const SCORE  = `
{
  score {
    min
    player { }
    match { }
  }
}
`;

function ScoreDetails(props)
{
  const { score_id }  = props.match.params;

  const qScore = useDetail(SCORE, score_id);

  if (qScore.loading) return <Loading />;
  if (qScore.error) return "Error";

  const { score = {} } = qScore.data;

  return (
    <div className={styles.module}>
      <label className={styles.lbl}>Min</label><br/>
      <label className={styles.txt}>{score.min.toString()}</label>
      <br/>
    </div>
  );
}

export default ScoreDetails;
